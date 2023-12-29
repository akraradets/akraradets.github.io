FROM node:20.10.0-bookworm

WORKDIR /root/project

# RUN --mount=type=bind,source=./project/package.json,target=/root/project/package.json
# RUN --mount=type=bind,source=./project/yarn.lock,target=/root/project/yarn.lock
RUN /bin/bash && yarn global add @vue/cli
RUN --mount=type=bind,source=./project/package.json,target=package.json \
    --mount=type=bind,source=./project/yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install
    # yarn install --production --frozen-lockfile


# RUN /bin/bash && yarn install

COPY ./project /root/project

CMD yarn serve