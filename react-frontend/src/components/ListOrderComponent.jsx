import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ListOrderComponent extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
        this.addOrders = this.addOrders.bind(this);
        this.editOrders = this.editOrders.bind(this);
        this.deleteOrders = this.deleteOrders.bind(this);
    }

    //on-load or on-render the current component, execute the API call and fetch response data on constructor state

    componentDidMount() { //Onload or on-render component
        OrderService.getOrders().then(
            (res) => {
                this.setState({
                    orders: res.data
                });

                console.log('componentDidMount- getOrders :'+JSON.stringify(this.state.orders));

                res.data.forEach(element => {
                    console.log(element);
                });


            });
    }


    viewOrders(id) {
        this.props.history.push(`/view-orders/${id}`);  // here Acute/open quote symbol is important ( ` `); not single quote.
    }

    addOrders() {
        this.props.history.push(`/add-orders/_add`);
    }

    editOrders(id) {
        this.props.history.push(`/add-orders/${id}`);
    }

    deleteOrders(id) {
        console.log('Delete by OrderId : '+id);
        OrderService.deleteOrders(id)
        .then(
            res => {
                this.setState({
                    orders: this.state.orders.filter(orders => orders.id !== id)
                });
            
        });
        console.log('Delete by OrderId : Completed. ');
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Stocks Order List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addOrders}> Buy trades</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>

                                <th> Trading Name</th>
                                <th> Trading Code</th>
                                <th> sale price</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.map(
                                    orders =>
                                        <tr key={orders.id}>
                                            <td> {orders.tickerName} </td>
                                            <td> {orders.tickerCode}</td>
                                            <td> {orders.price}</td>
                                            <td>
                                                <button onClick={() => this.editOrders(orders.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteOrders(orders.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewOrders(orders.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOrderComponent
