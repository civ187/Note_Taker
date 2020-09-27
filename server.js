const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// MIDDLEWARES intercept data before it reaches POST route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router Middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));