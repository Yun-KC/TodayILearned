import { Sequelize, DataTypes, Model } from 'sequelize';
export const sequelize = new Sequelize('test', 'root', '1!Q', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
});

export class User extends Model {}

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
    tableName: 'user', // 테이블 이름을 직접 알릴 수 있다.
  }
);
