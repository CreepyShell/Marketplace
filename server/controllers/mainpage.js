const offers = (req, res) => {
    res.render('main_page')
}

const addOffer = (req, res) => {
    res.render('add_offer')
}

module.imports = { offers, addOffer }