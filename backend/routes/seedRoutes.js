import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    //.remove may have to be changed to .deleteOne as .remove has been deprecated
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.deleteOne({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
});

export default seedRouter;