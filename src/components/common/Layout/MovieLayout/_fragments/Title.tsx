import { useRouter } from 'next/router'
import styled from 'styled-components'

const Header = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 30px;
  position: relative;
`

const SearchBox = styled.div`
  position: absolute;
  color: white;
  right: 20px;
  bottom: 0;
  font-size: 15px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    bottom: -40px;
  }
`

const SearchButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background: none;
  color: white;
  cursor: pointer;
  padding: 5px;
`

const Search = styled.input`
  margin-right: 5px;
  height: 25px;
`

interface TitleType {
  title: string
}

export default function Title({ title }: TitleType) {
  return (
    <Header>
      <p>{title === '/past' ? '지난 상영작' : '현재 상영작'}</p>
      <SearchBox>
        <Search />
        <SearchButton> {'검색 '}</SearchButton>
      </SearchBox>
    </Header>
  )
}
