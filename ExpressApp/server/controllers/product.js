const addProduct = (req, res) => {
    //add prodcut to the db
    res.render('./MainPage/add_offer.pug');
}

const deleteProduct = (req, res) => {
    //delete prodcut from the db
    res.render('./MainPage/add_offer.pug');
}

module.exports = { addProduct, deleteProduct }