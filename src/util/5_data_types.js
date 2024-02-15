/**
 * Data Types
 * 
 * 여섯개의 Primitive Type(프리미티브)과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼) 
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * Number 타입
 */
const age = 32;
const tempature = -10; //음수도 선언가능!!
const pi = 3.14; //소수점도 선언가능!!

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------------'); //그냥 따옴표안의 문자출력구분하려고 하는거

const infinity = Infinity; //무한대값 지정
const nInfinity = -Infinity; //-무한대값을 지정가능

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-------------------');

/**
 * String 타입
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면 됨.
 */
const iveYuJin = '아이브\n안유진'; // ' \n ' 은 줄을 바꿔서 나오게 해준다
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영'; // ' \t ' 는 띄어쓰기를 해서 나오게 해준다
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리'; // ' \\ ' 는 백슬래시를 하나 출력하게 해준다
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '" ///////기모링
장원영`;
console.log(iveWonYoung2); //가장 유용한기능이다 ``안에 있는거 그대로 다 나옴

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('-----------------');

/**
 * Boolean 타입 OX라고 생각하면됨
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);