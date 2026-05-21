setup: install build

install:
	npm install --legacy-peer-deps

build:
	npm run build

start:
	npm start

test:
	npm test

lint:
	npx eslint .

.PHONY: build
