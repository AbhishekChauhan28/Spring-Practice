package com.spring.core;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component("traveler")
public class Traveler {
    private Vehicle vehicle;

    @Autowired
    public Traveler(@Qualifier("car") Vehicle vehicle){
//        this.car = new Car();
        this.vehicle = vehicle;
    }

    public  void startJourney(){
//        this.car.move();
        this.vehicle.move();
    }
}