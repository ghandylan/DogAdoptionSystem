package com.example.dogadoption.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class AdoptionInterest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    // TODO: Determine relationship between AdoptionInterest, User, and Dog models
    private String name;
    private String dogName;
    private String dateAndTimeCreated;
    private String status;

    public AdoptionInterest() {
    }

    public AdoptionInterest(long id, String name, String dogName, String dateAndTimeCreated, String status) {
        this.id = id;
        this.name = name;
        this.dogName = dogName;
        this.dateAndTimeCreated = dateAndTimeCreated;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDogName() {
        return dogName;
    }

    public void setDogName(String dogName) {
        this.dogName = dogName;
    }

    public String getDateAndTimeCreated() {
        return dateAndTimeCreated;
    }

    public void setDateAndTimeCreated(String dateAndTimeCreated) {
        this.dateAndTimeCreated = dateAndTimeCreated;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AdoptionInterest that = (AdoptionInterest) o;
        return getId() == that.getId() && Objects.equals(getName(), that.getName()) && Objects.equals(getDogName(), that.getDogName()) && Objects.equals(getDateAndTimeCreated(), that.getDateAndTimeCreated()) && Objects.equals(getStatus(), that.getStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDogName(), getDateAndTimeCreated(), getStatus());
    }

    @Override
    public String toString() {
        return "AdoptionInterest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dogName='" + dogName + '\'' +
                ", dateAndTimeCreated='" + dateAndTimeCreated + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
