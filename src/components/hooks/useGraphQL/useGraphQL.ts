import { listBoards } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { createBoard, updateBoard } from "../../../graphql/mutations";

function useGraphQL() {
  const postBoard = async (boardData: object) => {
    await API.graphql(graphqlOperation(createBoard, { input: boardData }));
  };

  const getPost = async () => {
    const result = await API.graphql(graphqlOperation(listBoards));
    return result;
  };

  const updatePostViews = async (id: string, views: number) => {
    await API.graphql(graphqlOperation(updateBoard, { input: { id, views } }));
  };
  return { postBoard, getPost, updatePostViews };
}

export default useGraphQL;
