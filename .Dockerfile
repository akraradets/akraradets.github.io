FROM node:20.10.0-bookworm

ENV NODE_PATH /root/node_modules
WORKDIR /root/project

RUN --mount=type=bind,source=./project/package.json,target=/root/project/package.json
RUN --mount=type=bind,source=./project/yarn.lock,target=/root/project/yarn.lock

RUN yarn install --modules-folder ${NODE_PATH}

CMD tail -f /dev/null