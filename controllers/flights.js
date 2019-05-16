var Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function newFlight(req,res) {
    res.render('flights/new')
}


function create(req, res) {
    Flight.create(req.body);
    res.redirect('/flights')
}

function show(req, res) {
    res.render('flights/show', {
        flight: Flight.getOne(req.params.id),
        flightId: parseInt(req.params.id) + 1 
    });
}

function index(req, res) {
    res.render('flights/index', {
      flights: Flight.getAll()
    });
}