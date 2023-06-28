import useCognitoUser from '@/components/hooks/useCognitoUser'
import { MY_IMAGE } from '@/generated/path/images'
import { setLocalStorage } from '@/utils/localstorage/localstorage'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBox = styled.div`
  width: 80%;
  height: 60%;
  color: white;
  > * {
    font-weight: bold;
  }
`

const LogoBox = styled.div`
  width: 100%;
  text-align: center;
`

const Title = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`

const InputBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`

const InputTitle = styled.div`
  width: 30%;
  text-align: right;
  margin-right: 10px;
`

const InputText = styled.input`
  width: 70%;
  height: 35px;
  backgronud-color: white;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  font-size: 12px;
`

const ButtonDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    width: 30%;
    background-color: red;
    color: white;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: bolder;
    border-radius: 10px;
  }
`

const Error = styled.div`
  margin-top: 10px;
  width: 100%;
  color: red;
  font-size: 13px;
  margin-left: 150px;
  @media screen and (max-width: 767px) {
    margin-left: 100px;
    font-size: 10px;
  }
`

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    pw: '',
  })
  const [wrongError, setWrongError] = useState(false)
  const [tempError, setTempError] = useState(false)
  const [confirmError, setConfirmError] = useState(false)
  const router = useRouter()
  const toSignUp = () => {
    router.push('/signup')
  }
  const onLogin = () => {
    setWrongError(false)
    setConfirmError(false)
    if (!loginData.email || !loginData.pw) {
      setTempError(true)
      return
    }
    setTempError(false)
    const cognitoUser = useCognitoUser().setCognitoUser(loginData.email)
    const authDetails = useCognitoUser().setAuthDetail(
      loginData.email,
      loginData.pw
    )
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function (result: any) {
        setLocalStorage(loginData.email)
        router.push(`/mainpage?currPage=1`)
      },
      onFailure: function (err) {
        if (err.message.includes('Incorrect username or password')) {
          setWrongError(true)
          setConfirmError(false)
          return
        } else if (err.message.includes('User is not confirmed.')) {
          setConfirmError(true)
          setWrongError(false)
          return
        }
      },
    })
  }
  const toVerify = () => {
    router.push('/verify')
  }

  const inputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(loginData)
    if (e.key === 'Enter') {
      onLogin()
    }
  }

  return (
    <>
      <Head>
        <title>{'M.Z'}</title>
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
            <Title>{'로그인'}</Title>
            <InputBox>
              <InputTitle>{'이메일: '}</InputTitle>
              <InputText
                onKeyPress={handleKeyPress}
                onChange={(e) => inputData(e)}
                name="email"
                type={'text'}
                placeholder="이메일을 입력해주세요."
              />
            </InputBox>

            <InputBox>
              <InputTitle>{'비밀번호: '}</InputTitle>
              <InputText
                name="pw"
                onChange={(e) => inputData(e)}
                type={'password'}
                onKeyPress={handleKeyPress}
                placeholder="비밀번호를 입력해주세요."
              />
            </InputBox>
            {tempError && (
              <Error>{'이메일과 비밀번호 모두 입력해주세요'}</Error>
            )}
            {wrongError && (
              <Error>{'이메일 혹은 비밀번호를 잘못 입력하였습니다'} </Error>
            )}
            {confirmError && <Error>{'인증받지 않은 계정입니다'}</Error>}
            <ButtonDiv>
              <button onClick={toSignUp}>{'회원가입'}</button>
              <button onClick={onLogin}>{'로그인'}</button>
              <button onClick={toVerify}>{'인증'}</button>
            </ButtonDiv>
          </LoginBox>
        </Container>
      </Main>
    </>
  )
}

export default LoginPage
;('eyJraWQiOiI3bWlFMzRxako3c3VJRjhhMEppcFRlWmMyaE56ZzMxWFRGSXJ2MHFzWmU0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMDYxOTRkZC04ZWY5LTRmMWMtOTVlNi1jMmE5ZDczYmYyMDQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTJfZHJROXFHVEJjIiwiY2xpZW50X2lkIjoic3ZmNmxxbzNla29mdW9lcmNiYTJmdG44NiIsIm9yaWdpbl9qdGkiOiI1ODc2OWY3Ny04YzRiLTQ1ZmEtODA1NS0wODYyMTJhN2YwOTQiLCJldmVudF9pZCI6ImVjMzc2ZjU2LTc5NDAtNDExZC04Nzk4LTM0ZTBmYmIyYTgxMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODAxNDc5MzIsImV4cCI6MTY4MDE1MTUzMiwiaWF0IjoxNjgwMTQ3OTMyLCJqdGkiOiJhMWI1NjljOS0xOGQ2LTRhNzctODE0Zi0wOGZiNjZjN2ExMGUiLCJ1c2VybmFtZSI6ImIwNjE5NGRkLThlZjktNGYxYy05NWU2LWMyYTlkNzNiZjIwNCJ9.EG9zbX5BXUjjefj6xyIrIg3sGwRwBvOZuhs9Gg2ZHFIoGS8U6GIN6oW_BA0oBcKDNv1G6NN2Ws-fz06_U4u6kdK8ffE1QsneaSyNXwwqmGbd_Dgu2SX5OkGhoWfO3uqu4fYhDy2IsMJtKmV5Vtt16O3308fCnl3fvUFC7sceK1J1iXYupFS9zDRyIlVdbEpOA6aaRX-f9Uehy6s-xyePu9dkdyreeibautb2HIsdaHH87pNiYyvL-cX9QKJ9j4lEw9b1A_A8L59QRb5ziWByVvQRu2gMnoVMgHtz_VuMuAPhpTtGE296LZ_eG-Q0xWLFbkL1m48Kdn4cPQVV3lh1gQ')
