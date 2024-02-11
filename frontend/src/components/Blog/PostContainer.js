class PostContainer extends React.Component {

    // Get Posts from API

    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
        </div>
        );
    }
}