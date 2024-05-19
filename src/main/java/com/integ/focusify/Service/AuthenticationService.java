package com.integ.focusify.Service;


import com.integ.focusify.DTO.Request.LoginRequest;
import com.integ.focusify.DTO.Request.RegisterRequest;
import com.integ.focusify.DTO.Request.UpdateRequest;
import com.integ.focusify.DTO.Response.LoginResponse;
import com.integ.focusify.Entity.Role;
import com.integ.focusify.Entity.User;
import com.integ.focusify.Repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {


    private final UserRepository userRepository;


    private final PasswordEncoder passwordEncoder;


    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public LoginResponse registerUser(RegisterRequest registerRequest){
        if(userRepository.findByUsername(registerRequest.getUsername()) != null){
            throw new EntityExistsException("Username already Exists");
        }



        User newUser = User.builder().username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.STUDENT).hoursStudied(0.00)
                .name(registerRequest.getFirstName() + " " + registerRequest.getLastName())
                .profilePicture("default-avatar.jpg")
                .build();
        User user = userRepository.save(newUser);
        return new LoginResponse(user,jwtService.generateToken(user));
    }

    public LoginResponse loginUser(LoginRequest loginRequest){
        User user = userRepository.findByUsername(loginRequest.getUsername());

        if(user == null){
            throw new EntityNotFoundException("User not Found!");
        }

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),loginRequest.getPassword()
        ));

        return new LoginResponse(user,jwtService.generateToken(user));
    }





    public LoginResponse updateUser(Long userId,UpdateRequest updateRequest){

        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not Found!"));

        String fName = "",lName = "";


        if(updateRequest.getFirstName() != null && !updateRequest.getFirstName().isEmpty()){
            fName = updateRequest.getFirstName();
        }
        if(updateRequest.getLastName() != null && !updateRequest.getLastName().isEmpty()){
            lName = updateRequest.getLastName();
        }
        user.setName(fName + " " + lName);

        if(updateRequest.getPassword() != null && !updateRequest.getPassword().isBlank()){
            user.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
        }

        if(updateRequest.getHoursStudied() != 0){
            user.setHoursStudied(updateRequest.getHoursStudied() + user.getHoursStudied());
        }


        return new LoginResponse( userRepository.save(user),jwtService.generateToken(user));
    }









}
