// Simple INSERT 쿼리입니다.
const jane = await User.create({ firstName: 'Jane', lastName: 'Doe' });
console.log("Jane's auto-generated ID:", jane.id);

// 옵션으로 저장할 필드만 따로 설정할 수 있습니다.
const user = await User.create(
  {
    username: 'alice123',
    isAdmin: true,
  },
  { fields: ['username'] }
);
// user.isAdmin 의 기본값이 false라 할 때
console.log(user.username); // 'alice123'
console.log(user.isAdmin); // false

//Simple SELECT 쿼리입니다. findAll 메서드는 User의 테이블 전체 데이터를 읽어옵니다.
const users = await User.findAll();
console.log(users.every((user) => user instanceof User)); // true
console.log('All users:', JSON.stringify(users, null, 2));

// 특정 필드의 데이터들만 가져올 수 있습니다. SELECT foo, bar FROM ...
Model.findAll({
  attributes: ['foo', 'bar'],
});

// 중첩 배열을 사용하여 이름을 바꿀 수 있습니다. SELECT foo, bar AS baz, qux FROM ...
Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux'],
});

// 제외할 필드를 설정할 수 있습니다.
Model.findAll({
  attributes: { exclude: ['baz'] },
});

// where 옵션은 쿼리를 필터링하는 데 사용됩니다. SELECT * FROM post WHERE authorId = 2;
Post.findAll({
  where: {
    authorId: 2,
  },
});
// 위 코드는 아래와 동일합니다. SELECT * FROM post WHERE authorId = 2;
const { Op } = require('sequelize');
Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2,
    },
  },
});

// 여러 조건문을 붙입니다. SELECT * FROM post WHERE authorId = 12 AND status = 'active';
Post.findAll({
  where: {
    authorId: 12,
    status: 'active',
  },
});
// 위 코드와 동일합니다.  SELECT * FROM post WHERE authorId = 12 AND status = 'active';
const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.and]: [{ authorId: 12 }, { status: 'active' }],
  },
});

// Op를 통해 OR도 구현할 수 있습니다. SELECT * FROM post WHERE authorId = 12 OR authorId = 13;
const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.or]: [{ authorId: 12 }, { authorId: 13 }],
  },
});
// 같은 결과를 다른 방식으로 사용할 수 있습니다. SELECT * FROM post WHERE authorId = 12 OR authorId = 13;
const { Op } = require('sequelize');
Post.findAll({
  where: {
    authorId: {
      [Op.or]: [12, 13],
    },
  },
});

// 다양한 Sequelize 연산자들 https://sequelize.org/v7/manual/model-querying-basics.html#operators

// Simple Update 쿼리입니다. update() 의 첫 번째 인자는 업데이트할 필드와 값, 두 번째 인자는 업데이트할 행들을 필터링합니다.
await User.update(
  { lastName: 'Doe' },
  {
    where: {
      lastName: null,
    },
  }
);

// Simple Delete 쿼리입니다.
await User.destroy({
  where: {
    firstName: 'Jane',
  },
});
// 모든 행을 삭제하려면 truncate: true 을 추가합니다. 만약 truncate가 true면 where문은 무시합니다.
await User.destroy({
  truncate: true,
});

// Creating in bulk, bulkCreate는 model.create와 비슷합니다. 대신 bulkCreate는 배열을 인자로 받습니다.
const captains = await Captain.bulkCreate([{ name: 'Jack Sparrow' }, { name: 'Davy Jones' }]);
console.log(captains.length); // 2
console.log(captains[0] instanceof Captain); // true
console.log(captains[0].name); // 'Jack Sparrow'
console.log(captains[0].id); // 1 // (or another auto-generated value)

const Foo = sequelize.define('foo', {
  bar: {
    type: DataTypes.TEXT,
    validate: {
      len: [4, 6],
    },
  },
});
// bulkCreate는 각 객체의 유효성 검사를 하지않습니다. 아래 코드는 유효성 검사없이 데이터를 생성합니다.
await Foo.bulkCreate([{ bar: 'abc123' }, { bar: 'name too long' }]);
// 유효성 검사 옵션을 줄 수 있지만 대신 성능이 저하됩니다. 아래 코드는 에러를 던집니다.
await Foo.bulkCreate([{ bar: 'abc123' }, { bar: 'name too long' }], { validate: true });

// https://sequelize.org/v7/manual/model-querying-basics.html#ordering-and-grouping  정렬과 그룹은 공식페이지에서 공부
