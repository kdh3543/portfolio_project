const BOARD_HEAD_DATA = [
  {
    id: 1,
    name: "No.",
    percent: "10%",
  },
  {
    id: 2,
    name: "제목",
    percent: "40%",
  },
  {
    id: 3,
    name: "ID",
    percent: "20%",
  },
  {
    id: 4,
    name: "날짜",
    percent: "20%",
  },
  {
    id: 5,
    name: "조회수",
    percent: "10%",
  },
];

type BoardType = {
  id: string;
  index: number;
  title: string;
  content: string;
  views: number;
  createdAt: string;
  updatedAt: string;
};

export type { BoardType };
export { BOARD_HEAD_DATA };
