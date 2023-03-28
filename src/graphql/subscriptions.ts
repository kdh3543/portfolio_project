/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
      id
      loginID
      loginPW
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
      id
      loginID
      loginPW
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
      id
      loginID
      loginPW
      createdAt
      updatedAt
    }
  }
`;
