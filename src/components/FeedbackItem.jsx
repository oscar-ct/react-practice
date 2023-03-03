import {useState} from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes, FaEdit} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
// function FeedbackItem({ item, handleDelete}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of a feedback item")
    const handleClick = () => {
        setRating(function (prev) {
            return prev + 1;
        })
        setText(function (prev) {
            console.log(rating);
            if (rating % 2 === 0) {
                return <h1>GOOD BYE</h1>;
            } else {
                return "hi";
            }
        })
    }


    return (
        <>
            {/*<Card reverse={true}>*/}
            {/*<ard reverse={false}>*/}
            <Card>
                {/*This is using object destructuring from a prop*/}
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
        {/*// this is now changed using context*/}
                <button onClick={() => deleteFeedback(item.id)} className="close">
                {/*<button onClick={() => handleDelete(item.id)} className="close">*/}
                    <FaTimes color="purple" />
                </button>
                <button onClick={function (item) {
                    return editFeedback(item);
                }}>
                   <FaEdit color="purple"/>
                </button>
            </Card>
            {/*This is hard coding use states*/}
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;
