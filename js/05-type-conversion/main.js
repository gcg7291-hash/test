// 형 변환
// 명시적 형 변환 : 개발자가 한 것
// 암시적 형 변환 : JSs 엔진(번역기)이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열
console.log(String(123) === "123");

// true, undefined, null
String(true);
String(undefined);
String(null);

// 숫자형 명시적 형 변환
// Number() 함수 : 숫자형으로 변환하는 도구
//  Number(데이터) / Number(변수)
// 문자열 "123" 을 숫자형으로 변환해서 출력하는 코드 작성
console.log("123");
console.log(Number("123") === 123);

//  불리언 명시적 형 변환
//  불리언 데이터 : 맞다 (true) / 틀리다 (false)
// Boolean() 함수 : 불리언으로 형변환하는 도구

//  불리언 형 변환 규칙
//  각 자료형 마다 최소 1개는 틀리다 (false) 로 변환
//  false 가 아닌 데이터는 모두 맞다 (true) 로 변환
//  숫자형 -> 불리언 형 변환
//  0 ,-0 false
