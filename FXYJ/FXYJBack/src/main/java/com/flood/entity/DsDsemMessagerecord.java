package com.flood.entity;

import java.util.Date;

public class DsDsemMessagerecord {
    private Integer messageid;

    private Date sendtime;

    private Integer personid;

    private String detail;

    private Integer floodlevelid;

    public Integer getMessageid() {
        return messageid;
    }

    public void setMessageid(Integer messageid) {
        this.messageid = messageid;
    }

    public Date getSendtime() {
        return sendtime;
    }

    public void setSendtime(Date sendtime) {
        this.sendtime = sendtime;
    }

    public Integer getPersonid() {
        return personid;
    }

    public void setPersonid(Integer personid) {
        this.personid = personid;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Integer getFloodlevelid() {
        return floodlevelid;
    }

    public void setFloodlevelid(Integer floodlevelid) {
        this.floodlevelid = floodlevelid;
    }
}