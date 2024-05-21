package com.integ.focusify.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_user")
public class User implements UserDetails {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;




    private String username;

    private String password;

    private String name;



    private String profilePicture;


    private Double  hoursStudied;




    @ElementCollection
    @CollectionTable(name = "goals_completed", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "goal")
    private List<String> goalsCompleted = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "goals_ongoing", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "goal")
    private List<String> goalsOnGoing = new ArrayList<>();


    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }






    public void addCompletedGoal(String goal) {
        this.goalsCompleted.add(goal);
    }

    // Method to add an ongoing goal
    public void addOngoingGoal(String goal) {
        this.goalsOnGoing.add(goal);
    }

    // Method to get the list of completed goals
    public List<String> getGoalsCompleted() {
        return this.goalsCompleted;
    }

    // Method to get the list of ongoing goals
    public List<String> getGoalsOnGoing() {
        return this.goalsOnGoing;
    }

    // Method to remove an ongoing goal
    public void removeOngoingGoal(String goal) {
        this.goalsOnGoing.remove(goal);
    }
}
