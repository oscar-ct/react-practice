function App() {
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {
            id: 1,
            text: 'These are comments'
        },
        {
            id: 2,
            text: "These are more comments"
        }

    ];
    return (
        <div className='container'>
            <h1>Hello from the app component</h1>
            <p>{title.toUpperCase()} :) {body}</p>
            {Math.ceil(Math.random() * (5 + 5))}
            <label htmlFor="main"/>
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map(function (comment, index) {
                        return <li key={comment.id}>{comment.text}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default App;