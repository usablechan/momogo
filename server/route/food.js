const express = require("express");
const router = express.Router();

const HandleFoodDataGet = require('../controller/foodDataGet');
const HandleUserDataPost = require('../controller/userDataPost');
const HandleResultGet = require('../controller/resultGet');
const HandlefoodDataPost = require('../controller/foodDataPost');

//음식 데이터 랜덤으로 뽑아서 보내줌
router.get("/getFoodData", HandleFoodDataGet.getFoodData);

//유저가 선택한 항목 DB 저장
router.post("/userData", HandleUserDataPost.postUserData);

//food정보 DB 저장(내가 쓰려고 만듦, 데이터 다 넣으면 지워도 됨)
router.post("/foodData", HandlefoodDataPost.postFoodData);

//태그 갯수 새서 보내줌
router.get("/result/:id", HandleResultGet.getResult);

module.exports = router;