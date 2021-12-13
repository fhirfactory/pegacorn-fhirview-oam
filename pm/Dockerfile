FROM node:16.12.0-alpine3.14 as intermediate

COPY ca.cer /

ENV NODE_EXTRA_CA_CERTS=/ca.cer

RUN npm set proxy ${HTTP_PROXY} \ 
 && npm set strict-ssl false \
 && npm set cafile /ca.cer

# Temporarily comment out ENV NODE_ENV production, so built image works, until the package.json is resolved
# ENV NODE_ENV production

WORKDIR /src
# Install python as described on https://github.com/nodejs/docker-node/issues/384#issuecomment-729038531
#RUN apk --no-cache add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers make python2 \
# && npm install --quiet node-gyp -g
	
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install \
 && rm /ca.cer 
# && apk del native-deps

FROM node:16.12.0-alpine3.14

COPY --from=intermediate /src /src

WORKDIR /src
COPY ./ ./

EXPOSE 3000

ARG IMAGE_BUILD_TIMESTAMP
ENV REACT_APP_IMAGE_BUILD_TIMESTAMP=${IMAGE_BUILD_TIMESTAMP}
RUN echo REACT_APP_IMAGE_BUILD_TIMESTAMP=${REACT_APP_IMAGE_BUILD_TIMESTAMP}

CMD ["npm", "run", "start"]
