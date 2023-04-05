import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { CONFIG } from "../../../../../../config";
import { useDispatch } from "react-redux";
import modalSlice from "@/feature/modal/modalSlice";
import movieSlice from "@/feature/movie/movieSlice";
import { useRecoilState } from "recoil";
import { detailState, modalState } from "@/feature/state";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

type MoviesProps = {
  movies: Movie[];
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ListBox = styled.div`
  width: 80%;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MovieBox = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  margin: 40px 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  // box-shadow: 5px 5px 5px 3px #80808050;
  box-shadow: 8px 5px 22px 10px #80808050;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }
`;

const Detail = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 60%;
  position: absolute;
  border-radius: 15px;
  top: 0;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
  visibility: hidden;
  &: hover {
    visibility: visible;
  }
`;

const Title = styled.p`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  overflow-x: hidden;
`;

function Content({ movies }: MoviesProps) {
  const [modal, setModal] = useRecoilState(modalState);
  const [detail, setDetail] = useRecoilState(detailState);
  const openDetail = (
    id: number,
    overview: string,
    title: string,
    poster_path: string
  ) => {
    const data = {
      id,
      overview,
      title,
      poster_path,
    };
    setModal(true);
    setDetail(data);
  };
  return (
    <Container>
      <ListBox>
        {movies.map((value) => {
          return (
            <Wrapper key={value.id}>
              <MovieBox>
                <Image
                  src={`${CONFIG.API_IMAGE}/${value.poster_path}`}
                  alt=""
                  onClick={() =>
                    openDetail(
                      value.id,
                      value.overview,
                      value.title,
                      value.poster_path
                    )
                  }
                />
                <Detail>
                  {value.title}
                  <br />
                  {`평점: ${value.vote_average}`}
                </Detail>
                <Title>{value.title}</Title>
              </MovieBox>
            </Wrapper>
          );
        })}
      </ListBox>
    </Container>
  );
}

export default Content;
