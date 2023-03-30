import useGraphQL from "@/components/hooks/useGraphQL";

export { default } from "../../components/elements/BoardPage";

export async function getServerSideProps() {
  const lists: any = await useGraphQL().getPost();
  return {
    props: {
      lists,
    },
  };
}
