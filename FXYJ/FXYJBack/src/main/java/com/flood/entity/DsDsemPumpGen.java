package com.flood.entity;

import java.util.Date;

public class DsDsemPumpGen {
    private Integer genid;

    private String gensize;

    private String gentype;

    private Integer status;

    private String detail;

    private String year;

    private Date completetime;

    private Integer pumpid;

    public Integer getGenid() {
        return genid;
    }

    public void setGenid(Integer genid) {
        this.genid = genid;
    }

    public String getGensize() {
        return gensize;
    }

    public void setGensize(String gensize) {
        this.gensize = gensize;
    }

    public String getGentype() {
        return gentype;
    }

    public void setGentype(String gentype) {
        this.gentype = gentype;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Date getCompletetime() {
        return completetime;
    }

    public void setCompletetime(Date completetime) {
        this.completetime = completetime;
    }

    public Integer getPumpid() {
        return pumpid;
    }

    public void setPumpid(Integer pumpid) {
        this.pumpid = pumpid;
    }
}