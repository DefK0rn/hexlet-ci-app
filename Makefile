setup: install build

install:
	rm -rf node_modules package-lock.json
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
