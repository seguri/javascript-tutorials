const p = new Promise((resolve, reject) => {
  console.log('Please wait while we load an obnoxious amount of JavaScript...')
  setTimeout(() => {
    if (Math.random() < 0.5) reject('❌ Request failed')
    else resolve('✅ Request succeeded')
  }, 1200)
})

p.then(console.log).catch(console.error)
console.log('The program continues while we wait the async result')
