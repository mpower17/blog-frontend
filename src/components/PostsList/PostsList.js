import React from "react";
import './PostsList.scss'
import PostItem from "../PostItem/PostItem";

const PostsList = ({posts}) => {
    return (
        <div className="post-items">
            {posts.map(post => (
                    <PostItem {...post} />
                ))
            }
        </div>
    )
}

export default PostsList;