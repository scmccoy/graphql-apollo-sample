import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

/* Posts Page - Has all posts. Link opens Post component. */

function Posts() {
    // using let to illustrate error and loading states
    let { loading, error, data } = useQuery(POSTS_QUERY)
    // TRY ME: // loading = true;
    // if loading state...
    if (loading) return <p>Loading...</p>
    // TRY ME: // error = true;
    // if error state...
    if (error) return <p>Error, oh no!</p>
    // return data

    return (
        <ul>
            {data.posts.map(post => (
                <li key={post.id}>
                    <Link to={`/post/${post.id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const POSTS_QUERY = gql`
    query allPosts {
        posts {
            id
            title
        }
    }
`

export default Posts
