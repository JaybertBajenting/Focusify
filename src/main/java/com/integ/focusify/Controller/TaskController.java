package com.integ.focusify.Controller;

import com.integ.focusify.Entity.User;
import com.integ.focusify.Service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth/user/task")
public class TaskController {

    private final TaskService taskService;




    @PostMapping("/addTime/{userId}")
    public ResponseEntity<?> addTime(@PathVariable Long userId,@RequestParam("time") Double time){
        try{
         return new ResponseEntity<>(taskService.addTimer(time,userId),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(Map.of("messages",e.getMessage()),HttpStatus.BAD_REQUEST);

        }
    }


    @GetMapping("/getLeaderBoards")
    public List<User> getLeaderBoards(){
        return taskService.getLeaderBoards();
    }


    @GetMapping("/greet")
    public String hello(){
        return "Hello World";
    }



    @PostMapping("/addFinishedGoal/{userId}/{goal}")
    public User addCompletedGoal(@PathVariable Long userId, @RequestParam String goal) {
        return taskService.addCompletedGoal(userId, goal);
    }

    @PostMapping("/{userId}/addOnGoingGoal/{goal}")
    public User addOngoingGoal(@PathVariable Long userId, @RequestParam String goal) {
        return taskService.addOngoingGoal(userId, goal);
    }



    @GetMapping("/{userId}/completed-goals")
    public List<String> getCompletedGoals(@PathVariable Long userId) {
        return taskService.getCompletedGoals(userId);
    }

    @GetMapping("/{userId}/ongoing-goals")
    public List<String> getOngoingGoals(@PathVariable Long userId) {
        return taskService.getOngoingGoals(userId);
    }

    @DeleteMapping("/{userId}/deleteOnGoingGoal/{goal}")
    public User deleteOngoingGoal(@PathVariable Long userId, @RequestParam String goal) {
        return taskService.deleteOngoingGoal(userId, goal);
    }


}
