console.log('Module.js');

/**
 * Тестовая функция.
 * @return {Promise<string>} промис
 */
async function start() {
  return 'async working !';
}

start().then(console.log);
