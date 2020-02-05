const getItems = (data) => ({
  type: 'GET_ITEMS',
  items: data,
});

const getItemsFail = () => ({
  type: 'GET_ITEMS_FAILED',
});

export { getItems, getItemsFail };
