import UseCognitoUser from "@/components/hooks/useCognitoUser";
import useGraphQL from "@/components/hooks/useGraphQL";
import { getBoardLocalStorage } from "@/utils/localstorage/localstorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetail from "../Detail";
import BoardRegister from "../Register/BoardRegister";
import { BoardDetailType } from "../_fragments/Board.data";

function BoardRouter() {
  const [detail, setDetail] = useState<BoardDetailType>({
    index: "",
    title: "",
    content: "",
    email: "",
    id: "",
  });
  const router = useRouter();
  const { tab } = router.query;
  const { id }: any = router.query;

  useEffect(() => {
    const currentUser = UseCognitoUser().getCurrentUser();
    if (!currentUser) router.push("/");
  }, []);
  useEffect(() => {
    if (tab === "detail") {
      setBoardById();
    }
  }, [tab]);

  const setBoardById = async () => {
    const result: any = await useGraphQL().getBoardById(getBoardLocalStorage());

    setDetail({
      index: id,
      title: result.data.getBoard.title,
      content: result.data.getBoard.content,
      email: result.data.getBoard.userEmail,
      id: result.data.getBoard.id,
    });
  };

  return (
    <>
      {tab === "detail" && <BoardDetail detail={detail} />}
      {tab === "register" && <BoardRegister />}
    </>
  );
}

export default BoardRouter;
