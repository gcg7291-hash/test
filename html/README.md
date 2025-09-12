# HTML

## 요소를 구성하는 3가지?

시작 태그, 내용 , 종료 태그

## 링크를 생성하는 태그와 해당 태그만의 필수 속성

<a> herf

## id 속성 용도

속성의 이름 고유값

## class 속성 용도

요소를 그룹화 하기 위해 사용

## form 태그와 input의 역할

form은 사용자가 보낸 정보를 포장하는 역할
input 은 입력필드
<input>은 <form> 안에서 사용자가 실제로 정보를 입력하거나 선택하는 부분을 만듭니다. type 속성에 따라 모양과 기능이 완전히 달라집니다

## input 태그의 용도를 결정하는 속성의 이름과 용도의 종류

input 태그의 용도를 결정하는 속성의 이름은 `type` 입니다.

이 type 속성에 어떤 값을 주느냐에 따라, input 요소는 텍스트 필드, 체크박스, 비밀번호 필드, 전송 버튼 등 다양한 모습과 기능으로 바뀝니다.

주요 type 속성의 종류와 용도는 다음과 같습니다.

1. 텍스트 입력
2. 선택 항목
3. 버튼
4. 기타 주요 유형

  <div>
        <label>
          체크아웃:
          <input type="date">
          </label>
          </div>
          <div>
          <label>
            성인:
           <input type="number" min="1" max="10" value="1">
            </label>
            </div>
            <div>
            <label>
             어린이:
            <input type="number" min="0" max="10" value="0">
             </label>
            </div>
      <hr>
      <div>
        <h4>선호 객실 타입</h4>
        <label><input type="radio" name="room">스탠다드</label>
        <label><input type="radio" name="room">디럭스</label>
        <label><input type="radio" name="room">스위트</label>
      </div>
      <label>
        요청사항
        <textarea placeholder="특별히 요청하고 싶은 내용을 적어주세요" rows="3" cols="20"></textarea>
      </label>
      <div>
      <input type="submit" value="예약하기">
      </div>

      css
      웹 페이지의 스타일을 정의하는 스타일시트 언어

      css 선택자 (꼭 중요)
      스타일을 적용할 HTML 요소를 선택하는 다양한 방법인 선택자의 종류와 사용법
