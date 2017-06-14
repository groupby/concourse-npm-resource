FROM mhart/alpine-node

RUN npm install available-versions --prefix /opt/resource

COPY in.js /opt/resource/in
COPY out.js /opt/resource/out
COPY check.js /opt/resource/check
COPY common.js /opt/resource/common
