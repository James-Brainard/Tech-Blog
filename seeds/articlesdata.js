const { Articles }  = require('../models');

const articlesData = [
  {
    blog_title: 'Why is AMDs new FSR 2.0 software so fuzzy?',
    blog_contents: 'The blurry/fuzzy images you see when using AMD FSR upscaling happens when FSR downscales the image resolution then upscales it back via special algorithms, this results in a slightly fuzzy image.',
    created_by_user_id: 1,
    date_created: 'September 29, 2023 08:30:00'
  },
  {
    blog_title: 'Does having more cpu cores results in better performance?',
    blog_contents: 'Not necessarily. The usage of each cpu and how many cores are used depends on the application that is utilizing that hardware. If you play an old video game and try to check each cpu cores usage, you will find only the first few are really being used. This is because at the time 2-4 core cpus were mainstream and that was all the game-engine needed to utilize.',
    created_by_user_id: 1,
    date_created: 'September 29, 2023 08:30:00'
  },
];

const seedArticle = () => Articles.bulkCreate(articlesData);

module.exports = seedArticle;