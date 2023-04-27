import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import modalSlice from '@/feature/modal/modalSlice'
import { useRecoilState } from 'recoil'
import { detailState, modalState } from '@/feature/state'
import { CONFIG } from '../../../../config'
import { useEffect } from 'react'
import { MY_IMAGE } from '@/generated/path/images'

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000090;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`

const Container = styled.div`
  width: 50%;
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 15px;

  @media screen and (min-width: 768px) and(max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const Box = styled.div`
  width: 80%;
  height: 80%;
  overflow-y: auto;
`

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  & > div {
    margin-top: 10px;
    font-size: 15px;
  }
`

const CloseButton = styled.img`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  &: active {
    transform: scale(0.9);
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  font-size: 14px;
  color: gray;
  @media screen and (max-width: 1024px) {
    display: block;
    text-align: center;
    margin: 20px 0px;
  }
`

const Image = styled.img`
  box-shadow: 8px 5px 22px 10px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 36%;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
    height: 300px;
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    height: 300px;
  }
`

const Description = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  line-height: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    // overflow-y: auto;
    margin: 20px auto;
    font-size: 12px;
  }
`

const ReserveButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
`

function DetailModal() {
  const [modal, setModal] = useRecoilState(modalState)
  const [details, setDetails] = useRecoilState(detailState)
  const closeModal = () => {
    setModal(false)
  }

  const onReserve = () => {
    alert('예매완료!')
    setModal(false)
  }

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.querySelector('#modal')?.id === 'modal') {
        setModal(false)
      }
    })
  }, [])

  return (
    <>
      {modal && (
        <Modal>
          <Container id="modal">
            <CloseButton src={MY_IMAGE.CLOSE_BLACK} onClick={closeModal} />

            <Box>
              <Title>
                {'영화 상세 정보'}
                <br />
                <div>{details.title}</div>
              </Title>
              <Content>
                <Image src={`${CONFIG.API_IMAGE}/${details.poster_path}`} />
                <Description>
                  {details.overview ? details.overview : '영화 정보 없음'}
                </Description>
              </Content>
              <ReserveButton onClick={onReserve}>{'예매하기'}</ReserveButton>
            </Box>
          </Container>
        </Modal>
      )}
    </>
  )
}

export default DetailModal
