import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  authorName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
