package com.lioc.backend.model;

import com.lioc.backend.util.enums.UserType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private int userId;

    @Column(name = "email")
    @NotBlank(message = "Email Required")
    private String email;

    @Column(name = "passowrd")
    @NotBlank(message = "Passowrd Required")
    private String passowrd;

    @Column(name = "usertype", columnDefinition = "CHAR")
    @Enumerated(EnumType.ORDINAL)
    private UserType userType;

}