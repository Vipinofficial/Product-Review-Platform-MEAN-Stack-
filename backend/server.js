// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('../backend/routers/authRoutes.js');
const productRoutes = require('../backend/routers/productRoutes.js');
const reviewRoutes = require('../backend/routers/reviewRoutes.js');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/product-review-forum', {
    family: 4
})
.then (() => console.log("Mongo DB connected"))
.catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
