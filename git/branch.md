# git branch

### 브랜치 명령어

### `git branch`

- git 프로젝트의 브랜치 목록 출력

### `git branch git-branch <- 브랜치명`

- 새로운 브랜치 생성
- 작업 공간을 생성

### `git switch 브랜치명`

-브랜치 전환 -작업 공간을 바꾸다

## 서브(기능) 브랜치 워크플로우

1. 브랜치 생성 `git branch 브랜치명`
2. 브랜치 전환 `git switch 브랜치명`
3. 작업
4. `git add .`
5. `git commit -m "커밋 메시지"`
6. 브랜치 전환 : `git switch main`              // git push orgin [현재 브랜치명]
7. 브랜치 병합 : `git merge 브랜치명`            // github 저장소 접속
8. (선택) 브랜치 삭제 : `git branch -d 브랜치명` // github 병합처리
                                             // 1. 상단 pull requests 클릭
                                             // 2. new pull requests 클릭
                                             // 3. compare를 병합할 브랜치로 변경
                                             // 4. `create pull requests` 클릭
                                             // 5. 제묵과 description 작성
                                             // 6. `create pull requests` 클릭
                                             // 7. 코드 검토(리뷰)
                                             // 8. 3개의 병합 방법중 하나를 선택해서 병합
                                             // 9. 브랜치 삭제
                                             // 10.(로컬) git switch main
                                             // 11.(로컬) git pull origin main
                                            // 12.(로컬) git branch -D 브랜치명




- 추후 문제 발생 가능성 : 동일한 브랜치명을 못 사용한다는 문제

### 병합 방식 차이

-merge : 병합 커밋이 생성된다
-rebase : 커밋이 main 브랜치에 재배치한다.
-squash : 여러개의 커밋을 하나로 합쳐서 재배치한다 (장점: 커밋을 여러번해도 히스토리 깔끔 추천) (단점: 커밋 이력이 사라진다)