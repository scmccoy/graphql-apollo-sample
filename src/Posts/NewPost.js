import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

/* MUTATION DEMO - SEND POST TO CREATE A NEW BLOG POST */

function NewPost() {
    const handleInputChange = e => {
        formData[e.target.name] = e.target.value
        setValues({ ...formData })
    }

    // Declare our state variable called values
    // Initialize with our default values
    const initialState = { title: '', body: '' }
    const [formData, setValues] = useState(initialState)
    // useMutation hook
    const [formValues] = useMutation(NEW_POST)
    return (
        <div>
            <h2>New Post Form</h2>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    formValues({
                        variables: {
                            title: formData.title,
                            body: formData.body,
                        },
                    })
                        .then(res => {
                            console.log('Success', res)
                            setValues(initialState)
                        })
                        .catch(error => {
                            console.log('Error: ', error)
                        })
                }}
            >
                <input
                    name="title"
                    type="text"
                    defaultValue={formData.title || ''}
                    onChange={handleInputChange}
                    placeholder="title"
                />
                <textarea
                    name="body"
                    type="text"
                    defaultValue={formData.body || ''}
                    onChange={handleInputChange}
                    placeholder="body"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// mutation - using title and body
const NEW_POST = gql`
    mutation addPost($title: String!, $body: String!) {
        createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
            title
            body
            id
        }
    }
`

export default NewPost
