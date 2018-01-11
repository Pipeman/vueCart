export default {
  getProducts
}

const productList = [
  {
    id: 'A',
    title: 'The SlimCase',
    price: 8.99
  },
  {
    id: 'B',
    title: 'Hardcover Notebook',
    price: 14.99
  },
  {
    id: 'C',
    title: 'Softcover Journal',
    price: 5.75
  }
]

function getProducts () {
  return Promise.resolve(productList)
}
