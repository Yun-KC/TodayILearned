import { User, sequelize } from './[1]userModel.mjs';

/*
  기본적으로 Sequelize는 DataTypes.DATE 데이터 유형을 사용하여 모든 모델에 createdAt 및 updatedAt 필드를 자동으로 추가합니다.
  Sequelize를 사용하여 무언가를 만들거나 업데이트할 때마다 해당 필드가 올바르게 설정됩니다. 
  createdAt 필드에는 생성 순간을 나타내는 타임스탬프가 포함되고, updatedAt에는 최신 업데이트의 타임스탬프가 포함됩니다.
*/

sequelize.define(
  'student',
  {
    name: DataTypes.STRING, // 열에 대해 설정할 옵션이 데이터 유형뿐인 경우 구문을 단축할 수 있습니다.
    age: {
      defaultValue: 10, // 필드의 기본 값입니다.
      type: sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: true, // 이 옵션으로 자동으로 생성되는 createdAt, updatedAt 필드를 생성할지 결정합니다.
    createdAt: false, // createdAt, updatedAt 두 옵션중 하나만 사용할 수도 있습니다.
    updatedAt: 'updateTimestamp',
  }
);

const { Model, DataTypes, Deferrable } = require('sequelize');

class Foo extends Model {}
Foo.init(
  {
    // 값이 설정되지 않을 경우 true로 기본값이 정해집니다.
    flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

    // 값이 설정되지 않을 경우 현재 시간으로 기본값이 정해집니다.
    myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

    //  allowNull를 false로 설정하면 title 칼럼에 NOT NULL 옵션이 추가되고, 열이 null 인 경우 DB에서 에러를 던집니다.
    title: { type: DataTypes.STRING, allowNull: false },

    // 복합 인덱스입니다. 두 필드의 값이 다른 데이터와 중복이 되면 안됩니다.
    // {uniqueOne: '무한 도전', uniqueTwo: 10}
    // {uniqueOne: '무한 도전', uniqueTwo: 10} X! 두 필드의 값이 동시에 일치되는 행이 있을 경우 에러를 던집니다.!
    // {uniqueOne: '무한 도전', uniqueTwo: 11} O! 둘 중 하나의 필드가 다르기 때문에 행을 추가할 수 있습니다.
    uniqueOne: { type: DataTypes.STRING, unique: 'compositeIndex' },
    uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

    // 고유해야합니다.
    someUnique: { type: DataTypes.STRING, unique: true },

    // DB에 프라이머리 키로 설정합니다.
    identifier: { type: DataTypes.STRING, primaryKey: true },

    // 자동으로 숫자를 올려 값을 채웁니다.
    incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

    // 필드 네임을 칼럼옵션에서 설정할 수 있습니다.
    fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },

    // 외래키 설정 방법입니다.
    bar_id: {
      type: DataTypes.INTEGER,

      references: {
        // 참조할 다른 모델입니다.
        model: Bar,

        // 참조할 다른 모델의 칼럼입니다.
        key: 'id',
      },
    },

    // 칼럼에 대해 코멘트를 추가합니다. in MySQL, MariaDB, PostgreSQL and MSSQL
    commentMe: {
      type: DataTypes.INTEGER,
      comment: 'This is a column name that has a comment',
    },
  },
  {
    sequelize,
    modelName: 'foo',

    // 위에서 필드 옵션으로 unique:true 를 설정한 것과 정확히 같습니다.
    indexes: [{ unique: true, fields: ['someUnique'] }],
  }
);
