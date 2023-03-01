import {useState} from "react";
import Card from "./shared/Card";
import Button from "./Button";
function FeedbackFrom() {


    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

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

    // isDisabled={text.length > 10}

    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
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
export default FeedbackFrom