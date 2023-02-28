import {useState} from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
function FeedbackItem({ item }) {

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
