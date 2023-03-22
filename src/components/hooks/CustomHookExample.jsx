import React from 'react';
import useFetch from "./useFetch";

const CustomHookExample = () => {

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts", {});

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            {data.map(function(post) {
                return <h3 key={post.id}>{post.title}</h3>
            })}
        </div>
    );
};

export default CustomHookExample;