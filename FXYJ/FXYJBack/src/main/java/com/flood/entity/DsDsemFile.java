package com.flood.entity;

import java.util.Date;

public class DsDsemFile {
    private Integer fileid;

    private String filename;

    private String url;

    private String type;

    private Date expriedate;

    private Date uploaddate;

    private String description;

    private Integer refid;

    private String filetypename;

    private Integer source;

    private Integer status;

    private String examineperson;

    private String examinedetail;

    public Integer getFileid() {
        return fileid;
    }

    public void setFileid(Integer fileid) {
        this.fileid = fileid;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getExpriedate() {
        return expriedate;
    }

    public void setExpriedate(Date expriedate) {
        this.expriedate = expriedate;
    }

    public Date getUploaddate() {
        return uploaddate;
    }

    public void setUploaddate(Date uploaddate) {
        this.uploaddate = uploaddate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getRefid() {
        return refid;
    }

    public void setRefid(Integer refid) {
        this.refid = refid;
    }

    public String getFiletypename() {
        return filetypename;
    }

    public void setFiletypename(String filetypename) {
        this.filetypename = filetypename;
    }

    public Integer getSource() {
        return source;
    }

    public void setSource(Integer source) {
        this.source = source;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getExamineperson() {
        return examineperson;
    }

    public void setExamineperson(String examineperson) {
        this.examineperson = examineperson;
    }

    public String getExaminedetail() {
        return examinedetail;
    }

    public void setExaminedetail(String examinedetail) {
        this.examinedetail = examinedetail;
    }
}