dev:
	deno run -A --unstable index.js

test:
	deno test

mongo:
	docker run --rm -it \
	-p 27017:27017 \
	--name deno \
	mongo:4
