package com.spring.core.assignment.javaconfig;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class PostgreSQLDataSource implements DataSource {
    @Override
    public String[] getEmails() {
        String[] emails = {"abhisheksinghrocks280@gmail.com", "chauhanabhi280@gmail.com"};
        return emails;
    }
}
