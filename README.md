# akraradets.github.io

https://akraradets.github.io

## What I use
- Docker, of course
- [Vuetify](https://vuetifyjs.com/) (Because I hate HTML/CSS so much)
- [NUXT](https://nuxt.com/) because it seems like a complete package for writing web app.

## To dev

> Note that if you don't have `traefik`, run all `docker compose` with `-f docker-compose_notraefik.yaml` option.

Use `vscode` to dev. Install `remote development` and `docker` extension.
Run this to build the docker container and run it.

```sh
$ docker compose up -d --build
```

I normally `Attach Visual Studio Code` to the container and do everything in there.
However, if you wish to write the code without attaching the vscode, you can start the dev server with this.

```sh
$ docker compose exec dev yarn dev
```

To deploy the site to the GitHub page, (this is my setting) generate the site (this will generate a static site) and copy all the generated files into `/docs`. 
To generate files,

```sh
$ docker compose exec dev yarn generate
```

The generated site will be in `/project/.output/public`.
Delete the old content in `/docs` but leave the file named `.nojekyll`.
Copy all files in `/project/.output/public` to `/docs`.
Commit and push to the GitHub repository. 
Wait a bit.


To stop and clear containers and network
```shell
$ docker compose down
```

If you want to clear everything.
```sh
docker compose down --rmi all --volumes
```