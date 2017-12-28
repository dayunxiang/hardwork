package com.flood.entity;

import java.util.Date;

public class DsDsemTeamstuff {
    private Integer objectid;

    private Integer pfsid;

    private Integer teamid;

    private Double stuffcount;

    private Double stuffusedcount;

    private String reason;

    private Date distributetime;

    private String distributeperson;

    private String usedperson;

    public Integer getObjectid() {
        return objectid;
    }

    public void setObjectid(Integer objectid) {
        this.objectid = objectid;
    }

    public Integer getPfsid() {
        return pfsid;
    }

    public void setPfsid(Integer pfsid) {
        this.pfsid = pfsid;
    }

    public Integer getTeamid() {
        return teamid;
    }

    public void setTeamid(Integer teamid) {
        this.teamid = teamid;
    }

    public Double getStuffcount() {
        return stuffcount;
    }

    public void setStuffcount(Double stuffcount) {
        this.stuffcount = stuffcount;
    }

    public Double getStuffusedcount() {
        return stuffusedcount;
    }

    public void setStuffusedcount(Double stuffusedcount) {
        this.stuffusedcount = stuffusedcount;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Date getDistributetime() {
        return distributetime;
    }

    public void setDistributetime(Date distributetime) {
        this.distributetime = distributetime;
    }

    public String getDistributeperson() {
        return distributeperson;
    }

    public void setDistributeperson(String distributeperson) {
        this.distributeperson = distributeperson;
    }

    public String getUsedperson() {
        return usedperson;
    }

    public void setUsedperson(String usedperson) {
        this.usedperson = usedperson;
    }
}