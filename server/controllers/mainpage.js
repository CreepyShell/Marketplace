const offers = (req, res) => {
    res.render('./MainPage/main_page', {
        list: [
            {
                id: 1,
                price: 99.99,
                readyToBurgain: true,
                publicateDate: new Date(),
                product: {
                    id: 1,
                    name: "name 1",
                    description: 'Product Description 1',
                    category: 'Category',
                    location: 'Location',
                    imageURL: 'https://example.com/image.jpg',
                    timeUsed: new Date(),
                    amount: 1,
                },
                user: {
                    email: 'user1@example.com',
                    name: 'User 1',
                    phone: 1234567891,
                },
            },
            {
                id: 2,
                price: 49.99,
                readyToBurgain: false,
                publicateDate: new Date(),
                product: {
                    id: 1,
                    description: 'Product Description 1',
                    category: 'Category',
                    location: 'Location',
                    name: "name 1",
                    imageURL: 'https://example.com/image.jpg',
                    timeUsed: new Date(),
                    amount: 1,
                },
                user: {
                    email: 'user1@example.com',
                    name: 'User 1',
                    phone: 1234567891,
                },
            },
            {
                id: 3,
                price: 199.99,
                readyToBurgain: true,
                publicateDate: new Date(),
                product: {
                    id: 1,
                    description: 'Product Description 1',
                    name: "name 1",
                    category: 'Category',
                    location: 'Location',
                    imageURL: 'https://example.com/image.jpg',
                    timeUsed: new Date(),
                    amount: 1,
                },
                user: {
                    email: 'user1@example.com',
                    name: 'User 1',
                    phone: 1234567891,
                },
            },
            {
                id: 4,
                price: 79.99,
                readyToBurgain: false,
                publicateDate: new Date(),
                product: {
                    id: 1,
                    description: 'Product Description 1',
                    name: "name 1",
                    category: 'Category',
                    location: 'Location',
                    imageURL: 'https://example.com/image.jpg',
                    timeUsed: new Date(),
                    amount: 1,
                },
                user: {
                    email: 'user1@example.com',
                    name: 'User 1',
                    phone: 1234567891,
                },
            },
            {
                id: 5,
                price: 149.99,
                readyToBurgain: true,
                publicateDate: new Date(),
                product: {
                    id: 1,
                    description: 'Product Description 1',
                    category: 'Category',
                    name: "name 1",
                    location: 'Location',
                    imageURL: 'https://example.com/image.jpg',
                    timeUsed: new Date(),
                    amount: 1,
                },
                user: {
                    email: 'user1@example.com',
                    name: 'User 1',
                    phone: 1234567891,
                },
            }
        ]
    })
}

module.exports = { offers }