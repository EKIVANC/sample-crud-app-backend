const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    order_description: {
        type: String
    },
    order_price: {
        type: Number
    },
    order_priority: {
        type: String
    },
    order_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Order', Order);