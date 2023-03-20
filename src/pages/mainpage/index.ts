import axios from "axios";
import { GetServerSideProps } from "next";
import { CONFIG } from "../../../config";
export { default } from "../../components/elements/MainPage";

export const getServerSideProps: GetServerSideProps = async () => {
  // const API_KEY = "9740c08b22ca234bfadcbd2677db6a38";
  // const API_URL = "https://api.themoviedb.org/3";

  const result = await axios.get(
    `${CONFIG.API_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko-KR&sort_by=popularity.desc&release_date.gte=2023-01-01&release_date.lte=2023-03-20&page=1&adults=false`
  );

  const data = result.data;
  return {
    props: {
      movies: data.results,
    },
  };
};
