import { BoardUpdateType } from "@/components/elements/BoardPage/_fragments/Board.data";
import { getBoard, listBoards } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { createBoard, updateBoard } from "../../../graphql/mutations";

function useGraphQL() {
  const postBoard = async (boardData: object) => {
    await API.graphql(graphqlOperation(createBoard, { input: boardData }));
  };

  const getBoardList = async () => {
    const result = await API.graphql(graphqlOperation(listBoards));
    return result;
  };

  const updateBoardViews = async (id: string, views: number) => {
    await API.graphql(graphqlOperation(updateBoard, { input: { id, views } }));
  };

  const getBoardById = async (id: any) => {
    if (id) {
      const result = await API.graphql(
        graphqlOperation(getBoard, {
          id,
        })
      );
      return result;
    }
  };

  const updateBoardDetail = async (data: BoardUpdateType) => {
    await API.graphql(
      graphqlOperation(updateBoard, {
        input: { id: data.id, content: data.content, title: data.title },
      })
    );
  };
  return {
    postBoard,
    getBoardList,
    updateBoardViews,
    getBoardById,
    updateBoardDetail,
  };
}

export default useGraphQL;
