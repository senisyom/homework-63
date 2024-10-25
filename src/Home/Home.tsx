import { useCallback, useEffect, useState } from "react";
import axiosAPI from "../axiosAPI";
import { INewPost, INewPostApi } from "../types";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [posts, setPosts] = useState<INewPost[]>([]);

  const fetchData = useCallback(async () => {
    const response: { data: INewPostApi } = await axiosAPI<INewPostApi>(
      "posts.json"
    );

    if (response.data) {
      const postsFromAPI: INewPost[] = Object.keys(response.data).map(
        (postKey) => {
          return {
            ...response.data[postKey],
            id: postKey,
          };
        }
      );

      console.log(postsFromAPI);
      setPosts(postsFromAPI);
    }
    console.log(response.data);
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  return (
    <>
      {posts.length === 0 ? (
        <p>Нет постов</p>
      ) : (
        <>
          {posts.map((post) => (
            <div className="card m-4" key={post.id}>
              <div className="card-header">Дата: {post.createdAt}</div>
              <div className="card-body">
                <h5 className="card-title m-3">
                  {post.title}....
                  <NavLink to={`/posts/${post.id}`} className="btn">
                    Читать далее
                  </NavLink>
                </h5>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Home;
