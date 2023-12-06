const mongoose = require('mongoose');
const product = mongoose.model('Product');

const getAllUserProducts = (req, res) => {
    product.find({userId : req.params['id']}).then((products) => {
        if (!products) {
            res
                .status(400)
                .json(err);
        }
        res
            .status(201)
            .json(products);
    })
        .catch(err => {
            res.status(500).json(err)
        })
}

const deleteUserProduct = (req, res) => {
    let id = req.params['id'];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("Invalid id");
    }
    product.findByIdAndDelete(id)
        .then(foundProduct => {
            if (!foundProduct) {
                res.status(404)
                    .json("Product with provided id was not found");
                return;
            }
            res.status(200)
                .json("Product deleted");
        })
        .catch(err => {
            res.status(500).json(err);
        })
}
const createProduct = (req, res) => {
    product.create({
        userId: req.body.userId,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        imageURL: req.body.imageURL,
        timeUsed: new Date(req.body.timeUsed),
        amount: req.body.amount
    }).then(createdProduct => {
        if (!createdProduct) {
            res
                .status(400)
                .json(err);
        }
        res
            .status(201)
            .json(createdProduct);
    }).catch(err => {
        res.status(500).json(err)
    });
}

module.exports = { getAllUserProducts, deleteUserProduct, createProduct }