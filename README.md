# 💻 Movie-Zone


* Next.js + graphql + amplify 를 이용한 로그인, 회원가입, 영화 정보 공유 및 게시판 기능 애플리케이션 구현

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

  * 테스트 계정 
    
    로그인 이메일: test1234@naver.com
    
    로그인 비밀번호: test1234

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

 * 코드

   - getServerSideProps로 데이터를 미리 받아와서 렌더링하여 UI의 초기 로딩 속도 개선

   ![image](https://user-images.githubusercontent.com/91539013/232650058-90be3fe0-8b68-44ac-8e57-16493dacbcca.png)
   
3. 게시판
 * 리스트
 
 ![image](https://user-images.githubusercontent.com/91539013/232319016-d17ee069-c35a-4414-978b-dede8769e7a5.png)

 * 등록
 
 ![image](https://user-images.githubusercontent.com/91539013/232319056-d5f9d0f3-483d-448d-84fe-31d9eaf9b6c1.png)


 * 게시판 글 확인/수정/삭제
 
 ![image](https://user-images.githubusercontent.com/91539013/232319099-d1ab3963-3230-4de1-8d7a-8e0c16e6a4a0.png)
 
 * 코드
 
   - schema.graphql에 Board table 생성
   
   ![image](https://user-images.githubusercontent.com/91539013/232652302-5405e545-6f76-412f-b7e1-5b59a31f1d3f.png)
   
   - custom hook을 생성해 graphql에서 board 데이터에 대한 CRUD 코드 모듈화
 
   ![image](https://user-images.githubusercontent.com/91539013/232652625-a9b3ece7-86ad-4f4d-9897-d8bd1a46cd85.png)
 
   - getServerSideProps로 Board 데이터를 받아와 Board 페이지에 렌더
 
   ![image](https://user-images.githubusercontent.com/91539013/232652470-96cb6035-e4ee-4ae1-b83c-d94c88624e26.png)
 
