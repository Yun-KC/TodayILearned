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
