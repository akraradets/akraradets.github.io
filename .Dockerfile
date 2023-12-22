FROM node:20.10.0-bookworm

RUN yarn global add @vue/cli

CMD tail -f /dev/null