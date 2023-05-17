const { Order } = require("../database/models");

const getOrders = async () => {
    return await Order.findAll();
};

const getOrderById = async (id) => {
    return await Order.findByPk(id);
};

module.exports = {
    getOrders, 
    getOrderById
};