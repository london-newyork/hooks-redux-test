import React, { useReducer} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import EventForm from "./EventForm";
import Events from "./Events";

const MakeForm = () => {
    const [state, dispatch] = useReducer(reducer, [])
    console.log(state, 'in App.js')
    return (
        <div>
             <div className="container-fluid">
                <EventForm state={state} dispatch={dispatch}/>
                <Events state={state} dispatch={dispatch}/>

            </div>
        </div>
    )
}

export default MakeForm
