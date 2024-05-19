package com.integ.focusify.Controller;


import com.integ.focusify.Exceptions.EntityNotDeletedException;
import com.integ.focusify.Service.ImageService;
import com.integ.focusify.Service.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;





@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {


    private final UserService userService;

    private final ImageService imageService;





    @GetMapping("/hello")
    public ResponseEntity<?> getHello(){
        return new ResponseEntity<>("Hello World Hello",HttpStatus.OK);
    }


    @GetMapping("/getUser/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Long userId){
        try{
            return new ResponseEntity<>(userService.getUserById(userId),HttpStatus.OK);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(Map.of("messages",e.getMessage()), HttpStatus.CONFLICT);
        }catch (Exception e){
            return new ResponseEntity<>(Map.of("messages",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }



    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId){
        try{
            return new ResponseEntity<>(userService.deleteUserById(userId),HttpStatus.OK);
        }catch (EntityNotDeletedException e){
            return new ResponseEntity<>(Map.of("messages",e.getMessage()),HttpStatus.CONFLICT);
        }catch (Exception e){
            return new ResponseEntity<>(Map.of("messages",e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }





@GetMapping("/getProfilePicture/{userId}")
    public ResponseEntity<?> getProfilePicture(@PathVariable Long userId) throws IOException{
    return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png"))
            .body(imageService.downloadImage(userId));
}




@PutMapping("/updateProfilePicture/{userId}")
    public ResponseEntity<?> updateUserProfile(@PathVariable Long userId, @RequestParam("image")
                                               MultipartFile file )throws  IOException{
    return new ResponseEntity<>(imageService.uploadImage(userId,file),HttpStatus.OK);
}









}
