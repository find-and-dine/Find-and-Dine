const mongoose = require('mongoose');

mongoose.connect('mongodb://locaLhost/seedDb', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to your umm what idk?');
});

const imageSchema = new mongoose.Schema({
  restaurant: String,
  id: Number,
  photo: [{
    url: String,
    caption: String,
    ownersubmitted: String,
    rating: String,
    username: String,
    thumbnail: String,
  }],
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
