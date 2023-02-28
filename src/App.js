import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
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
    const loading = false;
    const showComments = true;
    if (loading) {
        return <h1>Loading....</h1>
    }

    const commentBlock = <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map(function (comment, index) {
                return <li key={comment.id}>{comment.text}</li>
            })}
        </ul>
    </div>;





    return (
        <>
            <Header text="Test UI" bgColor='red' textColor='black' />
            <FeedbackList feedback={feedback}/>
            {/*<FeedbackItem />*/}
            <div className='container'>
                <h1>Hello from the app component</h1>
                <p>{title.toUpperCase()} :) {body}</p>
                <p>{Math.ceil(Math.random() * (5 + 5))}</p>
                <label htmlFor="main"/>
                {showComments && commentBlock}
                {/*{showComments ? (*/}
                {/*    <div className="comments">*/}
                {/*        <h3>Comments ({comments.length})</h3>*/}
                {/*        <ul>*/}
                {/*            {comments.map(function (comment, index) {*/}
                {/*                return <li key={comment.id}>{comment.text}</li>*/}
                {/*            })}*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*) : 'no'}*/}
            </div>
        </>
    )
}
export default App;