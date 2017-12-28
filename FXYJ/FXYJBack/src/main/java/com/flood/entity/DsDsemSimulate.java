package com.flood.entity;

import java.util.Date;

public class DsDsemSimulate {
    private Integer objectid;

    private Integer spotid;

    private Integer factorid;

    private Date raintime;

    private Double rain;

    private Double overflow;

    public Integer getObjectid() {
        return objectid;
    }

    public void setObjectid(Integer objectid) {
        this.objectid = objectid;
    }

    public Integer getSpotid() {
        return spotid;
    }

    public void setSpotid(Integer spotid) {
        this.spotid = spotid;
    }

    public Integer getFactorid() {
        return factorid;
    }

    public void setFactorid(Integer factorid) {
        this.factorid = factorid;
    }

    public Date getRaintime() {
        return raintime;
    }

    public void setRaintime(Date raintime) {
        this.raintime = raintime;
    }

    public Double getRain() {
        return rain;
    }

    public void setRain(Double rain) {
        this.rain = rain;
    }

    public Double getOverflow() {
        return overflow;
    }

    public void setOverflow(Double overflow) {
        this.overflow = overflow;
    }
}