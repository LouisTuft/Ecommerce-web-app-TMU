import bcrypt from 'bcryptjs';

const data = {
    products:[
        {
            name:'Product 1',
            category:'Shirts',
            image:'/images/louis.jpg',
            price:25,
            countInStock:10,
            brand:'TeeMeUp',
            rating:5,
            numReviews:10,
            description:'High quality product'
        },
        {
            name:'Product 2',
            category:'Shirts',
            image:'/images/louis.jpg',
            price:25,
            countInStock:10,
            brand:'TeeMeUp',
            rating:4.5,
            numReviews:10,
            description:'High quality product'
        },
        {
            name:'Product 3',
            category:'Shirts',
            image:'/images/louis.jpg',
            price:25,
            countInStock:10,
            brand:'TeeMeUp',
            rating:4,
            numReviews:10,
            description:'High quality product'
        },
    ],
};
export default data;
