import { render } from "@testing-library/react";
import React, {Component} from "react";

class CustomerFeedbackPage extends Component{
        constructor(Props){
            super(Props);
            this.state = {
                customerFeedbackText: ''
            }
        }

        onChangeHandler(event){
            this.setState({
                customerFeedbackText : event.target.value
            })
            console.log('onChangeHandler completion.');
        }

        render(){
            return (
                <div>
                    <br/>
                    <h1>Customer Feedback Form :</h1>
                    <input id="form1" name="feedbackform" type="text" onChange={event => this.onChangeHandler(event)} />
                    <p> Receied Feedback is:  {this.state.customerFeedbackText}</p>

                </div>
            )   
        }
}



export default CustomerFeedbackPage