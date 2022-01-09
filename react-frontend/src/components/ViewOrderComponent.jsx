import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Trade info</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Trading Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Trading Code: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Sale price:</label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent
