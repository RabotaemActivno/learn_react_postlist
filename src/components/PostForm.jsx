import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({body:'', title:'',})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({body:'', title:''})
      }

    return (
        <form>
            <MyInput
                placeholder="Название поста"
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
            />
            <MyInput
                placeholder="Описание поста"
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm