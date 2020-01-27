import React from 'react'
// Package containing everything you need to set up Apollo Client
import ApolloClient, { gql } from 'apollo-boost'
// React hooks based view layer integration
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Post from './Posts/Post'
import Posts from './Posts/Posts'
import Header from './Header'
import NewPost from './Posts/NewPost'
import './App.css'

// client url is from GraphCMS personal account (server)
const client = new ApolloClient({
    uri: 'https://api-uswest.graphcms.com/v1/ck5swxfm98fo201fl4xlqg31p/master',
})

// test query (convention to Uppercase Queries)
const SAMPLE_QUERY = gql`
    #  NOTE: Unnamed query - not preferred - harder to debug
    {
        posts {
            title
            body
        }
    }
`

// Option of running query outside of react
client
    .query({
        query: SAMPLE_QUERY,
    })
    .then(res => console.log('Query Result: ', res))

function App() {
    return (
        // similar to React Context provider - Wrapping the app with the provider, We can access client from anywhere in the component tree
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/form/" component={NewPost} />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App
