const  Products =[
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        image: require('../assets/images/product1.jpg'),
        description: 'This is a description of Product 1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 15.99,
        image: require('../assets/images/product2.jpg'),
        description: 'This is a description of Product 2',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 20.99,
        image: require('../assets/images/product3.jpg'),
        description: 'This is a description of Product 3',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 25.99,
        image: require('../assets/images/product4.jpg'),
        description: 'This is a description of Product 4',
    },
    {
        id: 5,
        name: 'Product 5',
        price: 30.99,
        image: require('../assets/images/product5.jpg'),
        description: 'This is a description of Product 5',
    },
    {
        id: 6,
        name: 'Product 6',
        price: 35.99,
        image: require('../assets/images/product6.jpg'),
        description: 'This is a description of Product 6',
    },
    {
      id:7,
      name:'Product7',
      price:'40.99',
      image :require('../assets/images/product7.jpg'),
      description:'This is a description of product7'
    }
]

export  function getProducts() {
    return Products;
}
export function getProduct(id) {
    return Products.find(product => product.id === id);
}