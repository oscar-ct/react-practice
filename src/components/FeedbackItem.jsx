import {useState} from 'react';

function FeedbackItem() {

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
                return <h5>{prev}</h5>;
            }
        })
    }


    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default FeedbackItem;
