package com.spring.core.di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class MessageSender {

    @Autowired
    @Qualifier("emailService")
    private MessageService messageService;

    @Autowired
    private MessageService smsService;


//    public MessageSender(@Qualifier("emailService") MessageService messageService){
////        this.emailService = emailService;
//        this.messageService = messageService;
//        System.out.println("constructor based dependency injection1");
//    }
//
//    @Autowired
//    public MessageSender(@Qualifier("emailService") MessageService messageService, MessageService smsService){
//        this.messageService = messageService;
//        this.smsService = smsService;
//        System.out.println("constructor based dependency injection2");
//    }


//    @Autowired
//    public void setMessageService(@Qualifier("emailService") MessageService messageService) {
//        this.messageService = messageService;
//        System.out.println("Setter based dependency injection");
//    }

    public void sendMessage(String message){
//        this.emailService.sendMessage(message);
        this.messageService.sendMessage(message);
        this.smsService.sendMessage(message);
    }
}
