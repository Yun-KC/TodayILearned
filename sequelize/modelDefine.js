const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('test', 'root', '1!Q', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
});

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    // freezeTableName: true, //기본 값 false이며, true일때 모델이름과 똑같은 테이블을 생성한다.
    tableName: 'Employees', // 테이블 이름을 직접 알릴 수 있다.
  }
);

/*
모델을 정의할 때 Sequelize에게 데이터베이스의 테이블에 대한 몇 가지 정보를 알려줍니다. 
그러나 테이블이 실제로 데이터베이스에 존재하지 않는다면 어떻게 될까요?
존재하지만 다른 열, 적은 열 또는 다른 차이점이 있는 경우 어떻게 합니까?
*/

User.sync({ alter: true }).then((User) => {
  console.log(User === sequelize.models.User); // true
});

/*
여기서 모델 동기화가 시작됩니다. 모델은 model.sync(options),비동기 함수(Promise를 반환하는)를 호출하여 데이터베이스와 동기화할 수 있습니다.
이 호출을 통해 Sequelize는 데이터베이스에 대한 SQL 쿼리를 자동으로 수행합니다. 이것은 JavaScript 측의 모델이 아니라 데이터베이스의 테이블만 변경합니다.
./result/[1].png

sync()는 세 가지 옵션이 있습니다.
User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
User.sync({ force: true }) - This creates the table, dropping it first if it already existed
User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc),
and then performs the necessary changes in the table to make it match the model.
alter 옵션을 사용하면 테이블 안에 데이터를 유지한 채 칼럼을 바꿉니다. User 모델에 name 속성을 추가했습니다.
./result/[3].png

모델 전부를 한번에 동기화 시키려면
sequelize.sync()를 사용합니다.
*/

/*
  To drop the table related to a model
  모델 관련 테이블을 드랍하려면
  ./result/[2].png
  모든 테이블들을 한번에 드랍하려면
  sequelize.drop()
*/

User.drop();
console.log('User table dropped!');
