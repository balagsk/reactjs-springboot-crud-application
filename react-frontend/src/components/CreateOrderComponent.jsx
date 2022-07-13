import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            tickerName: '',
            tickerCode: '',
            price: ''
        }
        this.changeTickerNameHandler = this.changeTickerNameHandler.bind(this);
        this.changeTickerCodeHandler = this.changeTickerCodeHandler.bind(this);
        this.saveOrUpdateOrders = this.saveOrUpdateOrders.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            console.log('state : _add');
            return
        }else{
            OrderService.getOrderById(this.state.id)
            .then( 
                (res) =>{
                    let Orders = res.data;
                    this.setState({
                        tickerName: Orders.tickerName,
                        tickerCode: Orders.tickerCode,
                        price : Orders.price
                    });                    
                 });
        }        
    }
    saveOrUpdateOrders = (e) => {
        e.preventDefault();  // prevent the default events. e.g button submission by default.
        let Orders = {  
            tickerName: this.state.tickerName, 
            tickerCode: this.state.tickerCode, 
            price: this.state.price
        };

        console.log('orders => ' + JSON.stringify(Orders));

        // step 5
        if(this.state.id === '_add'){
            console.log('Order creation invoked.');
            OrderService.createOrder(Orders)
                .then(
                    res =>{
                        this.props.history.push('/orders');
                    console.log('Order creation completed.');    
                });
        }else{
            console.log('Order update invoked.');

            OrderService.updateOrder(Orders, this.state.id)
            .then( 
                res => {
                       this.props.history.push('/orders');
                });
            console.log('Order update Completed.');
        }
    }
    
    changeTickerNameHandler= (event) => {
        console.log('Event changeTickerNameHandler called.');
        this.setState({tickerName: event.target.value});
    }

    changeTickerCodeHandler= (event) => {
        console.log('Event changeTickerCodeHandler called.');
        this.setState({tickerCode: event.target.value});
    }

    changePriceHandler= (event) => {
        console.log('Event changePriceHandler called.');
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/orders');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Orders</h3>
        }else{
            return <h3 className="text-center">Update Orders</h3>
        }
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Trading name : </label>
                                            <input placeholder="Trading name" name="firstName" className="form-control"
                                                value={this.state.tickerName} onChange={this.changeTickerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Trading Code : </label>
                                            <input placeholder="Trading Code" name="lastName" className="form-control"
                                                value={this.state.tickerCode} onChange={this.changeTickerCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> sale price : </label>
                                            <input placeholder="sale price" name="emailId" className="form-control"
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateOrders}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateOrderComponent
