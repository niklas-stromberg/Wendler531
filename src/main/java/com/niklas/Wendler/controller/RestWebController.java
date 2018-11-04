package com.niklas.Wendler.controller;

import com.niklas.Wendler.entity.User;
import com.niklas.Wendler.message.Response;
import com.niklas.Wendler.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RestWebController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/getuser/{username}", method = RequestMethod.GET)
    public Response getuser(@PathVariable String username) {
        User currentUser = userRepository.findOne(username);
        return new Response("Done", currentUser);
    }

    @RequestMapping(value = "/getusers", method = RequestMethod.GET)
    public Response getUser() {
        return new Response("Done", userRepository.findAll());
    }

    @RequestMapping(value = "/postuser", method = RequestMethod.POST)
    public Response postuser(@RequestBody User user) {
        System.out.println("Creating User "+user.getusername());
        userRepository.save(user);
        return new Response("Done", user);
    }
}