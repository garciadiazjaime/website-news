const fs = require('fs');
const fetch = require('node-fetch')
const debug = require('debug')('app:get-data')

const apiURL = process.env.API_URL

async function getNews() {
  debug('getting news...')
  const response = await fetch(`${apiURL}/news`)
  const data = await response.json()

  const news = data.filter(item => !item.image.includes('undefined') && item.title).slice(0, 30)

  fs.writeFileSync('./static/news.json', JSON.stringify(news));
}


async function main() {
  await getNews()
}

main().then(() => {
  debug('end')
})
