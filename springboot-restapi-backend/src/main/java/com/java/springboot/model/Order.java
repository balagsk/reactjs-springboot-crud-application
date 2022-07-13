package com.java.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "tickerName")
    private String tickerName;

    @Column(name = "tickerCode")
    private String tickerCode;

    @Column(name = "price")
    private String price;

    public Order() {
    }

    public Order(String tickerName, String tickerCode, String price) {
        this.tickerName = tickerName;
        this.tickerCode = tickerCode;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTickerName() {
        return tickerName;
    }

    public void setTickerName(String tickerName) {
        this.tickerName = tickerName;
    }

    public String getTickerCode() {
        return tickerCode;
    }

    public void setTickerCode(String tickerCode) {
        this.tickerCode = tickerCode;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", tickerName='" + tickerName + '\'' +
                ", tickerCode='" + tickerCode + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
