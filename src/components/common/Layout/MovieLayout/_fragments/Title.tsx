import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
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
  font-size: 12px;
  padding-left: 5px;
`

interface TitleType {
  title: string
}

export default function Title({ title }: TitleType) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const onSearch = () => {
    if (title === '/future') {
      searchKeyword
        ? router.push(`/future?currPage=1&keyword=${searchKeyword}`)
        : router.push('/future?currPage=1')
    } else {
      searchKeyword
        ? router.push(`/mainpage?currPage=1&keyword=${searchKeyword}`)
        : router.push(`/mainpage?currPage=1`)
    }

    setSearchKeyword('')
    inputRef.current?.focus()
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <Header>
      <p>{title === '/future' ? '상영 예정작' : '현재 상영작'}</p>
      <SearchBox>
        <Search
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearchKeyword(e.target.value)}
          type="text"
          placeholder="영화제목을 입력해주세요"
          value={searchKeyword}
          ref={inputRef}
        />
        <SearchButton onClick={onSearch}> {'검색 '}</SearchButton>
      </SearchBox>
    </Header>
  )
}
