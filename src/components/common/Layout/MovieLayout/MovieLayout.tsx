import Title from "./_fragments/Title";
import Content from "./_fragments/Content";
import styled from "styled-components";
import { MoviesProps } from "./_fragments/Movie.data";

const Main = styled.div`
  color: red;
  min-height: 600px;
`;

function MovieLayout({ movies }: MoviesProps) {
  console.log(movies);
  return (
    <Main>
      <Title />
      <Content movies={movies} />
    </Main>
  );
}

export default MovieLayout;
