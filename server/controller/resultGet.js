const db = require('../model');
const Food = db.Food;
const User = db.User;

//태그 갯수 반환
//GET http://localhost:3000/result/:id
//response 형식
// {
// 	"양식": 1,
// 	"안매운거": 3,
// 	"면": 3,
// 	"뜨거운거": 3,
// 	"일식": 1,
// 	"한식": 1
// }
exports.getResult = async (req, res) => {
    try {
        const userID = req.params.id;
        // const choose = '1';

        //유저가 좋다고 선택한 음식 모두 가져옴
        const user1 = await User.findAll(
            {
                where: { user_id: userID, choose_food: '2' },
                raw: true
            });
        //유저 없으면 404
        if (!user1) {
            return res.status(404).json({ error: 'User not found' });
        }
        const selectedFood1 = user1.map(obj => obj.get_food);

        //음식 태그 개수 세기
        const selectTags1 = [];
        for (const foodId of selectedFood1) {
            const food = await Food.findOne(
                {
                    where: { food_name: foodId },
                    raw: true
                });
                
            selectTags1.push(food.tag1, food.tag2, food.tag3, food.tag4);
        }

        //유저가 그러그렇다고 선택한 음식 모두 가져옴
        const user2 = await User.findAll(
            {
                where: { user_id: userID, choose_food: '1' },
                raw: true
            });
        if (!user2) {
            return res.status(404).json({ error: 'User not found' });
        }
        const selectedFood2 = user2.map(obj => obj.get_food);

        const selectTags2 = [];
        for (const foodId of selectedFood2) {
            const food = await Food.findOne(
                {
                    where: { food_name: foodId },
                    raw: true
                });
                
            selectTags2.push(food.tag1, food.tag2, food.tag3, food.tag4);
        }

        const countTag = {};
        
        //좋은것 +=2
        for (const tag of selectTags1) {
            if (countTag[tag]) {
                countTag[tag]+=2;
            } else {
                countTag[tag] = 2;
            }
        }
        
        //그냥그런거 +=1
        for (const tag of selectTags2) {
            if (countTag[tag]) {
                countTag[tag]++;
            } else {
                countTag[tag] = 1;
            }
        }

        res.json(countTag);

    } catch (error) {
        console.error('error :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};