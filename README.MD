# Linkd

A simple but powerful selfhosted link shortener service written for Deno

## How do I use it?

Start the docker image

```sh
$ docker run -p 1336:1336 -d hexf/linkd
```

Add a url

```sh
$ curl --request PUT --data "link=https://github.com/hexf&short=github" http://localhost:1336/link
```

Use the link

```sh
$ curl -L http://localhost:1336/github
```

See the clicks

```sh
$ curl http://localhost:1336/link?short=github | jq
```

## Presistent Data Storage

As of now the links are stored in memory, in the future it is planned to add redis and postgresql to the list of datastore providers.
