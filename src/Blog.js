import React from 'react';
// Package containing everything you need to set up Apollo Client
import { gql } from 'apollo-boost';
// React hooks based view layer integration
import { useQuery } from '@apollo/react-hooks';
import './App.css';

// test query (convention to Uppercase Queries)
const POSTS_QUERY = gql`
# Preferred: Named queries - easier to view in dev tools / debugging
      query allPosts {
        posts {
          title
          body
      }
    }
`;

function Blog() {
    // using let to illustrate error and loading states
    let { loading, error, data } = useQuery(POSTS_QUERY)
    // TRY ME: // loading = true;
    // if loading state... 
    if (loading) return <p>Loading...</p>;
    // TRY ME: // error = true;
    // if error state...
    if (error) return <p>Error, oh no!</p>;
    // return data
    return (
        <div>
            {data.posts.map(post => 
                <div key={post.title}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                )}
        </div>
    )
}

export default Blog;
