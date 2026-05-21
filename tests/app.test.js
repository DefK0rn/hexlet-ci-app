const { setupStrapi, cleanupStrapi } = require('./helpers/strapi');

let strapi; // Объявляем локальную переменную для тестов

beforeAll(async () => {
  strapi = await setupStrapi(); // Сохраняем инстанс Strapi
});

afterAll(async () => {
  await cleanupStrapi();
});

test('strapi is defined', () => {
  expect(strapi).toBeDefined();
});