package com.flood.entity;

import java.util.Date;

public class DsDsemFloodlevelrecord {
    private Integer floodlevelid;

    private Date changetime;

    private Integer floodid;

    private Integer warninglevel;

    private Integer issendmessage;

    private Integer personid;

    public Integer getFloodlevelid() {
        return floodlevelid;
    }

    public void setFloodlevelid(Integer floodlevelid) {
        this.floodlevelid = floodlevelid;
    }

    public Date getChangetime() {
        return changetime;
    }

    public void setChangetime(Date changetime) {
        this.changetime = changetime;
    }

    public Integer getFloodid() {
        return floodid;
    }

    public void setFloodid(Integer floodid) {
        this.floodid = floodid;
    }

    public Integer getWarninglevel() {
        return warninglevel;
    }

    public void setWarninglevel(Integer warninglevel) {
        this.warninglevel = warninglevel;
    }

    public Integer getIssendmessage() {
        return issendmessage;
    }

    public void setIssendmessage(Integer issendmessage) {
        this.issendmessage = issendmessage;
    }

    public Integer getPersonid() {
        return personid;
    }

    public void setPersonid(Integer personid) {
        this.personid = personid;
    }
}