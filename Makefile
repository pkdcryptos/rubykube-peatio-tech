.PHONY: build

start: build run

build:
	docker build -t peatio-tech .

run:
	docker run -d -p 4000:8080 peatio-tech
