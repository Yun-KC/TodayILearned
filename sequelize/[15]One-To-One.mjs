import { sequelize } from './[1]userModel.mjs';
import { DataTypes } from 'sequelize';

const Foo = sequelize.define(
  'Foo',
  {
    name: { type: DataTypes.STRING, allowNull: true },
  },
  {
    timestamps: false,
  }
);

const Bar = sequelize.define(
  'Bar',
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

Foo.hasOne(Bar);
Bar.belongsTo(Foo);
// 외래키가 타겟 모델인 Bar에 FooId 칼럼을 추가합니다.
await sequelize.sync({ force: true });

Foo.hasOne(Bar, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
Bar.belongsTo(Foo);

// // RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL. 두 번째 인자로 옵션을 추가할 수 있습니다.
// // 일대일 연결의 기본값은 ON DELETE의 경우 SET NULL이고, ON UPDATE의 경우 CASCADE입니다.

// 외래키의 칼럼 이름을 설정할 수도 있습니다. 또한 foreignKey는 열에 대해서 type, allowNull, defaultValue 등과 같은 옵션을 지정할 수 있습니다.
// Option 1
Foo.hasOne(Bar, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
  foreignKey: 'myFooId',
});
Bar.belongsTo(Foo);

// Option 2
Foo.hasOne(Bar, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
  foreignKey: {
    name: 'myFooId',
  },
});
Bar.belongsTo(Foo);

// Option 3
Foo.hasOne(Bar);
Bar.belongsTo(Foo, {
  foreignKey: 'myFooId',
});

// Option 4
Foo.hasOne(Bar);
Bar.belongsTo(Foo, {
  foreignKey: {
    name: 'myFooId',
  },
});
