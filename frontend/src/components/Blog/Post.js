class Post extends React.Component {
  
  // Post

  render() {
        return (
            <div class="blog-post">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        );
    }
}