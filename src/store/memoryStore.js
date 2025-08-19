class MemoryStore {
  constructor() {
    this._data = {};
    this._nextId = 1;
  }

  list() {
    return Object.values(this._data);
  }

  get(id) {
    return this._data[Number(id)] || null;
  }

  create(payload) {
    const item = { id: this._nextId, ...payload };
    this._data[this._nextId] = item;
    this._nextId += 1;
    return item;
  }

  update(id, payload) {
    const key = Number(id);
    if (!this._data[key]) return null;
    this._data[key] = { ...this._data[key], ...payload };
    return this._data[key];
  }

  delete(id) {
    const key = Number(id);
    if (!this._data[key]) return null;
    const removed = this._data[key];
    delete this._data[key];
    return removed;
  }
}

module.exports = new MemoryStore();
