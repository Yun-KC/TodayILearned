import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './[1]userModel.mjs';

const User = await sequelize.define('user', {
  username: {
    type: DataTypes.STRING(88),
    allowNull: false,
  },
  hashedPassword: {
    type: DataTypes.STRING(64),
    validate: {
      notIn: [['foo', 'bar']],
    },
  },
});

// await (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

/*
Validations와 Constaints 의 차이는 

Validations는 Sequelize수준에서 수행되는 사용자 정의 유효성 검사 또는 Sequelize에서 제공하는 내장 유효성 검사기중 하나일 수 있습니다.
이 과정에서 실패하면 DB에 SQL 쿼리가 전혀 전송되지 않습니다.

Constaints는 DB 수준에서 정의된 규칙입니다. 대부분은 unique 제약 조건입니다. 제약 조건 검사가 실패하면 DB에서는 오류가 발생하고
Sequelize는 이 오류를 전달합니다. 이 경우에는 DB에 SQL 쿼리가 수행됩니다.
*/

// sequelize 내장 유효성 검사기 입니다.
sequelize.define('foo', {
  bar: {
    type: DataTypes.STRING,
    validate: {
      is: /^[a-z]+$/i, // matches this RegExp
      is: ['^[a-z]+$', 'i'], // same as above, but constructing the RegExp from a string
      not: /^[a-z]+$/i, // does not match this RegExp
      not: ['^[a-z]+$', 'i'], // same as above, but constructing the RegExp from a string
      isEmail: true, // checks for email format (foo@bar.com)
      isUrl: true, // checks for url format (http://foo.com)
      isIP: true, // checks for IPv4 (129.89.23.1) or IPv6 format
      isIPv4: true, // checks for IPv4 (129.89.23.1)
      isIPv6: true, // checks for IPv6 format
      isAlpha: true, // will only allow letters
      isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      isNumeric: true, // will only allow numbers
      isInt: true, // checks for valid integers
      isFloat: true, // checks for valid floating point numbers
      isDecimal: true, // checks for any numbers
      isLowercase: true, // checks for lowercase
      isUppercase: true, // checks for uppercase
      notNull: true, // won't allow null
      isNull: true, // only allows null
      notEmpty: true, // don't allow empty strings
      equals: 'specific value', // only allow a specific value
      contains: 'foo', // force specific substrings
      notIn: [['foo', 'bar']], // check the value is not one of these
      isIn: [['foo', 'bar']], // check the value is one of these
      notContains: 'bar', // don't allow specific substrings
      len: [2, 10], // only allow values with length between 2 and 10
      isUUID: 4, // only allow uuids
      isDate: true, // only allow date strings
      isAfter: '2011-11-05', // only allow date strings after a specific date
      isBefore: '2011-11-05', // only allow date strings before a specific date
      max: 23, // only allow values <= 23
      min: 23, // only allow values >= 23
      isCreditCard: true, // check for valid credit card numbers

      // 사용자 정의 유효성 검사기입니다.
      isEven(value) {
        if (parseInt(value) % 2 !== 0) {
          throw new Error('Only even values are allowed!');
        }
      },
      isGreaterThanOtherField(value) {
        if (parseInt(value) <= parseInt(this.otherField)) {
          throw new Error('Bar must be greater than otherField.');
        }
      },
    },
  },
});

const test = {
  // 내장 유효성 검사에서 사용자 정의 에러 메세지를 사용할 수 있습니다.
  // 인자가 필요없는 경우
  isInt: {
    msg: 'Must be an integer number of pennies',
  },
  // 인자가 필요한 경우
  isIn: {
    args: [['en', 'zh']],
    msg: 'Must be English or Chinese',
  },
};

/*
모델의 특정 필드가 null을 허용하지 않도록 설정되고(allowNull: false 사용)해당 값이 null로 설정되면
모든 유효성 검사기를 건너뛰고 ValidationError가 발생합니다.

반면에 null을 허용하도록 설정되어 있고(allowNull: true 사용) 해당 값이 null로 설정되어 있으면
기본 제공 유효성 검사기만 건너뛰고 사용자 정의 유효성 검사기는 계속 실행됩니다.

예를 들어
*/
class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5, 10],
      },
    },
  },
  { sequelize }
);
/*
이 경우 이것은 예를 들어 길이가 5에서 10자 사이인지 검증하지만 null도 허용하는 문자열 필드를 가질 수 있음을 의미합니다
(값이 null일 때 길이 유효성 검사기가 자동으로 건너뛰기 때문에).
그리고 사용자 정의 유효성 검사기는 계속 실행되기 때문에 아래처럼 사용자 정의 유효성 검사기로 null 값을 조건부로 허용할 수도 있습니다.
*/
class User extends Model {}
User.init(
  {
    age: Sequelize.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        customValidator(value) {
          if (value === null && this.age !== 10) {
            throw new Error("name can't be null unless age is 10");
          }
        },
      },
    },
  },
  { sequelize }
);

// notNull 유효성 검사기를 설정하여 allowNull 오류 메시지를 사용자 정의할 수 있습니다.
class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your name',
        },
      },
    },
  },
  { sequelize }
);

/*
모델 범위의 유효성 검사
필드별 유효성 검사기 이후에 모델을 확인하기 위해 유효성 검사를 정의할 수도 있습니다.
모델 유효성 검사기 메서드는 모델 개체의 컨텍스트와 함께 호출되며 오류가 발생하면 실패한 것으로 간주되고 그렇지 않으면 통과합니다.
이것은 사용자 정의 필드별 유효성 검사기와 동일합니다.
*/
class Place extends Model {}
Place.init(
  {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    latitude: {
      type: DataTypes.INTEGER,
      validate: {
        min: -90,
        max: 90,
      },
    },
    longitude: {
      type: DataTypes.INTEGER,
      validate: {
        min: -180,
        max: 180,
      },
    },
  },
  {
    sequelize,
    validate: {
      bothCoordsOrNone() {
        if ((this.latitude === null) !== (this.longitude === null)) {
          throw new Error('Either both latitude and longitude, or neither!');
        }
      },
    },
  }
);
