console.log('Module.js');

/**
 * Тестовая функция.
 * @return {Promise<string>} промис
 */
async function start() {
  return await Promise.resolve('async working !');
}

start().then(console.log);
