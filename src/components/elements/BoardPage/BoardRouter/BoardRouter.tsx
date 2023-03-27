import { useRouter } from "next/router";
import BoardDetail from "../Detail";
import BoardRegister from "../Register/BoardRegister";

function BoardRouter() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <>
      {tab === "detail" && <BoardDetail />}
      {tab === "register" && <BoardRegister />}
    </>
  );
}

export default BoardRouter;
