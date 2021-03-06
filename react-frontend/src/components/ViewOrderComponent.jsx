import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tickerName: '',
            tickerCode: '',
            price: ''
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id)
            .then( 
                res => {
                    let orders= res.data;
                    this.setState({
                        tickerName: orders.tickerName,
                        tickerCode: orders.tickerCode,
                        price: orders.price
                    });

                    console.log('Orders list by Id : '+JSON.stringify(orders));
                }               
            );
            console.log(JSON.stringify(this.res));
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
                            <div> { this.state.tickerName }</div>
                        </div>
                        <div className = "row">
                            <label> Trading Code: </label>
                            <div> { this.state.tickerCode }</div>
                        </div>
                        <div className = "row">
                            <label> Sale price:</label>
                            <div> { this.state.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent
