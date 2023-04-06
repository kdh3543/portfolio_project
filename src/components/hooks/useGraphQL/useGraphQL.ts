import { BoardUpdateType } from "@/components/elements/BoardPage/_fragments/Board.data";
import { getBoard, listBoards } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import {
  createBoard,
  deleteBoard,
  updateBoard,
} from "../../../graphql/mutations";

function useGraphQL() {
  const postBoard = async (boardData: object) => {
    await API.graphql(graphqlOperation(createBoard, { input: boardData }));
  };

  const getBoardList = async () => {
    const result: any = await API.graphql(graphqlOperation(listBoards));
    return result.data.listBoards.items;
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

  const deleteBoardDetail = async (id: string) => {
    console.log(id);
    await API.graphql(graphqlOperation(deleteBoard, { input: { id } }));
  };

  return {
    postBoard,
    getBoardList,
    updateBoardViews,
    getBoardById,
    updateBoardDetail,
    deleteBoardDetail,
  };
}

export default useGraphQL;
