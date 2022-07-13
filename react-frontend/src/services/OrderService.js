import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(orders){
        return axios.post(ORDER_API_BASE_URL, orders);
    }

    getOrderById(ordersId){
        return axios.get(ORDER_API_BASE_URL + '/' + ordersId);
    }

    updateOrder(orders, ordersId){
        return axios.put(ORDER_API_BASE_URL + '/' + ordersId, orders);
    }

    deleteOrders(ordersId){
        return axios.delete(ORDER_API_BASE_URL + '/' + ordersId);
    }
}

export default new OrderService()