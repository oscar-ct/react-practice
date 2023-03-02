import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";


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

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(function (item) {
                return item.id !== id;
            }))
        }

    }

    const addFeedback = (newFeedback) => {
        console.log(newFeedback);
        console.log(feedback);
        setFeedback([newFeedback, ...feedback])
    }



    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Header text="Test UI" bgColor='red' textColor='black' />
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete2={deleteFeedback}/>
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

                }>

                </Route>
                <Route path="/about" element={<About/>}>

                </Route>


            </Routes>
            <AboutIconLink />
            {/*<NavLink to='/about' activeClassName="active">*/}
            {/*    ABOUT*/}
            {/*</NavLink>*/}
            {/*<NavLink to='/' activeClassName="active">*/}
            {/*    HOME*/}
            {/*</NavLink>*/}
        </Router>
    )
}
export default App;