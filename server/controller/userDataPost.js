const db = require('../model');
const User = db.User

//유저데이터 추가
//POST http://localhost:3000/userData
//body 형식
// {
// 	"user_id" : "123456789",
// 	"get_food" : "육개장",
// 	"choose_food": "0"
// }
exports.postUserData = async (req, res) => {
    // const content = {
    //     user_id: req.body.user_id,
    //     get_food: req.body.get_food,
    //     choose_food: req.body.choose_food,
    // }

    User
        .create({
            user_id: req.body.user_id,
            get_food: req.body.get_food,
            choose_food: req.body.choose_food,
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create data failure.'
            });
        });
};