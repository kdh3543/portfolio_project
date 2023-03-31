/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBoardInput = {
  id?: string | null,
  title: string,
  content: string,
  userEmail: string,
  index: number,
  views: number,
};

export type ModelBoardConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  index?: ModelIntInput | null,
  views?: ModelIntInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Board = {
  __typename: "Board",
  id: string,
  title: string,
  content: string,
  userEmail: string,
  index: number,
  views: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBoardInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  userEmail?: string | null,
  index?: number | null,
  views?: number | null,
};

export type DeleteBoardInput = {
  id: string,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  index?: ModelIntInput | null,
  views?: ModelIntInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items:  Array<Board | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBoardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
  index?: ModelSubscriptionIntInput | null,
  views?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      title: string,
      content: string,
      userEmail: string,
      index: number,
      views: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    content: string,
    userEmail: string,
    index: number,
    views: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
