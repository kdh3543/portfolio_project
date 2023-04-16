# 💻 Movie-Zone


* Next.js + graphql + amplify 를 이용한 간이영화예매 및 게시판 기능 애플리케이션 구현

## 주요 기능

* 로그인/회원가입 기능
* 영화 api 이용한 리스트 표현
* 게시판 기능

## 주요 기술

* Next.js
* TypeScript
* styled-components
* Recoil
* aws amplify
* graphql

### 프로젝트 url주소
- https://master.dh2dldnk2cq0n.amplifyapp.com

### 와이어프레임(Figma) url 주소
- https://www.figma.com/file/IXuCUwtaFjWTYTstxHv8pQ/movie-zone?node-id=0-1&t=dQd3JUG60IHbGutu-0

### 프로젝트 기능 설명

1. 로그인/회원가입
 
  * 로그인

![image](https://user-images.githubusercontent.com/91539013/232228850-c001802c-a437-4f78-b861-b945604a4289.png)

  * 회원가입

![image](https://user-images.githubusercontent.com/91539013/232228904-f71b1b32-b889-4976-8327-12471cd1501e.png)

  * 이메일 인증

![image](https://user-images.githubusercontent.com/91539013/232228932-a2213970-5973-4e17-a47b-4ab6f5dacac2.png)

 * 코드
    - amazon-cognito-identity-js에 있는 CognitoUserPool 함수를 통해 로그인/회원가입을 할 수 있는 userPool 생성
  
    ![image](https://user-images.githubusercontent.com/91539013/232319288-6927d692-38af-4b87-a918-87f8d0b7622d.png)
  
    - useCognitoUser로 hook을 생성하여 CognitoUser에 회원가입 데이터를 입력하여 회원가입 구현

    ![image](https://user-images.githubusercontent.com/91539013/232319590-3a0cc9cc-552a-435b-9878-b381b03a54ec.png)

    - amazon-cognito-identity-js에 있는 authenticateUser에 로그인 데이터를 넣어 일치하는지 확인 후 성공시 mainpage로 이동
    
    ![image](https://user-images.githubusercontent.com/91539013/232319838-0355d91c-afce-4537-aa62-4ba79bbdacd6.png)

2. 영화 리스트(현재 상영작 / 지난 상영작)

![image](https://user-images.githubusercontent.com/91539013/232229036-fb4cb166-6982-448a-9f52-0a40ba321624.png)

3. 게시판
 * 리스트
 
 ![image](https://user-images.githubusercontent.com/91539013/232319016-d17ee069-c35a-4414-978b-dede8769e7a5.png)

 * 등록
 
 ![image](https://user-images.githubusercontent.com/91539013/232319056-d5f9d0f3-483d-448d-84fe-31d9eaf9b6c1.png)


 * 게시판 글 확인/수정/삭제
 
 ![image](https://user-images.githubusercontent.com/91539013/232319099-d1ab3963-3230-4de1-8d7a-8e0c16e6a4a0.png)

