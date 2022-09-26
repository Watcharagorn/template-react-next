FROM node:16.15.1

ARG environment="alpha"
ARG version="latest"
ENV VERSION $version
ENV ENVIRONMENT $environment

# ENV HOST 0.0.0.0
# ENV PORT 8209

WORKDIR /app
COPY . /app

EXPOSE 3000

RUN npm install
RUN npm run build


