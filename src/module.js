console.log('test work import');
async function start() {
    await Promise.resolve('Async working').then(console.log)
}

start()