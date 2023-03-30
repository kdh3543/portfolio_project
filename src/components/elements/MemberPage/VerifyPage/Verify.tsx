import { MY_IMAGE } from "@/generated/path/images";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useCognitoUser from "@/components/hooks/useCognitoUser";

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 80%;
  height: 60%;
  color: white;
  > * {
    font-weight: bold;
  }
`;

const LogoBox = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const InputTitle = styled.div`
  width: 30%;
  text-align: right;
  margin-right: 10px;
`;

const InputText = styled.input`
  width: 70%;
  height: 35px;
  backgronud-color: white;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  font-size: 12px;
`;

const ButtonDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    width: 45%;
    background-color: red;
    color: white;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: bolder;
    border-radius: 10px;
  }
`;

const Error = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: red;
  font-size: 13px;
`;

function Verify() {
  const [verifyData, setVerifyData] = useState({
    email: "",
    code: "",
  });
  const [tempError, setTempError] = useState(false);
  const [wrongError, setWrongError] = useState(false);

  const router = useRouter();
  const onVerify = () => {
    setWrongError(false);
    if (!verifyData.code || !verifyData.email) {
      setTempError(true);
      return;
    }
    setTempError(false);
    const cognitoUser = useCognitoUser().setCognitoUser(verifyData.email);
    cognitoUser.confirmRegistration(
      verifyData.code,
      true,
      async (err, result) => {
        if (err) {
          console.log(err);
          setWrongError(true);
          return;
        }
        setWrongError(false);
        alert("인증 성공!");
        router.push("/");
      }
    );
  };

  const toLogin = () => {
    router.push("/");
  };

  const inputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setVerifyData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>{"M.Z | 인증"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MY_IMAGE.LOGO} />
      </Head>

      <Main>
        <Container>
          <LoginBox>
            <LogoBox>
              <img src={MY_IMAGE.LOGO_FULL_NAME} />
            </LogoBox>
            <Title>{"이메일 인증"}</Title>
            <InputBox>
              <InputTitle>{"이메일: "}</InputTitle>
              <InputText
                type={"text"}
                name="email"
                placeholder="이메일을 입력해주세요."
                onChange={(e) => inputData(e)}
              />
            </InputBox>
            <InputBox>
              <InputTitle>{"인증코드: "}</InputTitle>
              <InputText
                type={"text"}
                name={"code"}
                placeholder="인증코드를 입력해주세요."
                onChange={(e) => inputData(e)}
              />
            </InputBox>
            {tempError && (
              <Error>{"이메일과 인증코드 모두 입력해주세요"}</Error>
            )}
            {wrongError && (
              <Error>{"이메일 혹은 인증코드를 정확히 입력해주세요"}</Error>
            )}
            <ButtonDiv>
              <button onClick={onVerify}>{"인증"}</button>
              <button onClick={toLogin}>{"뒤로"}</button>
            </ButtonDiv>
          </LoginBox>
        </Container>
      </Main>
    </>
  );
}

export default Verify;
