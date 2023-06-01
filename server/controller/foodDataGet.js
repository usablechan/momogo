const db = require('../model');
const Food = db.Food;

//랜덤으로 음식 가져옴
//get_num 바꾸면 개수 바꿀 수 있음
exports.getFoodData = async (req, res) => {
    const getnum = 3;//가져올 음식개수

    try {
        const foods = await Food.findAll();
        const randomFoods = getRandomItems(foods, getnum);
        res.json(randomFoods);
    } catch (error) {
        console.error('get food data error :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//ramdom function
function getRandomItems(arr, count) {
    const shuffled = arr.slice();
    let i = arr.length;
    let temp, randomIdx;

    while (i--) {
        randomIdx = Math.floor((i + 1) * Math.random());
        temp = shuffled[randomIdx];
        shuffled[randomIdx] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(0, count);
};
