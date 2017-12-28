package com.flood.entity;

import java.util.Date;

public class DsDsemWarningReporter {
    private Integer recordid;

    private String reporter;

    private String reportertel;

    private Date reportertime;

    private Integer sourceid;

    private Integer warningid;

    public Integer getRecordid() {
        return recordid;
    }

    public void setRecordid(Integer recordid) {
        this.recordid = recordid;
    }

    public String getReporter() {
        return reporter;
    }

    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    public String getReportertel() {
        return reportertel;
    }

    public void setReportertel(String reportertel) {
        this.reportertel = reportertel;
    }

    public Date getReportertime() {
        return reportertime;
    }

    public void setReportertime(Date reportertime) {
        this.reportertime = reportertime;
    }

    public Integer getSourceid() {
        return sourceid;
    }

    public void setSourceid(Integer sourceid) {
        this.sourceid = sourceid;
    }

    public Integer getWarningid() {
        return warningid;
    }

    public void setWarningid(Integer warningid) {
        this.warningid = warningid;
    }
}