FROM mhart/alpine-node

RUN npm install npm-registry-client --prefix /opt/resource

COPY in.js /opt/resource/in
COPY out.js /opt/resource/out
COPY check.js /opt/resource/check
