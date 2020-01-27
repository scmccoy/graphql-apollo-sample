import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

/* Post: Taking post id to pass as variable to Query */

function Post(arg) {
    const { loading, error, data } = useQuery(POST_QUERY, {
        // Set variables for query here
        variables: { id: arg.match.params.id },
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error, oh no!</p>

    return (
        <div key={data.post.id}>
            <h2>{data.post.title}</h2>
            <p>{data.post.body}</p>
        </div>
    )
}

const POST_QUERY = gql`
    # Variable: name | type (required with bang)
    query singlePost($id: ID!) {
        post(where: { id: $id }) {
            id
            title
            body
        }
    }
`

export default Post
