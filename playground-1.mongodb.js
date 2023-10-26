// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('offers').insertMany([
    {
        _id: "11",
        price: 99.99,
        readyToBurgain: true,
        publicateDate: new Date(),
        product: {
            id: 2,
            name: "name 1",
            description: "Product Description 1",
            category: "Category",
            location: "Location",
            imageURL: "https://example.com/image.jpg",
            timeUsed: new Date(),
            amount: 1,
        },
        user: {
            id: 111,
            "_id": { "$oid": "a53e8cf5cb6411402c7716y1" },
            email: "user@example.com",
            name: "User",
            phone: 1234567890,
            passwordHash: "kjasdhadfskl"
        },
    },
    {
        _id: "2",
        price: 49.99,
        readyToBurgain: false,
        publicateDate: new Date(),
        product: {
            id: 0,
            description: "Product Description 1",
            category: "Category",
            location: "Location",
            name: "name 1",
            imageURL: "https://example.com/image.jpg",
            timeUsed: new Date(),
            amount: 1,
        },
        user: {
            id: 2,
            "_id": { "$oid": "a53e8cf5cb6411402c7716y2" },
            email: "user2@example.com",
            name: "User 2",
            phone: 1234567892,
            passwordHash: "kjasdhadfskl"
        },
    },
    {
        _id: "3",
        price: 199.99,
        readyToBurgain: true,
        publicateDate: new Date(),
        product: {
            id: 3,
            description: "Product Description 1",
            name: "name 1",
            category: "Category",
            location: "Location",
            imageURL: "https://example.com/image.jpg",
            timeUsed: new Date(),
            amount: 1,
        },
        user: {
            id: 3,
            "_id": { "$oid": "a53e8cf5cb6411402c7716y3" },
            email: "user3@example.com",
            name: "User 3",
            phone: 1234567893,
            passwordHash: "kjasdhadfskl"
        },
    },
    {
        _id: "4",
        price: 79.99,
        readyToBurgain: false,
        publicateDate: new Date(),
        product: {
            id: 4,
            description: "Product Description 1",
            name: "name 1",
            category: "Category",
            location: "Location",
            imageURL: "https://example.com/image.jpg",
            timeUsed: new Date(),
            amount: 1,
        },
        user: {
            id: 4,
            "_id": { "$oid": "a53e8cf5cb6411402c7716y4" },
            email: "user4@example.com",
            name: "User 4",
            phone: 1234567894,
            passwordHash: "kjasdhadfskl"
        },
    },
    {
        _id: "5",
        price: 149.99,
        readyToBurgain: true,
        publicateDate: new Date(),
        product: {
            id: 5,
            description: "Product Description 1",
            category: "Category",
            name: "name 1",
            location: "Location",
            imageURL: "https://example.com/image.jpg",
            timeUsed: new Date(),
            amount: 1,
            passwordHash: "kjasdhadfskl"
        },
        user: {
            id: 5,
            "_id": { "$oid": "a53e8cf5cb6411402c7716y5" },
            email: "user5@example.com",
            name: "User 5",
            phone: 1234567895,
            passwordHash: "kjasdhadfskl"
        },
    }
]);
