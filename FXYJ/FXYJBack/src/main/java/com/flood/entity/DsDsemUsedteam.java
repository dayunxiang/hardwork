package com.flood.entity;

import java.util.Date;

public class DsDsemUsedteam {
    private Integer relationid;

    private Integer pftid;

    private Integer taskid;

    private Date time;

    private Integer status;

    public Integer getRelationid() {
        return relationid;
    }

    public void setRelationid(Integer relationid) {
        this.relationid = relationid;
    }

    public Integer getPftid() {
        return pftid;
    }

    public void setPftid(Integer pftid) {
        this.pftid = pftid;
    }

    public Integer getTaskid() {
        return taskid;
    }

    public void setTaskid(Integer taskid) {
        this.taskid = taskid;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}