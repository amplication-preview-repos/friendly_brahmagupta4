import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="postId" source="postId" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
