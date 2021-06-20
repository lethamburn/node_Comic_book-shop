/**
 * Product: name, categoria, description, price, rating, comments, image
 * Cart: userId, products, quantity, total
 * User: email, password, name, address, orders [array de id's],
 * Orders: userId, productos: [ObjectID products], date, paid (boolean), quantity, shippingAddress,
 */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  comics: [{ type: mongoose.Types.ObjectId, ref: 'comics' }],
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
