let Order = require('../models/order.model.js');

module.exports = function (routes) {

    routes.route('/').get(function(req, res) {
        Order.find(function(err, orders) {
            if (err) {
                console.log(err);
            } else {
                res.json(orders);
            }
        });
    });


    routes.route('/:id').get(function(req, res) {
        let id = req.params.id;
        Order.findById(id, function(err, order) {
            res.json(order);
        });
    });
    routes.route('/:id').delete(function(req, res) {
        let id = req.params.id;
        Order.findByIdAndRemove(id);
        res.status(200).send("deleted");
    });

    routes.route('/update/:id').post(function(req, res) {
        Order.findById(req.params.id, function(err, order) {
            if (!order)
                res.status(404).send("data is not found");
            else
                order.order_description = req.body.order_description;
            order.order_price = req.body.order_price;
            order.order_priority = req.body.order_priority;
            order.order_completed = req.body.order_completed;

            order.save().then(order => {
                res.json('Order updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    });

    routes.route('/add').post(function(req, res) {
        let order = new Order(req.body);
        order.save()
            .then( () => {
                res.status(200).json({'order': 'order added successfully'});
            })
            .catch(err => {
                res.status(400).send('adding new order failed');
                console.log(err);
            });
    });
};