package com.spring.core;

public class User {
    //User is dependent on address class object
    private Address address;

//    object class object injected inside the User class object so user
//    class uses the address class methods.
    public  User(){
        address = new Address();
    }
    public  void  address(){
        address.getAddress();
    }
}

class  Address{
    public void  getAddress(){

    }
}
