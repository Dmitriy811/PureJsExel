import cat from './module'
import './css/main.sass'


console.log(cat)

async function start() {
  return await Promise.resolve('async working...')
}

start().then(console.log)


