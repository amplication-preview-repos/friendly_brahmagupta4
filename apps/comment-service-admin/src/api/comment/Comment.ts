export type Comment = {
  authorName: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  postId: number | null;
  timestamp: Date | null;
  updatedAt: Date;
};
