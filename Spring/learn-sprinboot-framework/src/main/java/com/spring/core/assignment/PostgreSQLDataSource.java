package com.spring.core.assignment;


public class PostgreSQLDataSource implements DataSource {
    @Override
    public String[] getEmails() {
        String[] emails = {"abhisheksinghrocks280@gmail.com", "chauhanabhi280@gmail.com"};
        return emails;
    }
}
