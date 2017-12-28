package com.flood.entity;

import java.util.Date;

public class DsDsemPrefloodplan {
    private Integer pfpid;

    private String pfpname;

    private Date uploaddate;

    private String plannote;

    private Integer pfptype;

    private Date exprieddate;

    private String pfplevel;

    private String url;

    public Integer getPfpid() {
        return pfpid;
    }

    public void setPfpid(Integer pfpid) {
        this.pfpid = pfpid;
    }

    public String getPfpname() {
        return pfpname;
    }

    public void setPfpname(String pfpname) {
        this.pfpname = pfpname;
    }

    public Date getUploaddate() {
        return uploaddate;
    }

    public void setUploaddate(Date uploaddate) {
        this.uploaddate = uploaddate;
    }

    public String getPlannote() {
        return plannote;
    }

    public void setPlannote(String plannote) {
        this.plannote = plannote;
    }

    public Integer getPfptype() {
        return pfptype;
    }

    public void setPfptype(Integer pfptype) {
        this.pfptype = pfptype;
    }

    public Date getExprieddate() {
        return exprieddate;
    }

    public void setExprieddate(Date exprieddate) {
        this.exprieddate = exprieddate;
    }

    public String getPfplevel() {
        return pfplevel;
    }

    public void setPfplevel(String pfplevel) {
        this.pfplevel = pfplevel;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}