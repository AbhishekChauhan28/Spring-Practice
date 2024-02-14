package net.javaguides.springboot.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Created a getter and setter methods and also created a constructors using boiler plate(lombok).
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity //specifies User class has JPA entity
@Table(name = "users") //configure table details
public class User {

    @Id //configure a primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false, unique = true)
    private String email;
}
