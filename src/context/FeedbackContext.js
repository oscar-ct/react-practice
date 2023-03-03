import {createContext, useState} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = function ({children}) {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: " #1 This item is from context",
            rating: 10
        },
        {
            id: 2,
            text: " #2 This item is from context",
            rating: 10
        },
        {
            id: 3,
            text: " #3 This item is from context",
            rating: 10
        }
    ])
    /// add feedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // set item to be updated
    const editFeedback = (item) => {
      setFeedbackEdit({
          item: item,
          edit: true,
      })
    }
    
    // delete feedback
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


    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}




export default FeedbackContext