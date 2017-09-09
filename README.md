News Webiste
----

[![Build Status](https://travis-ci.org/garciadiazjaime/website-news.svg)](https://travis-ci.org/garciadiazjaime/website-news)

Run project:
----
a) install all packages:

`yarn`

b) run scrpper

`npm start`


Login rch
`rhc -l setup email`

Setting up Envs
`rhc env set NPM_CONFIG_PRODUCTION=true -a app`

Checking Envs
`rhc env list -a app`


docker pull redis
docker run -d --name redis -p 6379:6379 redis

docker build -t mintitmedia/website-news .
docker run -d -p 49160:3030 --link redis:redis mintitmedia/website-news
