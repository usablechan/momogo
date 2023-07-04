const db = require('../model');
const Food = db.Food

//내가 쓰려고 만듦
//음식 데이터 넣음
exports.postFoodData = async (req, res) => {
    //   const content = {
    //     food_name: req.body.food_name,
    //     food_url: req.body.food_url,
    //     tag1: req.body.tag1,
    //     tag2: req.body.tag2,
    //     tag3: req.body.tag3,
    //     tag4: req.body.tag4
    //   }

      Food
          .create({
            food_name: req.body.food_name,
            food_url: req.body.food_url,
            tag1: req.body.tag1,
            tag2: req.body.tag2,
            tag3: req.body.tag3,
            tag4: req.body.tag4
          })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create Content failure.'
            });
        });
  };