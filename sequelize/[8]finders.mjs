import { sequelize } from './[1]userModel.mjs';
import { Sequelize, Model, DataTypes } from 'sequelize';
const { User } = sequelize.models;

/*
finder 메서드는 SELECT 쿼리를 생성하는 메서드 입니다.
기본적으로 모든 파인더 메서드의 결과는 모델 클래스의 인스턴스입니다(단순한 JavaScript 개체와 반대).
이는 데이터베이스가 결과를 반환한 후 Sequelize가 자동으로 모든 것을 적절한 인스턴스 개체로 래핑함을 의미합니다.
몇몇 경우에 결과가 너무 많으면 이 래핑이 비효율적일 수 있습니다.
이 래핑을 비활성화하고 대신 일반 응답을 받으려면 finder 메서드에 대한 옵션으로 { raw: true }를 전달합니다.
*/

// findAll() 테이블의 모든 항목을 검색하는 표준 SELECT 쿼리를 생성합니다.
const wrappedUserList = await User.findAll();
console.log(wrappedUserList); // 배열 형태의 래핑된 인스턴스들
const userList = await User.findAll({ raw: true });
console.log(userList); // 배열 형태의 Javascript objects

// findByPk() pk키에 해당하는 오직 하나의 데이터만 가져옵니다.
const userInfo = await User.findByPk(1); // 인자가 비었거나 해당 데이터에가 없다면  null을 리턴합니다.
console.log(userInfo);

// findOne({where: {id: 1}}) 메서드는 찾은 항목 한개만 가져옵니다.

/* 
findOrCreate({where:{}, defaults :{}} ) 메서드는 쿼리 옵션을 충족하는 항목을 찾아 리턴하거나 새로 생성합니다.
defaults 옵션은 항목을 발견되지 않은 경우 생성되어야 하는 항목을 정의하는 데 사용됩니다. defaults에 값이 없다면 where에 지정된 값을 사용합니다.
리턴으로 [생성됐거나 찾은 오브젝트, 생성 여부의 불린 값]을 리턴합니다.
*/

/* 
findAndCountAll() 메서드는 findAll과 count를 결합한 편리한 메서드입니다. 
리턴으로 [count, rows]를 리턴합니다.
count - 쿼리와 일치하는 레코드 숫자
rows - 쿼리와 일치하는 래핑된 객체배열
만약 그룹을 지었다면?
count - 각 그룹의 개수와 투영된 속성을 포함하는 객체 배열
rows - 흭득한 레코드의 객체 배열
을 리턴합니다.
*/
await User.create({ name: '유재석' });
let a = await User.findAndCountAll({ where: {}, attributes: ['name'], group: ['name'] });
