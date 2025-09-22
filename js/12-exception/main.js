// 예외처리
try {
  // try 코드 블록
  // 원래 실행할 코드
} catch (error) {
  // catch 코드 블록
  // try 코드 블록이 오류가 발생할 때 실행할 코드
  // error 매개 변수
  // 오류의 정보를 저장하고 있는 객체
  console.log(error.name);
  console.log(error.message);
} finally {
  // finally 코드 블록
  // try ~ catch와 상관없이 무조건 실행되는 코드
}

try {
  console.log(number);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("무조건 실행되는 코드");
}

function errorFunction() {
  try {
    console.log(number);
    return true; // return은 함수 실행을 종료한다
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    return false;
  } finally {
    // finally는 return에 의해서 함수가 종료돼도 무조건 실행된다
    console.log("무조건 실행되는 코드 1");
  }
  // fianlly에 의해서 함소가 종료되면 실행 x
  console.log("무조건 실행되는 코드 2");
}
