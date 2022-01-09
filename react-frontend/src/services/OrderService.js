import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(employee){
        return axios.post(ORDER_API_BASE_URL, employee);
    }

    getOrderById(employeeId){
        return axios.get(ORDER_API_BASE_URL + '/' + employeeId);
    }

    updateOrder(employee, employeeId){
        return axios.put(ORDER_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteOrder(employeeId){
        return axios.delete(ORDER_API_BASE_URL + '/' + employeeId);
    }
}

export default new OrderService()