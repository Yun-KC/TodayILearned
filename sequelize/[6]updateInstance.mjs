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

// 특정 필드의 값을 변경하고 싶으면 save를 재호출합니다.
const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
jane.name = 'Ada';
// the name is still "Jane" in the database
await jane.save();
// Now the name was updated to "Ada" in the database!

// set 메서드를 사용해 여러 필드를 한번에 변경할 수 있습니다.
const jane = await User.create({ name: 'Jane' });
jane.set({
  name: 'Ada',
  favoriteColor: 'blue',
});
// As above, the database still has "Jane" and "green"
await jane.save();
// The database now has "Ada" and "blue" for name and favorite color

/*
여기서 save()는 이전 집합 호출의 변경 사항뿐만 아니라 이 인스턴스에서 수행된 다른 모든 변경 사항도 유지합니다.
특정 필드 세트를 업데이트하려면 update메서드를 사용할 수 있습니다. update는 set + save 와 같습니다.
*/
const jane = await User.create({ name: 'Jane' });
jane.favoriteColor = 'blue';
await jane.update({ name: 'Ada' });
// The database now has "Ada" for name, but still has the default "green" for favorite color
await jane.save();
// Now the database has "Ada" for name and "blue" for favorite color

// 해당 데이터를 지우고 싶으면 distroy 메서드를 사용합니다. save없이도 데이터베이스에 바로 저장됩니다.
const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
await jane.destroy();
// Now this entry was removed from the database

// reload 메서드로 데이터베이스에서 인스턴스를 다시 로드합니다. 최신 데이터를 가져오기 위해서 데이터베이스에 SELECT 쿼리를 날립니다.
const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
jane.name = 'Ada';
// the name is still "Jane" in the database
await jane.reload();
console.log(jane.name); // "Jane"

// jane.save({ fields: ['name'] }) 처럼 저장할 필드만 따로 지정할 수 있습니다.
const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
console.log(jane.favoriteColor); // "green"
jane.name = 'Jane II';
jane.favoriteColor = 'blue';
await jane.save({ fields: ['name'] });
console.log(jane.name); // "Jane II"
console.log(jane.favoriteColor); // "blue"
// The above printed blue because the local object has it set to blue, but
// in the database it is still "green":
await jane.reload();
console.log(jane.name); // "Jane II"
console.log(jane.favoriteColor); // "green"

// 동시성 문제없이 인스턴스의 값을 증가/감소 시키기 위해 increment 메서드를 사용합니다.
const jane = await User.create({ name: 'Jane', age: 100, cash: 5000 });
//jane의 age에 2를 cash에 100을 증가시킵니다.
await jane.increment({
  age: 2,
  cash: 100,
});
// a 는 업데이트(increment) 전 객체입니다. 데이터베이스와 싱크를 맞추기 위해서 reload를 호출합니다.
//jane의 age에 2를 cash에 2를 증가시킵니다.
let a = await jane.increment(['age', 'cash'], { by: 2 });
let b = await jane.reload();
console.log(a === b); // true;
