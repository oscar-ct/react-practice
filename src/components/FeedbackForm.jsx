import {useState} from "react";
import Card from "./shared/Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import {useContext, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";

let id = 100;
function FeedbackForm() {
// function FeedbackForm( {handleAdd} ) {


    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(3)


    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(function () {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null);
            setBtnDisabled(false)
        }
      setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                id: id++,
                text: text,
                rating: rating,
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
                feedbackEdit.edit = false;
            } else {
                addFeedback(newFeedback);
            }
            // handleAdd(newFeedback);
            setText('')
        }

    }

    // isDisabled={text.length > 10}

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select={(rating) => {
                    setRating(rating);
                }}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type="submit" version='secondary'  isDisabled={btnDisabled}
                    >Submit</Button>
                </div>
                {/*{message !== "" ?*/}
                {/*    <div> {message} </div> : ""}*/}
                {message && <div>{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm