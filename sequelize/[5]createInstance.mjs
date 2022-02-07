import { sequelize } from './[1]userModel.mjs';
import { Sequelize, Model, DataTypes } from 'sequelize';

const User = sequelize.define('user', {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green',
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

(async () => {
  await sequelize.authenticate().then(() => {
    console.log('연결 완료');
  });
})();

/* 
User는 클래스지만 new 연산자로 호출해선 안됩니다. 대신에 build를 사용해 데이터를 만듭니다.
build 메서드는 데이터베이스에 맵핑할 수 있는 데이터를 생성할 뿐 실제로 데이터베이스에 저장되는 것은 아닙니다.
이후에 save() 메서드를 통해 실제 데이터베이스에 저장합니다.
sequelize의 거의 모든 메서드는 비동기지만, build는 몇 안되는 동기함수입니다.
*/
const jane = User.build({ name: 'Jane' });
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"

await jane.save();
console.log('Jane was saved to the database!');

/*
Model.create() 메서드는 Model.build()로 저장되지 않은 인스턴스를 빌드하고 instance.save()로 인스턴스를 저장하는 축약형입니다.
*/
const jane = await User.create({ name: 'Jane' });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"

/*
sequelize 인스턴스에는 많은 것들이 첨부되어있기 때문에 jane을 직접 로깅하기보다 .toJSON을 사용할 수 있습니다.
*/
const jane = await User.create({ name: 'Jane' });
// console.log(jane); // Don't do this
console.log(jane.toJSON()); // This is good!
console.log(JSON.stringify(jane, null, 4)); // This is also good!
