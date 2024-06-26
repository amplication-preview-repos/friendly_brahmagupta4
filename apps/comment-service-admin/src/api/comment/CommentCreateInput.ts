export type CommentCreateInput = {
  authorName?: string | null;
  content?: string | null;
  postId?: number | null;
  timestamp?: Date | null;
};
