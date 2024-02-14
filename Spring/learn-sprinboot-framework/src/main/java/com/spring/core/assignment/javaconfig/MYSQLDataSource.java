package com.spring.core.assignment.javaconfig;

import org.springframework.stereotype.Component;

@Component
public class MYSQLDataSource implements DataSource {

    @Override
    public String[] getEmails() {

        String[] emails = {"abhisheksinghrocks280@gmail.com", "chauhanabhi280@gmail.com"};

        return emails;
    }
}
