package com.example.dogadoption.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Vet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String username;
    private String password;
    private String address;
    private String dateAndTimeCreated;

    public Vet() {
    }

    public Vet(long id, String username, String password, String address, String dateAndTimeCreated) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.address = address;
        this.dateAndTimeCreated = dateAndTimeCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDateAndTimeCreated() {
        return dateAndTimeCreated;
    }

    public void setDateAndTimeCreated(String dateAndTimeCreated) {
        this.dateAndTimeCreated = dateAndTimeCreated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vet vet = (Vet) o;
        return getId() == vet.getId() && Objects.equals(getUsername(), vet.getUsername()) && Objects.equals(getPassword(), vet.getPassword()) && Objects.equals(getAddress(), vet.getAddress()) && Objects.equals(getDateAndTimeCreated(), vet.getDateAndTimeCreated());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUsername(), getPassword(), getAddress(), getDateAndTimeCreated());
    }

    @Override
    public String toString() {
        return "Vet{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", address='" + address + '\'' +
                ", dateAndTimeCreated='" + dateAndTimeCreated + '\'' +
                '}';
    }
}
