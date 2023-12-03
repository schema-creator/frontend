import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  CreateProjectDocument,
} from "@/generated/graphql";
import { useRouter } from "next/router";

export const CreateProject = () => {
  const router = useRouter();

  const [createProject, { data, loading, error }] = useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);

  // 新たに追加したstate
  const [title, setTitle] = useState("");

  const handleCreateProject = async () => {
    const { data: newProject } = await createProject({
      variables: {
        title: title,
      },
    });
  };

  return (
    <Box>
      <TextField
        label='プロジェクト名'
        variant='outlined'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant='outlined' onClick={handleCreateProject}>
        Create Project
      </Button>
    </Box>
  );
};
