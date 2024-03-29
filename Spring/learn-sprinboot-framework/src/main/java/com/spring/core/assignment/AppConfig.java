package com.spring.core.assignment;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan(basePackages = "com.spring.core.assignment")
public class AppConfig {

    @Bean
    public DataSource mysqlDataSource(){
        return new MYSQLDataSource();
    }

    @Bean
    public DataSource postgreSQLDataSource(){
        return new PostgreSQLDataSource();
    }

    @Bean
    public EmailService emailService(){
        return new EmailService(postgreSQLDataSource());
    }
}
