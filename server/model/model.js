module.exports = (sequelizeConfig, Sequelize) => {
    // Set Model

    const Food = sequelizeConfig.define(
        'food',
        
        {
            //음식 이름
            food_name: {
                type: Sequelize.STRING
            },
            //음식 사진 url
            food_url: {
                type: Sequelize.STRING
            },
            //한식, 중식, 양식, 일식
            tag1: {
                type: Sequelize.STRING
            },
            //매운거, 안매운거
            tag2: {
                type: Sequelize.STRING
            },
            //면, 밥, 면, 빵
            tag3: {
                type: Sequelize.STRING
            },
            //차가운거, 뜨거운거
            tag4: {
                type: Sequelize.STRING
            },
        }
    );

    const User = sequelizeConfig.define(
        'user',
        
        {
            //유저id
            //프론트에서 시작하기 누르면 랜덤으로 만들어서 보내줘야함
            user_id: {
                type: Sequelize.BIGINT
            },
            //해당하는 음식
            get_food: {
                type: Sequelize.STRING
            },
            //선택한 항목 - 2: 좋음, 1:그냥그럼, 0: 싫음
            choose_food: {
                type: Sequelize.STRING
            },
        }
    );

    return {
        Food,
        User,
      };
};