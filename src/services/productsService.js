export default {
  getProducts,
};

const productList = [
  {
    id: 'A',
    title: 'MOO The SlimCase',
    price: 8.99,
  },
  {
    id: 'B',
    title: 'MOO Hardcover Notebook',
    price: 14.99,
  },
  {
    id: 'C',
    title: 'MOO Softcover Journal',
    price: 5.75,
  },
];

export function getProducts() {
  return Promise.resolve(productList);
}
