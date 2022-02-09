import { sequelize } from './[1]userModel.mjs';
import { DataTypes } from 'sequelize';

// 가상 필드는 Sequelize가 내부적으로 채우는 필드이지만 실제로는 데이터베이스에도 존재하지 않습니다.
const User = sequelize.define('user', {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    },
  },
});

await User.sync({ force: true });

const user = await User.create({ firstName: 'John', lastName: 'Doe' });
console.log(user.fullName); // 실제 DB에는 없는 필드('fullName')지만 버츄얼 타입이기때문에 있는 척 나타납니다.
