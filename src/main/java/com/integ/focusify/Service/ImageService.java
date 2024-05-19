package com.integ.focusify.Service;

import com.integ.focusify.Entity.User;
import com.integ.focusify.Repository.UserRepository;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ImageService {






    private final UserRepository userRepository;


    private final String userHome = System.getProperty("user.home");
    private final Path root = Paths.get(userHome,"ProfilePics");



    @PostConstruct
    public void init() throws IOException {
        if(!Files.isDirectory(root) && !Files.exists(root)){
            Files.createDirectories(root);
        }
    }

    public String uploadImage(Long userId, MultipartFile file ) throws IOException{
            if(file.getOriginalFilename() == null){
                throw new IOException("File is empty");
            }

            User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("" +
                    "User not found!"));



            String fileExtension = StringUtils.getFilenameExtension(file.getOriginalFilename());
            String fileName = "UserID_" + userId + "." + fileExtension;
            user.setProfilePicture(fileName);
            userRepository.save(user);
            Path filePath = root.resolve(fileName);
            file.transferTo(filePath);
            return  "Image upload  succeded!";
    }





    public byte[] downloadImage(Long userID) throws IOException {
        User user = userRepository.findById(userID).orElseThrow(() -> new EntityNotFoundException("User Not Found!"));
        String profilePicture = user.getProfilePicture();
        Path filePath = root.resolve(profilePicture);
        return Files.readAllBytes(filePath);
    }




    public void deleteImage(String fileName) throws IOException{
            Path filePath = root.resolve(fileName);
            Files.deleteIfExists(filePath);
    }
}
