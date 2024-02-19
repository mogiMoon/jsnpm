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

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init);  //원래는 null타입으로 나와야하지만 object타입으로 나온다.
console.log('---------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '2';

console.log(test1 === test2);  //false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); //심볼은 고유성을 보장하기 때문에 동일한 설명을 가진 Symbol이 있더라도 항상 서로 다른 값으로 간주됨.

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']); //red라는 key값을 주는것으로 해당 데이터만 불러온다. 
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라갑니다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를한다.
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */