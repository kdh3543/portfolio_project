import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
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
  border: 1px solid white;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MovieBox = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 400px;
  border: 1px solid white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function Content({ movies }: MoviesProps) {
  const testData = Array.from({ length: 6 }, (_, x) => x);

  return (
    <Container>
      <ListBox>
        {movies.map((value) => {
          return (
            <MovieBox key={value.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                alt=""
              />
            </MovieBox>
          );
        })}
      </ListBox>
    </Container>
  );
}

export default Content;
