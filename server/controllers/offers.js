const deleteOffer = (res, req) => {
    //req get offer id and render mainpage
    res.render('main_page')
}

const addOffer = (res, req) => {
    //get an offer details from req and render new page
    res.render('main_page')
}

module.exports = { deleteOffer, addOffer }