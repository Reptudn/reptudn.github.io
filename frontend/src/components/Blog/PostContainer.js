import Post from "./Post";
import React from "react";

class PostContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // TODO: Replace with actual fetch and create actual API to fetch from
    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/blog/posts')
            .then(response => response.json())
            .then(data => this.setState({ data }));
        console.log(this.state)
    }

    render() {
        return (
            <div class="posts">
                <div class="posts-container">
                    {this.state.data.map((post, index) => <Post key={index} post={post}/>)}
                </div>
            </div>
        );
    }
}

export default PostContainer;