.PHONY: up

up:
	docker-compose -f ./ops/docker-compose.yml up -d --build

.PHONY: down

down:
	docker-compose -f ./ops/docker-compose.yml down