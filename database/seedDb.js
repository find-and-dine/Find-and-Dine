const faker = require('faker');
const Image = require('./index.js');

const seedDb = () => {
  function makeOnePhoto() {
    return {
      url: faker.image.imageUrl(),
      caption: faker.lorem.sentence(),
      ownersubmitted: faker.random.boolean(),
      rating: Math.floor((Math.random() * 5) + 1),
      username: faker.internet.userName(),
      thumbnail: faker.internet.avatar(),
    };
  }
  function getPhotos() {
    const photos = [];
    const numOfPhotos = Math.floor((Math.random() * 6) + 5);
    for (let i = 0; i < numOfPhotos; i += 1) {
      const newPhoto = makeOnePhoto();
      photos.push(newPhoto);
    }
    return photos;
  }

  for (let i = 0; i < 100; i += 1) {
    const seedInitiated = new Image({
      restaurant: `${faker.commerce.color()} ${faker.company.catchPhraseAdjective()} ${faker.commerce.productName()}`,
      id: i + 1,
      photo: getPhotos(),
    });
    seedInitiated.save((err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};
seedDb();
