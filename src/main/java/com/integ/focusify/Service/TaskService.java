package com.integ.focusify.Service;


import com.integ.focusify.Entity.User;
import com.integ.focusify.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {


    private final UserRepository userRepository;




    public User addTimer(Double time, Long userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new UsernameNotFoundException("User not Found!"));

        DecimalFormat df = new DecimalFormat("#.000");
        double timeInHours = time / 3600;
        String formattedDouble = df.format(user.getHoursStudied() + timeInHours);
        double parsedDouble = Double.parseDouble(formattedDouble);
        user.setHoursStudied(parsedDouble);

        userRepository.save(user);
        return user;
    }






    public List<User>  getLeaderBoards(){
        List<User> users = userRepository.findAll();
        List<User> sortedUsers = users.stream()
                .sorted(Comparator.comparingDouble(User::getHoursStudied).reversed())
                .collect(Collectors.toList());

        return sortedUsers;
    }




}
