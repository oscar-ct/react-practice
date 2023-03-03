import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDelete2}) {

// No longer going to use prop feedback instead going to use context

// function FeedbackList({ feedback, handleDelete2}) {
    const {feedback} = useContext(FeedbackContext);

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
    //  This is an alternative to using AnimatePresence and motion-div

    //     return (
    //         <div className="feedback-list">
    //         {feedback.map(function (item) {
    //             console.log(item)
    //             return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete2}/>
    //         })}
    //         </div>
    // )
}

// This is no longer required since feedback is now being provided through context and no a prop


// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }
export default FeedbackList