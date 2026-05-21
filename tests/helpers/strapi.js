const strapiPkg = require('@strapi/strapi'); // Импортируем сам пакет как объект

let instance;

async function setupStrapi() {
  if (!instance) {
    // В v5 вызывается метод createStrapi() из пакета
    instance = await strapiPkg.createStrapi().load();
    
    // Запускаем HTTP-сервер для интеграционных тестов
    await instance.server.listen(); 
  }
  return instance;
}

async function cleanupStrapi() {
  if (instance) {
    // Метод destroy полностью очищает инстанс и закрывает соединения с БД
    await instance.destroy();
  }
}

module.exports = { setupStrapi, cleanupStrapi };