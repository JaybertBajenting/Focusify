package com.integ.focusify.Service;

import com.integ.focusify.Entity.User;
import com.integ.focusify.Repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;


    public User getUserByUsername(String username){
        User user = userRepository.findByUsername(username);
        if(user == null){
            throw new EntityNotFoundException("User does not exists!");
        }else{
            return user;
        }
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User with that" +
                " id doesnt exists!"));
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return getUserByUsername(username);
    }
}
