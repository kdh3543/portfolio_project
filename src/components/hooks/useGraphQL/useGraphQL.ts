import { listBoards } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { createBoard } from "../../../graphql/mutations";

function useGraphQL() {
  const postBoard = async (boardData: object) => {
    await API.graphql(graphqlOperation(createBoard, { input: boardData }));
  };

  const getPost = async () => {
    const result = await API.graphql(graphqlOperation(listBoards));
    return result;
  };
  return { postBoard, getPost };
}

export default useGraphQL;
