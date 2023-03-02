import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";

function FeedbackList({ feedback, handleDelete2}) {

        if (!feedback || feedback.length === 0) {
            return <p>No feedback yet</p>
        }
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map(function (item) {
                return (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete2}/>
                    </motion.div>
                )
            })}
            </AnimatePresence>
        </div>
    )
    //     return (
    //         <div className="feedback-list">
    //         {feedback.map(function (item) {
    //             console.log(item)
    //             return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete2}/>
    //         })}
    //         </div>
    // )
}
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList