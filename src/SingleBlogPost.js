import React from 'react';
// Package containing everything you need to set up Apollo Client
import { gql } from 'apollo-boost';
// React hooks based view layer integration
import { useQuery } from '@apollo/react-hooks';
import './App.css';

// test query (convention to Uppercase Queries)
const SINGLE_POST_QUERY = gql`
# Using ARGs in post 
      query singlePost {
        post(where: { id: "ck5tvueyskhqy0983x89ltj9y"}) {
          title
      }
    }
`;

function SingleBlogPost() {
    const { loading, error, data } = useQuery(SINGLE_POST_QUERY)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error, oh no!</p>;
    
    return  (
        <div>
            <h1>Single Blog Post</h1>
            <h2 key={data.post.title}>{data.post.title}</h2>
        </div>
    )
}

export default SingleBlogPost;
