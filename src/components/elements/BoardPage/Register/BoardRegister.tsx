import { Footer } from "@/components/common/Layout/Footer/Footer";
import Header from "@/components/common/Layout/Header/Header";
import useGraphQL from "@/components/hooks/useGraphQL";
import { MY_IMAGE } from "@/generated/path/images";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./_fragments/Main";

const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;

function BoardRegister() {
  const [indexNum, setIndexNum] = useState(0);
  const setViewNum = async () => {
    const result: any = await useGraphQL().getPost();
    console.log(result);
    setIndexNum(
      result?.data?.listBoards?.items.length === 0
        ? 0
        : result?.data?.listBoards?.items.length
    );
  };
  useEffect(() => {
    setViewNum();
  }, []);
  console.log(indexNum);
  return (
    <>
      <Head>
        <title>{"M.Z | 게시판"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MY_IMAGE.LOGO} />
      </Head>
      <Header />
      <Main indexNum={indexNum} />
      <Footer />
    </>
  );
}

export default BoardRegister;
