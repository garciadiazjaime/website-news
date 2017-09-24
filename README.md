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

docker build -t garciadiazjaime/website-news .
docker run -e API_URL=http://apinews-hoytocame.rhcloud.com/api/ -d -p 49175:3075 --link redis:redis garciadiazjaime/website-news
docker push garciadiazjaime/website-news
docker pull garciadiazjaime/website-news
