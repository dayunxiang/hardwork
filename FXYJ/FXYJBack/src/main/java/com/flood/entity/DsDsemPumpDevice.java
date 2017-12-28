package com.flood.entity;

import java.util.Date;

public class DsDsemPumpDevice {
    private Integer deviceid;

    private String devicename;

    private String devicesize;

    private Date completetime;

    private Integer status;

    private String description;

    private Integer pumpid;

    private Integer pumptype;

    private String year;

    private String detail;

    public Integer getDeviceid() {
        return deviceid;
    }

    public void setDeviceid(Integer deviceid) {
        this.deviceid = deviceid;
    }

    public String getDevicename() {
        return devicename;
    }

    public void setDevicename(String devicename) {
        this.devicename = devicename;
    }

    public String getDevicesize() {
        return devicesize;
    }

    public void setDevicesize(String devicesize) {
        this.devicesize = devicesize;
    }

    public Date getCompletetime() {
        return completetime;
    }

    public void setCompletetime(Date completetime) {
        this.completetime = completetime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPumpid() {
        return pumpid;
    }

    public void setPumpid(Integer pumpid) {
        this.pumpid = pumpid;
    }

    public Integer getPumptype() {
        return pumptype;
    }

    public void setPumptype(Integer pumptype) {
        this.pumptype = pumptype;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}