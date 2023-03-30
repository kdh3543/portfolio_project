import useCognitoUser from "@/components/hooks/useCognitoUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BoardDetail from "../Detail";
import BoardRegister from "../Register/BoardRegister";

function BoardRouter() {
  const router = useRouter();
  const { tab } = router.query;
  useEffect(() => {
    const currentUser = useCognitoUser().getCurrentUser();
    if (!currentUser) router.push("/");
  }, []);

  return (
    <>
      {tab === "detail" && <BoardDetail />}
      {tab === "register" && <BoardRegister />}
    </>
  );
}

export default BoardRouter;
