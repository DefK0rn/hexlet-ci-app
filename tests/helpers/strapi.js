const createStrapi = require('@strapi/strapi'); // В v5 функция называется createStrapi

let instance;

async function setupStrapi() {
  if (!instance) {
    // В v5 вместо Straполнительного вызова .load() используется фабрика createStrapi
    instance = await createStrapi().load();
    
    // В v5 сервер монтируется автоматически при загрузке, 
    // но если тестам нужен HTTP-сервер, его запускают так:
    await instance.server.listen(); 
  }
  return instance;
}

async function cleanupStrapi() {
  if (instance) {
    // Закрываем сервер и подключение к БД стандартным методом деструкции v5
    await instance.destroy();
  }
}

module.exports = { setupStrapi, cleanupStrapi };