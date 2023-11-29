const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 10000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://esther:AprilDeveloper1998@cluster0.7mgqjgc.mongodb.net/book_api1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// Use the bookRoutes for routes related to books
app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
