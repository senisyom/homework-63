import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { INewPost } from "../types";
import axiosAPI from "../axiosAPI";
import { useCallback } from "react";
import AddNewPost from "../AddNewPost/AddNewPost";

const EditForm = () => {
  const [post, setPost] = useState<INewPost | null>(null);

  const { id } = useParams<{ id: string }>();

  const fetchOnePost = useCallback(async (id: string) => {
    const response: { data: INewPost } = await axiosAPI<INewPost>(
      `posts/${id}.json`
    );

    if (response.data) {
      setPost(response.data);
    }
  }, []);

  useEffect(() => {
    if (id) {
      void fetchOnePost(id);
    }
  }, [id, fetchOnePost]);

  const updatePost = async (updatedPost: INewPost) => {
    if (id) {
      await axiosAPI.put(`posts/${id}.json`, updatedPost);
    }
  };
  if (!post) {
    return <p></p>;
  }

  return (
      <div>
        <AddNewPost postToEdit={post} onSubmit={updatePost} />
      </div>
  );
};

export default EditForm;
