import { sequelize } from './[1]userModel.mjs';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      this.setDataValue('password', hash(value));
      // 만약 setDataValue를 호출하지 않는다면 해당 필드는 null 값입니다.
    },
  },
});

function hash(value) {
  return value + '암호화했다고 가정';
}

await User.sync({ force: true });
const user = User.build({ username: 'someone', password: 'NotSo§tr0ngP4$SW0RD!' });
console.log(user.password);
console.log(user.getDataValue('password'));
// 그렇다면 user.password 를 직접 바꾼다면?
user.password = '무야호호'; // "무야호호암호화했다고 가정" 자동으로 set함수를 호출합니다.!
console.log(user.password);
await user.save();
