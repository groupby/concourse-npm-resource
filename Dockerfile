FROM mhart/alpine-node
MAINTAINER Ben Teichman <ben.teichman@groupbyinc.com>

RUN npm install available-versions semver-diff --prefix /opt/resource

COPY assets/common.js /opt/resource/common
COPY assets/check.js /opt/resource/check
COPY assets/in.js /opt/resource/in
COPY assets/out.js /opt/resource/out
