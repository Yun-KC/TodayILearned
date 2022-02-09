import { sequelize } from './[1]userModel.mjs';
import { DataTypes } from 'sequelize';

const getset = sequelize.define('getset', {
  // 모든 사용자 이름을 대문자로 보고싶다면? 하지만 데이터베이스에는 굳이 대문자로 저장하고 싶지 않다면?
  username: {
    type: DataTypes.STRING,
    get() {
      //대신 getter에서 this.username을 사용하려고 했다면 무한 루프가 발생했을 것입니다!
      //이것이 Sequelize가 getDataValue 메소드를 제공하는 이유입니다.
      const rawValue = this.getDataValue('username');
      return rawValue ? rawValue.toUpperCase() : null;
    },
  },
});
await sequelize.sync({ force: true });

const user = await getset.create({ username: 'muyaho' });
console.log(user); // 실제로 DB에는 'muyaho'가 저장되어있습니다.
console.log(user.username); // getter로 인해 'MUYAHO'이 출력이 됩니다.
console.log(user.toJSON()); // 여기서도 'MUYAHO'이 출력이 됩니다.
console.log(user.getDataValue('username')); // 'muyaho' 출력
