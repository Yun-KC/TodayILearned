/*
Sequelize는 일대일, 일대다 및 다대다와 같은 표준 연결을 지원합니다.
이를 위해 Sequelize는 연결을 생성하기 위해 결합해야 하는 4가지 유형의 연결을 제공합니다.
- HasOne
- BelongsTo
- HasMany
- BelongsToMany
*/
const A = sequelize.define('A' /* ... */);
const B = sequelize.define('B' /* ... */);

A.hasOne(B); // A와 B 사이에 일대일 관계가 존재하며 대상 모델(B)에 외래 키가 정의되어 있음을 의미합니다.
A.belongsTo(B); // A와 B 사이에 일대일 관계가 존재하며 외부 키가 소스 모델(A)에 정의되어 있음을 의미합니다.
A.hasMany(B); // A와 B 사이에 일대다 관계가 존재하며 대상 모델(B)에 외래 키가 정의되어 있음을 의미합니다.
// 위 세 개의 호출은 sequelize에서 자동으로 targetModel에 외래키를 생성합니다. A를 소스 모델, B를 타겟 모델이라 합니다.

A.belongsToMany(B, { through: 'C' });
/*
A.belongsToMany(B, { through: 'C' }) 연결은 테이블 C를 연결 테이블로 사용하여 A와 B 사이에 다대다 관계가 존재한다는 것을 의미합니다.
sequelize는 이 모델 C를 자동으로 만들고(이미 존재하지 않는 한) 여기에 적절한 외래 키를 정의합니다.
*/
