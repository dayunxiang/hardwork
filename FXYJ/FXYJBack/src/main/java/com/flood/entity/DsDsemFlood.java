package com.flood.entity;

import java.util.Date;

public class DsDsemFlood {
    private Integer floodid;

    private Date starttime;

    private Date endtime;

    private String floodname;

    private String floodcode;

    private Integer personid;

    private Integer isdeleted;

    public Integer getFloodid() {
        return floodid;
    }

    public void setFloodid(Integer floodid) {
        this.floodid = floodid;
    }

    public Date getStarttime() {
        return starttime;
    }

    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    public String getFloodname() {
        return floodname;
    }

    public void setFloodname(String floodname) {
        this.floodname = floodname;
    }

    public String getFloodcode() {
        return floodcode;
    }

    public void setFloodcode(String floodcode) {
        this.floodcode = floodcode;
    }

    public Integer getPersonid() {
        return personid;
    }

    public void setPersonid(Integer personid) {
        this.personid = personid;
    }

    public Integer getIsdeleted() {
        return isdeleted;
    }

    public void setIsdeleted(Integer isdeleted) {
        this.isdeleted = isdeleted;
    }
}