package com.niklas.Wendler.entity;

import javax.persistence.*;

@Entity
public class User {
    public User(String username, int benchpress, int militarypress, int squat, int deadlift, int closegripbenchpress, int frontsquat, int stifflegdeadlift, int inclinebenchpress) {
        this.username = username;
        this.benchpress = benchpress;
        this.militarypress = militarypress;
        this.squat = squat;
        this.deadlift = deadlift;
        this.closegripbenchpress = closegripbenchpress;
        this.frontsquat = frontsquat;
        this.stifflegdeadlift = stifflegdeadlift;
        this.inclinebenchpress = inclinebenchpress;
    }

    @Id
    private String username;

    @Column(name = "bench")
    private int benchpress;

    @Column(name = "press")
    private int militarypress;

    @Column(name = "squat")
    private int squat;

    @Column(name = "deadlift")
    private int deadlift;

    @Column(name = "close_grip_bench")
    private int closegripbenchpress;

    @Column(name = "front_squat")
    private int frontsquat;

    @Column(name = "stiff_leg_deadlift")
    private int stifflegdeadlift;

    @Column(name = "incline_bench")
    private int inclinebenchpress;

//    @Column(name = "start_date")
//    private LocalDateTime startdate;


    public User() {
    }

    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public int getBenchpress() {
        return benchpress;
    }

    public void setBenchpress(int benchpress) {
        this.benchpress = benchpress;
    }

    public int getMilitarypress() {
        return militarypress;
    }

    public void setMilitarypress(int militarypress) {
        this.militarypress = militarypress;
    }

    public int getSquat() {
        return squat;
    }

    public void setSquat(int squat) {
        this.squat = squat;
    }

    public int getDeadlift() {
        return deadlift;
    }

    public void setDeadlift(int deadlift) {
        this.deadlift = deadlift;
    }

    public int getClosegripbenchpress() {
        return closegripbenchpress;
    }

    public void setClosegripbenchpress(int closegripbenchpress) {
        this.closegripbenchpress = closegripbenchpress;
    }

    public int getFrontsquat() {
        return frontsquat;
    }

    public void setFrontsquat(int frontsquat) {
        this.frontsquat = frontsquat;
    }

    public int getStifflegdeadlift() {
        return stifflegdeadlift;
    }

    public void setStifflegdeadlift(int stifflegdeadlift) {
        this.stifflegdeadlift = stifflegdeadlift;
    }

    public int getInclinebenchpress() {
        return inclinebenchpress;
    }

    public void setInclinebenchpress(int inclinebenchpress) {
        this.inclinebenchpress = inclinebenchpress;
    }

}