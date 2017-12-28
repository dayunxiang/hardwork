package com.flood.entity;

public class DsDsemPump {
    private Integer pumpid;

    private String pumpname;

    private String supplyline;

    private String transformer;

    private Double pumparea;

    private Double servicearea;

    private Double liftingCapacity;

    private Double catchmentarea;

    private String serviceregion;

    private Integer type;

    public Integer getPumpid() {
        return pumpid;
    }

    public void setPumpid(Integer pumpid) {
        this.pumpid = pumpid;
    }

    public String getPumpname() {
        return pumpname;
    }

    public void setPumpname(String pumpname) {
        this.pumpname = pumpname;
    }

    public String getSupplyline() {
        return supplyline;
    }

    public void setSupplyline(String supplyline) {
        this.supplyline = supplyline;
    }

    public String getTransformer() {
        return transformer;
    }

    public void setTransformer(String transformer) {
        this.transformer = transformer;
    }

    public Double getPumparea() {
        return pumparea;
    }

    public void setPumparea(Double pumparea) {
        this.pumparea = pumparea;
    }

    public Double getServicearea() {
        return servicearea;
    }

    public void setServicearea(Double servicearea) {
        this.servicearea = servicearea;
    }

    public Double getLiftingCapacity() {
        return liftingCapacity;
    }

    public void setLiftingCapacity(Double liftingCapacity) {
        this.liftingCapacity = liftingCapacity;
    }

    public Double getCatchmentarea() {
        return catchmentarea;
    }

    public void setCatchmentarea(Double catchmentarea) {
        this.catchmentarea = catchmentarea;
    }

    public String getServiceregion() {
        return serviceregion;
    }

    public void setServiceregion(String serviceregion) {
        this.serviceregion = serviceregion;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}