const { test } = require('node:test');
const assert = require('node:assert/strict');
const panesPaging = require('../js/panes-paging.js');

test('totalPages: redondea hacia arriba', () => {
  assert.equal(panesPaging.totalPages(57, 20), 3);
  assert.equal(panesPaging.totalPages(40, 40), 1);
  assert.equal(panesPaging.totalPages(41, 40), 2);
});

test('totalPages: menos items que la página', () => {
  assert.equal(panesPaging.totalPages(5, 10), 1);
});

test('totalPages: sin items', () => {
  assert.equal(panesPaging.totalPages(0, 10), 0);
});

test('totalPages: "todos" devuelve 1 página', () => {
  assert.equal(panesPaging.totalPages(57, 'todos'), 1);
});

test('slice: pagina correctamente', () => {
  const items = Array.from({ length: 57 }, (_, i) => i);
  assert.equal(panesPaging.slice(items, 1, 20).length, 20);
  assert.deepEqual(panesPaging.slice(items, 1, 20), items.slice(0, 20));
  assert.deepEqual(panesPaging.slice(items, 2, 20), items.slice(20, 40));
  assert.equal(panesPaging.slice(items, 3, 20).length, 17);
  assert.deepEqual(panesPaging.slice(items, 3, 20), items.slice(40));
});

test('slice: pagina fuera de rango devuelve vacío', () => {
  const items = Array.from({ length: 57 }, (_, i) => i);
  assert.deepEqual(panesPaging.slice(items, 99, 20), []);
});

test('slice: "todos" devuelve el arreglo completo', () => {
  const items = Array.from({ length: 57 }, (_, i) => i);
  assert.deepEqual(panesPaging.slice(items, 1, 'todos'), items);
});

test('slice: arreglo vacío', () => {
  assert.deepEqual(panesPaging.slice([], 1, 20), []);
  assert.deepEqual(panesPaging.slice([], 1, 'todos'), []);
});