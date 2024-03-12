package com.integ.focusify.DTO.Response;

import com.integ.focusify.Entity.User;
import lombok.Data;

@Data
public class LoginResponse {


    private User user;

    private String token;


    public LoginResponse(User user,String token){
        this.user = user;
        this.token = token;
    }
}
