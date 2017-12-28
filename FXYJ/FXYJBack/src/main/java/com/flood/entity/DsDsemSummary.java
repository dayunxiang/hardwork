package com.flood.entity;

import java.util.Date;

public class DsDsemSummary {
    private Integer id;

    private String summarycode;

    private Integer summaryyear;

    private String summaryname;

    private Integer summarytype;

    private Integer submitcompany;

    private Date submitdate;

    private String shortcomings;

    private String solution;

    private String experience;

    private Integer attachid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSummarycode() {
        return summarycode;
    }

    public void setSummarycode(String summarycode) {
        this.summarycode = summarycode;
    }

    public Integer getSummaryyear() {
        return summaryyear;
    }

    public void setSummaryyear(Integer summaryyear) {
        this.summaryyear = summaryyear;
    }

    public String getSummaryname() {
        return summaryname;
    }

    public void setSummaryname(String summaryname) {
        this.summaryname = summaryname;
    }

    public Integer getSummarytype() {
        return summarytype;
    }

    public void setSummarytype(Integer summarytype) {
        this.summarytype = summarytype;
    }

    public Integer getSubmitcompany() {
        return submitcompany;
    }

    public void setSubmitcompany(Integer submitcompany) {
        this.submitcompany = submitcompany;
    }

    public Date getSubmitdate() {
        return submitdate;
    }

    public void setSubmitdate(Date submitdate) {
        this.submitdate = submitdate;
    }

    public String getShortcomings() {
        return shortcomings;
    }

    public void setShortcomings(String shortcomings) {
        this.shortcomings = shortcomings;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public Integer getAttachid() {
        return attachid;
    }

    public void setAttachid(Integer attachid) {
        this.attachid = attachid;
    }
}