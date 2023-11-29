const Book = require('../models/books');

exports.postBook = async (req, res) => {
  const { name, author } = req.body;
  if (!name || !author) {
    return res.status(400).json({ error: 'name and author are required' });
  }

  try {
    const newBook = new Book({ name, author });
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.putBooks =  async (req, res) => {
    const { id } = req.params;
    const { name, author, image } = req.body;
  
    try {
      // Find the book by ID and update its properties
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { name, author, image },
        { new: true } // This option returns the updated document
      );
  
      // Check if the book with the specified ID exists
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      return res.json(updatedBook);
    } catch (error) {
      // Handle errors, such as invalid ID or database issues
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    return res.json(deletedBook);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
