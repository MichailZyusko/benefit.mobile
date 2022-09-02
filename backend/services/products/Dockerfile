# FROM node:18.8.0-alpine as build

# RUN apk add curl bash

# # install node-prune (https://github.com/tj/node-prune)
# RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

# # USER node

# WORKDIR /home/node

# COPY package.json yarn.lock ./

# RUN yarn --frozen-lockfile

# COPY . /home/node/

# RUN yarn build

# # run node prune
# RUN /usr/local/bin/node-prune

# # remove unused dependencies
# RUN rm -rf node_modules/rxjs/src/
# RUN rm -rf node_modules/rxjs/bundles/
# RUN rm -rf node_modules/rxjs/_esm5/
# RUN rm -rf node_modules/rxjs/_esm2015/
# RUN rm -rf node_modules/swagger-ui-dist/*.map

# # ---

# FROM node:18.8.0-alpine

# # USER node
# WORKDIR /home/node

# COPY --from=build /home/node/package*.json /home/node/
# COPY --from=build /home/node/yarn.lock /home/node/
# COPY --from=build /home/node/dist/ /home/node/dist/
# COPY --from=build /home/node/node_modules/ /home/node/node_modules/


# CMD ["node", "dist/main.js"]

FROM node:18.8.0-alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
