import { getAllItems, getItem } from '../services/items.service.js';

export const getItems = (req, res) => {
  const { query } = req;
  const items = getAllItems(query);
  res.json(items);
};

export const getItemById = (req, res) => {
  const { id } = req.params;
  const item = getItem(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};
