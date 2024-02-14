package com.spring.core.beans;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

class Student{
    private Address address;

    public Student(Address address){
        this.address = address;
    }

    public void print(){
        System.out.println("Student class method called..");
        address.print();
    }

    public void init(){
        System.out.println("Initialization logic...");
    }

    public void destroy(){
        System.out.println("Destruction logic...");
    }
}

class Address{
    public void print(){
        System.out.println("Address class method called..");
    }
}

@Configuration
class AppConfig{

    @Bean(name = "addressBean")
    public Address address(){
        return new Address();
    }

//    @Bean(name = "studentBean")
//    public Student student(){
//        return new Student(address());
//    }

//    @Bean(name = {"studentBean", "studentDemo"})
//    public Student student(){
//        return new Student(address());
//    }

    @Bean(name = "studentBean", initMethod = "init", destroyMethod = "destroy")
    public Student student(){
        return new Student(address());
    }
}
public class BeanAnnotationDemo {

    public static void main(String[] args){
        try (var ApplicationContext = new AnnotationConfigApplicationContext(AppConfig.class)){

            // Student student = applicationContext.getBean(Student.class);
            Student student = (Student) ApplicationContext.getBean( "studentBean");
            String[] beanNames = ApplicationContext.getBeanDefinitionNames();
            for (String bean: beanNames){
                System.out.println(bean);
            }
            student.print();
        }
    }
}
