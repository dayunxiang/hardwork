package com.flood.entity;

import java.util.Date;

public class DsDsemPumpSecondmaintence {
    private Integer deviceid;

    private Integer pumpid;

    private String devicename;

    private String detail;

    private Date completetime;

    private Integer completestatus;

    private String description;

    private String year;

    public Integer getDeviceid() {
        return deviceid;
    }

    public void setDeviceid(Integer deviceid) {
        this.deviceid = deviceid;
    }

    public Integer getPumpid() {
        return pumpid;
    }

    public void setPumpid(Integer pumpid) {
        this.pumpid = pumpid;
    }

    public String getDevicename() {
        return devicename;
    }

    public void setDevicename(String devicename) {
        this.devicename = devicename;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Date getCompletetime() {
        return completetime;
    }

    public void setCompletetime(Date completetime) {
        this.completetime = completetime;
    }

    public Integer getCompletestatus() {
        return completestatus;
    }

    public void setCompletestatus(Integer completestatus) {
        this.completestatus = completestatus;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}