import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "@/feature/modal/modalSlice";
import { useRecoilState } from "recoil";
import { detailState, modalState } from "@/feature/state";
import { CONFIG } from "../../../../config";

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
`;

const Container = styled.div`
  width: 50%;
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Box = styled.div`
  width: 80%;
  height: 80%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  & > div {
    margin-top: 10px;
    font-size: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  font-size: 20px;
  top: 15px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  font-size: 14px;
  color: gray;
`;

const Image = styled.img`
  box-shadow: 8px 5px 22px 10px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 50%;
`;

const Description = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  line-height: 20px;
`;

const ReserveButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
`;

function DetailModal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [details, setDetails] = useRecoilState(detailState);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <Modal>
          <Container>
            <CloseButton onClick={closeModal}>{"X"}</CloseButton>
            <Box>
              <Title>
                {"영화 상세 정보"}
                <br />
                <div>{details.title}</div>
              </Title>
              <Content>
                <Image src={`${CONFIG.API_IMAGE}/${details.poster_path}`} />
                <Description>
                  {details.overview ? details.overview : "영화 정보 없음"}
                </Description>
              </Content>
              <ReserveButton>{"예매하기"}</ReserveButton>
            </Box>
          </Container>
        </Modal>
      )}
    </>
  );
}

export default DetailModal;
