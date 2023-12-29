# akraradets.github.io

https://akraradets.github.io

## What I use
- Docker, of course
- Vue (frontend framework)
- Bulma (CSS framework)


## To dev

Use `vscode` to dev. Install `remote development` and `docker` extension.
Run this to build and run the project.

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