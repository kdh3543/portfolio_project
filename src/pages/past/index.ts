import axios from "axios";
import { GetServerSideProps } from "next";
import { CONFIG } from "../../../config";
export { default } from "../../components/elements/MainPage";

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await axios.get(
    `${CONFIG.API_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko-KR&sort_by=popularity.desc&release_date.gte=2019-01-01&release_date.lte=2019-03-20&page=1&include_adult=false`
  );

  const data = result.data;
  return {
    props: {
      movies: data.results,
    },
  };
};
