/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() 마지막 엘리먼트를 추가할때 사용됨
iveMembers.push('모기');
console.log(iveMembers);

console.log('----------------------');
// pop() 마지막 엘리먼트를 삭제할때 사용됨
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-----------------------');
// shift() 첫번째 엘리먼트를 삭제할때 사용됨
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() 첫번째에 엘리먼트를 사용할때 사용됨
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('------------------');

// splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() 기존의 어레이가 변경되지않음 일회성
console.log(iveMembers.concat('모기'));
console.log(iveMembers); 