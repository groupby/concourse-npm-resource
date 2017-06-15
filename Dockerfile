FROM mhart/alpine-node
MAINTAINER Ben Teichman <ben.teichman@groupbyinc.com>

RUN npm install available-versions semver-diff --prefix /opt/resource

COPY assets/ /opt/resource
