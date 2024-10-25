import { useEffect, useState } from "react";
import axiosAPI from "../axiosAPI";
import { INewPost } from "../types";

const initialStateToCustomer = {
  name: "",
  title: "",
  description: "",
};

interface Props {
  postToEdit?: INewPost;
  onSubmit: (updatedPost: INewPost) => void;
}

const AddNewPost: React.FC<Props> = ({ postToEdit }) => {
  const [customer, setCustomer] = useState(initialStateToCustomer);

  useEffect(() => {
    if (postToEdit) {
      setCustomer(postToEdit);
    }
  }, [postToEdit]);

  const onChangeField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setCustomer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const onButtonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title: customer.title,
      description: customer.description,
      createdAt: new Date().toISOString(),
    };
   

    try {
      if (postToEdit) {
        await axiosAPI.put(`posts/${postToEdit.id}.json`, newPost);
        console.log("Post updated:", newPost);
      } else {
        await axiosAPI.post("posts.json", newPost);
        console.log("New post created:", newPost);
      }

      setCustomer(initialStateToCustomer);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">Добавить новый пост</h2>
        <form onSubmit={onButtonSubmit}>
          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={customer.title}
              onChange={onChangeField}
              name="title"
            ></textarea>
            <label htmlFor="floatingTextarea">Заголовок</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={customer.description}
              onChange={onChangeField}
              name="description"
            ></textarea>
            <label htmlFor="floatingTextarea2">Описание</label>
          </div>
          <button type="submit" className="btn btn-primary">
            {postToEdit ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
