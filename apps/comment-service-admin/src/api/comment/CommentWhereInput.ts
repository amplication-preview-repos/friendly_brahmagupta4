import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postId?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
