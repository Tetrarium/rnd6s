import calculateTotal from '../calculate';

/**
 * 1. Создаем функцию test
 *
 * test(description, work)
 *
 * description - строка, описание теста
 * work - функция - тест
 */

/**
 * демонстрационная функция
 */

// Проходит тест
// test('passed test', () => {
//   const result = 4;
//   expect(result).toBe(4);
// });

// Не проходит
// test('falling test', () => {
//   const result = 4;
//   expect(result).toBe(2);
// });

test('calculateTotal', () => {
  const list = [
    {
      id: 445,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 558,
      name: 'JavaScript',
      count: 1,
      price: 1200,
    },
  ];

  expect(calculateTotal(list)).toBe(2400);
});
