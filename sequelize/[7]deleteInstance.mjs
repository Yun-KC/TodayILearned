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
