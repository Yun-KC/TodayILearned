import { DataTypes, QueryTypes } from 'sequelize';
import { sequelize } from './[1]userModel.mjs';

const Foo = sequelize.define('foo', {
  bar: {
    type: DataTypes.TEXT,
    validate: {
      len: [4, 6],
    },
  },
});
/* 
SQL 쿼리를 직접 사용할 수 있습니다.
리턴값은 기본적으로 이 함수는 결과 배열과 메타데이터(영향을 받는 행의 양 등)를 포함하는 객체의 두 인수를 반환합니다. 
하지만 MySQL, MSSQL의 경우 두 리턴 값은 동일한 개체입니다.
 */
const [results, metadata] = await sequelize.query('SELECT * from foos');
console.log(results === metadata); // true;

// 옵션으로 타입을 지정하면 메타데이터 없이 쿼리 수행 결과의 데이터를 리턴합니다.
const data = await sequelize.query('SELECT * from foos', {
  type: QueryTypes.SELECT,
});

// 옵션으로 모델을 전달하면 반환된 데이터는 해당 모델의 인스턴스가 됩니다.
const fooInstance = await sequelize.query('SELECT * from foos', { model: Foo, mapToModel: true });
console.log(fooInstance); // sequelize로 랩핑된 인스턴스!

// nest 옵션으로 필드 이름에 .(점)이 있는 경우 중첩개체를 만들 수 있습니다.
const nestOtionFalse = await sequelize.query('SELECT bar as `mu.ya.ho` from foos', {
  type: QueryTypes.SELECT,
  nest: false,
});
console.log(nestOtionFalse); // [{ 'mu.ya.ho': '무야호' }, ...]

const nestOtionTrue = await sequelize.query('SELECT bar as `mu.ya.ho` from foos', {
  type: QueryTypes.SELECT,
  nest: true,
});
console.log(nestOtionTrue); // [{ mu: { ya: [Object] } }, ...]

// 쿼리 교체의 두가지 방법입니다. ? 가 전달되면 replacements의 배열의 순서대로 대체됩니다.
await sequelize.query('SELECT * FROM projects WHERE status = ?', {
  replacements: ['active'],
  type: QueryTypes.SELECT,
});
// :key 가 전달되면 replacements의 키에 해당하는 객체의 값으로 대체됩니다.
await sequelize.query('SELECT * FROM projects WHERE status = :status', {
  replacements: { status: 'active' },
  type: QueryTypes.SELECT,
});

/* 
bind는 replacements와 비슷한 역할을 합니다.
배열이 전달되면 $1이 배열의 첫 번째 요소에 바인딩됩니다(bind[0]).
bind : ['foo', 'bar']
객체가 전달되면 $key는 객체['key']에 바인딩됩니다.
bind : {status: 'active'}

주의할 점으로는 바인드 매개변수는 SQL 키워드나 테이블 또는 열 이름이 될 수 없습니다.
*/
const a = await sequelize.query('SELECT bar FROM foos where id=$id', {
  bind: { id: '5' },
  type: QueryTypes.SELECT,
});
