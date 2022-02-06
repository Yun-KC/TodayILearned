import { User } from './[1]userModel.mjs';

/*
모델 관련 테이블을 드랍하려면
./result/[2].png
*/

User.drop();
console.log('User table dropped!');

/*
모든 테이블들을 한번에 드랍하려면
sequelize.drop()

동기화 및 삭제 작업은 파괴적입니다. Sequelize는 RegExp를 수신하는 추가 안전 검사로 일치 옵션을 허용합니다.
sequelize.sync({ force: true, match: /_test$/ });
*/
