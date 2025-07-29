import { items } from '../dal/items.dal.js';

export const getAllItems = (query) => {
  if (query && query.name) {
    return items.filter(item => item.name.includes(query.name));
  }
  return items;
};

export const getItem = (id) => {
  return items.find(item => item.id === parseInt(id));
};
