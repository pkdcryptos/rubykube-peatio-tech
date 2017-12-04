VERSION := $(shell cat VERSION)
IMAGE   := gcr.io/hc-public/peatio-tech:$(VERSION)

.PHONY: default build push run ci deploy secret

default: build run

build:
	@echo '> Building "peatio-tech" docker image...'
	@docker build -t $(IMAGE) .

push: build
	gcloud docker -- push $(IMAGE)

run:
	@echo '> Starting "peatio-tech" container...'
	@docker run -d $(IMAGE)

ci:
	@fly -t ci set-pipeline -p peatio-tech -c config/pipelines/review.yml -n
	@fly -t ci unpause-pipeline -p peatio-tech

deploy: push
	@helm install ./config/charts/peatio-tech --set "image.tag=$(VERSION)"

upgrade:
	@helm upgrade landing ./config/charts/peatio-tech --set "image.tag=$(VERSION)"

secret:
	@kubectl create -n peatio-tech secret generic peatio-tech-secret --from-literal=sendgrid-api-key=$(SENDGRID_API_KEY)
