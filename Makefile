VERSION     ?= $(shell cat VERSION)
SERVICE     ?= peatio-tech
SECRET_NAME ?= $(SERVICE)-secret
IMAGE       := gcr.io/helios-stage/$(SERVICE):$(VERSION)
CHART_NAME  ?= landing
NAMESPACE   ?= peatio-tech

.PHONY: default build push run ci deploy secret

default: build run

build:
	@echo '> Building "$(SERVICE)" docker image...'
	@docker build -t $(IMAGE) .

push: build
	gcloud docker -- push $(IMAGE)

run:
	@echo '> Starting "$(SERVICE)" container...'
	@docker run -d --name $(CHART_NAME) -p 8080:8080 $(IMAGE)

ci:
	@fly -t ci set-pipeline -p $(SERVICE) -c config/pipelines/review.yml -n
	@fly -t ci unpause-pipeline -p $(SERVICE)

deploy: push
	@helm install ./config/charts/$(SERVICE) -n $(CHART_NAME) --namespace $(NAMESPACE) --set "image.tag=$(VERSION)"

upgrade:
	@helm upgrade $(CHART_NAME) ./config/charts/$(SERVICE) --set "image.tag=$(VERSION)"

secret:
	@kubectl create -n $(NAMESPACE) secret generic $(SECRET_NAME) --from-literal=sendgrid-api-key=$(SENDGRID_API_KEY)
