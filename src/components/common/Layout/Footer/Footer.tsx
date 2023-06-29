import styled from 'styled-components'
import { SOCIAL_MENU } from './_fragments/social.data'

const Bottom = styled.div`
  color: white;
  width: 100%;
  font-weight: bold;
  padding: 30px;
  padding-top: 20px;
`

const Title = styled.div`
  font-size: 20px;
`

const Social = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: right;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
  & > img {
    cursor: pointer;
  }
`

const Text = styled.p`
  font-size: 18px;
`

export function Footer() {
  return (
    <Bottom>
      <Title>{'김동현의 Movie Zone (M.Z)'}</Title>

      <Social>
        <Text>{'made by 북한코뿔소'}</Text>
        {SOCIAL_MENU.map((item) => {
          return (
            <img
              key={item.id}
              src={item.image}
              onClick={() => window.open(item.path)}
              alt=""
            />
          )
        })}
      </Social>
    </Bottom>
  )
}
