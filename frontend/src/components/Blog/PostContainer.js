import Post from "./Post";
import React from "react";

class PostContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null
        };
    }

    // TODO: Replace with actual fetch and create actual API to fetch from
    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/blog/posts')
            .then(response => {
                if (!response.ok)
                    throw new Error("API offline");
                return response.json()
            })
            .then(data => this.setState({ data }))
            .catch(error => { this.setState({ error: error.toString() }) })
    }

    render() {
        console.log(this.state.data)
        if (this.state.error)
            return <div>API offline.. can't load Posts</div>
        else if (this.state.data)
        {
            return (
                <div class="posts">
                    <h2>Posts</h2>
                    <div class="posts-container">
                        {this.state.data.map((post, index) => <Post key={index} post={post} target="_blank"/>)}
                    </div>
                </div>
            );
        }
        else
            return <div>Loading Posts...</div>
    }
}

export default PostContainer;