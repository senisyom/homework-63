import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { INewPost } from "../types";
import axiosAPI from "../axiosAPI";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";

const ReadMore = () => {
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

  const deletePost = async () => {
    if (id) {
      await axiosAPI.delete(`posts/${id}.json`);
    }
  };

  useEffect(() => {
    if (id) {
      void fetchOnePost(id);
    }
  }, [id, fetchOnePost]);
  if (!post) {
    return <p></p>;
  }

  return (
    <div>
      <div className="card m-4">
        <div className="card-header">Дата: {post.createdAt}</div>
        <div className="card-body">
          <h4 className="card-title bt-3 mb-4"> Заголовок: </h4>
          <strong>{post.title}</strong>
        </div>

        <div className="card-body">
          <h4 className="card-title bt-3 mb-4"> Описание: </h4>
          <p className="card-title "> {post.description}</p>
        </div>
        <div className="card-footer">
          <NavLink to={`/posts/${post.id}/edit`} className="btn">
            <button className="btn btn-primary">Редактировать</button>
          </NavLink>

          <NavLink to='/'>
            <button onClick={deletePost} className="btn btn-danger ms-2">
              Удалить
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
