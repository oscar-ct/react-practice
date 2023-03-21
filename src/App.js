import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import {FeedbackProvider} from "./context/FeedbackContext";
import UseRefExample2 from "./components/useRefExamples/UseRefExample2";
import UseRefExample3 from "./components/useRefExamples/UseRefExample3";


function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)
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


// since using context this is now being moved to FeedbackContext.js
    // const deleteFeedback = (id) => {
    //     if (window.confirm("Are you sure you want to delete?")) {
    //         setFeedback(feedback.filter(function (item) {
    //             return item.id !== id;
    //         }))
    //     }
    // }

    // const addFeedback = (newFeedback) => {
    //     console.log(newFeedback);
    //     console.log(feedback);
    //     setFeedback([newFeedback, ...feedback])
    // }



    return (
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <UseRefExample2/>
                            <UseRefExample3/>
                            <Header text="Test UI" bgColor='red' textColor='black' />

                    {/*Feedback prop is no longer required using context instead*/}
                            {/*<FeedbackForm handleAdd={addFeedback}/>*/}
                            <FeedbackForm />


                    {/*Feedback prop is no longer required using context instead*/}
                            {/*<FeedbackStats feedback={feedback}/>*/}
                            <FeedbackStats />



                    {/*Feedback prop && deleteFeedBack function is no longer required using context instead*/}
                            {/*<FeedbackList feedback={feedback} handleDelete2={deleteFeedback}/>*/}
                            <FeedbackList />

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

                    {/*<Route path="/post/:id/:name" element={<Post/>}></Route>*/}
                    <Route path="/post/*" element={<Post/>}/>


                </Routes>
                <AboutIconLink />
                {/*<NavLink to='/about' activeClassName="active">*/}
                {/*    ABOUT*/}
                {/*</NavLink>*/}
                {/*<NavLink to='/' activeClassName="active">*/}
                {/*    HOME*/}
                {/*</NavLink>*/}

            </Router>
        </FeedbackProvider>
    )
}
export default App;