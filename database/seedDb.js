const faker = require('faker');
const Image = require('./index.js');

let accum = 0;

const makeOnePhoto = () => {
  const photoObject = {
    url: `https://picsum.photos/id/${accum += 1}/1200/860`,
    caption: faker.lorem.sentence(),
    ownersubmitted: faker.random.boolean(),
    rating: Math.floor((Math.random() * 5) + 1),
    username: faker.internet.userName(),
    thumbnail: faker.internet.avatar(),
  };
  return photoObject;
};
const getPhotos = () => {
  const photos = [];
  const numOfPhotos = Math.floor((Math.random() * 6) + 5);
  for (let i = 0; i < numOfPhotos; i += 1) {
    const newPhoto = makeOnePhoto();
    photos.push(newPhoto);
  }
  return photos;
};


const restaurantImages = () => {
  const imageArray = [];
  for (let i = 0; i < 100; i += 1) {
    imageArray.push({
      restaurant: `${faker.commerce.color()} ${faker.company.catchPhraseAdjective()} ${faker.commerce.productName()}`,
      id: i,
      photo: getPhotos(),
    });
  }
  return imageArray;
};

const restaurants = restaurantImages();
restaurants.forEach((image) => {
  new Image(image).save((err) => {
    if (err) {
      console.error(err);
    }
  });
});
