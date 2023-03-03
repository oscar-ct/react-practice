import PropTypes from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
// function FeedbackStats({feedback}) {
    const { feedback } = useContext(FeedbackContext)

    let avg = feedback.reduce(function (acc, cur) {
        return acc + cur.rating/ feedback.length;
    }, 0)

    avg = avg.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats text-large">
            <h4>{feedback.length}</h4>
            <h4>Avg Rating: {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats