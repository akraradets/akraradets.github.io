# akraradets.github.io

https://akraradets.github.io

## What I use
- Docker, of course
- Vuetify (Because I hate HTML/CSS so much)

## To dev

Use `vscode` to dev. Install `remote development` and `docker` extension.
Run this to build and run the project.

> Note that if you don't have `traefik`, run all `docker-compose` with `-f docker-compose_notraefik.yaml` option.

```shell
docker compose up -d --build
```

To stop and clear containers and network
```shell
docker compose down
```

If you want to clear everything.
```sh
docker compose down --rmi all --volumes
```