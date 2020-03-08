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

The following persistent data storage options are available, by setting the ENV flags as displayed

### Memory (Default)

```
LINKD_STORAGEPROVIDER=MEMORY
```

### Redis

```
LINKD_STORAGEPROVIDER=REDIS
LINKD_REDIS_HOSTNAME=localhost
LINKD_REDIS_PORT=6379
```

## Todo

* [x] Redis Data Storage
* [ ] PostgreSQL Data Storage
* [ ] Frontend UI
* [ ] Kubernetes Manifest
* [x] Docker Compose Examples
