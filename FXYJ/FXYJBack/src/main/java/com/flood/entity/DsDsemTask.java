package com.flood.entity;

import java.util.Date;

public class DsDsemTask {
    private Integer taskid;

    private Integer taskstatus;

    private Integer warningid;

    private String orderperson;

    private String workperson;

    private String checkperson;

    private Date ordertime;

    private Date finishtime;

    private Date checktime;

    public Integer getTaskid() {
        return taskid;
    }

    public void setTaskid(Integer taskid) {
        this.taskid = taskid;
    }

    public Integer getTaskstatus() {
        return taskstatus;
    }

    public void setTaskstatus(Integer taskstatus) {
        this.taskstatus = taskstatus;
    }

    public Integer getWarningid() {
        return warningid;
    }

    public void setWarningid(Integer warningid) {
        this.warningid = warningid;
    }

    public String getOrderperson() {
        return orderperson;
    }

    public void setOrderperson(String orderperson) {
        this.orderperson = orderperson;
    }

    public String getWorkperson() {
        return workperson;
    }

    public void setWorkperson(String workperson) {
        this.workperson = workperson;
    }

    public String getCheckperson() {
        return checkperson;
    }

    public void setCheckperson(String checkperson) {
        this.checkperson = checkperson;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public Date getFinishtime() {
        return finishtime;
    }

    public void setFinishtime(Date finishtime) {
        this.finishtime = finishtime;
    }

    public Date getChecktime() {
        return checktime;
    }

    public void setChecktime(Date checktime) {
        this.checktime = checktime;
    }
}