const express = require('express');
const store = require('../store/memoryStore');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(store.list());
});

router.post('/', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(415).json({ error: 'Request must be application/json' });
  }
  const { name, qty } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing field: name' });
  const item = store.create({ name, qty: qty ?? 1 });
  res.status(201).json(item);
});

router.get('/:id', (req, res) => {
  const item = store.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

router.put('/:id', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(415).json({ error: 'Request must be application/json' });
  }
  const payload = req.body;
  const updated = store.update(req.params.id, payload);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
});

router.patch('/:id', (req, res) => {
  const updated = store.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
});

router.delete('/:id', (req, res) => {
  const deleted = store.delete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ status: 'deleted', id: Number(req.params.id) });
});

module.exports = router;
