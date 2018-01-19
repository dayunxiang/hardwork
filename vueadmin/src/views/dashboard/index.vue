<template>
  <div class="jcDeviceContainer" id="jcDeviceContainer">
    <div class="jcDeviceTop">监测设备</div>
    <el-row class="jcDeviceContent" id="jcDeviceContent">
      <el-col :span="9">
        <div class="grid-content bg-purple jcDeviceContentLeft" id='jcDeviceContentLeft'>
        <!-- 搜索 -->
          <div class="jcDeviceContentLeftOption">
            <div class="serachBox">
              <i class="el-icon-search"></i>
              <input type="text" placeholder="输入编号、安装地址、类型">
            </div>
            <div class="searchButton" @click="isShow = !isShow">
              高级搜索
              <i :class="{'el-icon-arrow-down': isShow, 'el-icon-arrow-up': !isShow }"></i>
            </div>
            <transition name="fade" mode="in-out">
              <div class="gjSearch" v-if="isShow">
                <p>高级搜索</p>
                  <el-select v-model="devicestyle" clearable placeholder="设备类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="warningstyle" clearable placeholder="报警类别">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
            </transition>
          </div>
          <!-- 列表 -->
          <div class="jcDeviceContentLeftList">
            <div class="deviceCount">
              <span>液位计</span>
              <span>共20台设备</span>
            </div>
            <ul class="deviceList" id="deviceList">
                <li>
                  <img src="../../assets/ico-ruler-b.png" alt="">
                  <span>北京海淀区安河桥北</span>
                  <span>0.2m</span>
                  <div class="icons">
                    <img src="../../assets/ico-gz-a.png" height="24" width="24" alt="">
                    <img src="../../assets/ico-un-link@3x.png" alt="">
                    <img src="../../assets/ico-ele@3x.png" alt="">
                  </div>
                </li>
                 <li>
                  <img src="../../assets/ico-ruler-b.png" alt="">
                  <span>北京海淀区安河桥北</span>
                  <span>0.2m</span>
                  <div class="icons">
                    <img src="../../assets/ico-gz-a.png" alt="">
                    <img src="../../assets/ico-un-link@3x.png" alt="">
                    <img src="../../assets/ico-ele@3x.png" alt="">
                  </div>
                </li>
                 <li>
                  <img src="../../assets/ico-ruler-b.png" alt="">
                  <span>北京海淀区安河桥北</span>
                  <span>0.2m</span>
                  <div class="icons">
                    <img src="../../assets/ico-gz-a.png" alt="">
                    <img src="../../assets/ico-un-link@3x.png" alt="">
                    <img src="../../assets/ico-ele@3x.png" alt="">
                  </div>
                </li>
                 <li>
                  <img src="../../assets/ico-ruler-b.png" alt="">
                  <span>北京海淀区安河桥北</span>
                  <span>0.2m</span>
                  <div class="icons">
                    <img src="../../assets/ico-gz-a.png" alt="">
                    <img src="../../assets/ico-un-link@3x.png" alt="">
                    <img src="../../assets/ico-ele@3x.png" alt="">
                  </div>
                </li>
            </ul>
          </div>
          <!-- 统计 -->
          <div class="deviceCount">
            共500条，1/10页
          </div>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg-purple-light jcDeviceContentRight" id="jcDeviceContentRight">
          <div class="jcDeviceContentRightTop">
            <ul class="describ clearfix">
              <li>
                <span>液位计：AO689967</span>
              </li>
              <li class="clearfix" @click="isshowMap = !isshowMap">
                <img src="../../assets/ico-gz-a.png" height="24" width="24" alt="">
                <span>北京海淀区安河桥北</span>
              </li>
            </ul>
            <div class="describTable">
            <div id="devicemap" class="devicemap" v-if='isshowMap'>

            </div>
             <table>
               <tr>
                 <th>最新数据时间</th>
                 <th>液位（m）</th>
                 <th>电量</th>
                 <th>通讯状态</th>
               </tr>
               <tr v-for="item in tableData">
                 <td>{{item.date}}</td>
                 <td>{{item.name}}</td>
                 <td>{{item.address}}</td>
                 <td>{{item.link}}</td>
               </tr>
             </table>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      tableData: [{
        date: '2018.01.01 00:00:00',
        name: '0',
        address: '90%',
        link: '正常'
      }],
      devicestyle: '',
      warningstyle: '',
      isShow: false,
      screenHeight: document.documentElement.clientHeight - 50,
      isshowMap: false
    }
  },
  mounted() {
    document.getElementById('jcDeviceContainer').style.height = this.screenHeight + 'px'
    document.getElementById('jcDeviceContent').style.height = this.screenHeight - 70 + 'px'
    document.getElementById('jcDeviceContentLeft').style.height = this.screenHeight - 70 + 'px'
    document.getElementById('jcDeviceContentRight').style.height = this.screenHeight - 70 + 'px'
    window.onresize = () => {
      return (() => {
        this.screenHeight = document.documentElement.clientHeight
        console.log(this.screenHeight)
      })()
    }
  },
  watch: {
    screenHeight(val) {
      this.screenHeight = val
      document.getElementById('jcDeviceContainer').style.height = this.screenHeight + 'px'
      document.getElementById('jcDeviceContent').style.height = this.screenHeight - 70 + 'px'
      document.getElementById('jcDeviceContentLeft').style.height = this.screenHeight - 70 + 'px'
      document.getElementById('jcDeviceContentRight').style.height = this.screenHeight - 70 + 'px'
    }
  },
  methods: {
    // initDeviceMap: function () {
    //   //初始化地图，默认地图为在线高德地图
    //   var rmap = new RMap.Map('devicemap');
    //   //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
    //   rmap.centerZoom(116.390985, 39.906358, 12);
    // }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'index.scss'
</style>
