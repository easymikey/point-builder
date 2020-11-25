start:
		npx react-scripts start

build:
		npx react-scripts build

test:
		npx react-scripts test

deploy:
		docker system prune --all \
		&& docker build -t front . \
		&& docker run -p 5000:5000 -t front

eject:
		npx react-scripts eject

lint:
		npx eslint --ext ts,tsx .
