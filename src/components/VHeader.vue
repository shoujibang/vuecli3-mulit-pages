<template>
    <div class="header-box header-box-fixed"> 
        <el-row>
            <el-col :span="4" :xs="4" :sm="4" :md="4"  :xl="4">
                <div class="logo">
                    <div class="logo-box">
                        <img src="@/assets/images/logo.png" />
                    </div>
                    <span>{{$t('home.logo')}}</span>
                </div>
            </el-col>
            <el-col :span="20" :xs="20" :sm="20" :md="20"  :xl="20">
                <div class="nav-box">
                    <ul>
                        <!-- <li @mouseover='menuUp(index)'
                            @mouseout="menuDown(index)" -->
                        <li @click="pushRoute($event,item.url)" class="first-li" v-for="(item,index) in navData" :key="index">
                            <span >{{item.name}}</span>
                                <ul  v-if="item.children" class="sub-menu">
                                    <li v-for="(val,index) in item.children" :key="index">
                                        <div class="title-box">{{val.title}}</div>
                                        <div 
                                        v-for="(its,index) in val.subMenu"
                                        :key="index"
                                        @click="pushRoute($event,its.url)"                                         
                                        >
                                            {{its.name}}
                                        </div>
                                    </li>
                                </ul>
                            
                        </li>
                    </ul>
                    
                </div>
            </el-col>
            
        </el-row>
        <div class="nav-box-right">
            <div class="dom" v-if="userName.length > 0">
                {{userName}}
                <span @click="exitFn">退出</span>
            </div>
            <div class="dom" v-else>
                <router-link :to="{path:'/user'}">{{$t('home.login')}}</router-link>
                <router-link to="/user/regiset">{{$t('home.regist')}}</router-link>
                <!-- <lang-switcher /> -->
            <check-language></check-language>
            </div>
        </div>
        <slot></slot>
    </div> 
</template>
<script>
//引入vuex
import {mapState, mapMutations} from 'vuex'; 
//语言切换组件
import checkLanguage from 'components/checkLanguage' 
export default {
    name:"VHeader",
    created() {
    //   this.aa();  
    },
    data() {
        return {
            isMenu:false,
            userName:"",
            navData:[
                {
                    name:"首页",
                    url:"/"
                },
                {
                    name:"控制台",
                    url:"/admin"
                },
                {
                    name:"猫眼",
                    url:"/maoyan"
                },
                {
                    name:"产品",
                    url:"",
                    children:[
                        {
                            title:"技术服务",
                            subMenu:[
                                {
                                    name:"白皮书",
                                    url:"/product" 
                                },
                                {
                                    name:"大数据",
                                    url:"" 
                                }
                            ]
                           
                        },
                        {
                            title:"应用服务",
                            subMenu:[
                                {
                                    name:"白皮书2",
                                    url:"" 
                                },
                                {
                                    name:"大数据2",
                                    url:"" 
                                }
                            ]
                           
                        }
                    ]
                },{
                    name:"解决方案",
                    url:"",
                    children:[
                        {
                            title:"解决服务",
                            subMenu:[
                                {
                                    name:"白皮书6",
                                    url:"" 
                                },
                                {
                                    name:"大数据6",
                                    url:"" 
                                }
                            ]
                           
                        },
                        {
                            title:"应用解决",
                            subMenu:[
                                {
                                    name:"白皮书3",
                                    url:"" 
                                },
                                {
                                    name:"大数据3",
                                    url:"" 
                                }
                            ]
                           
                        }
                    ]
                    
                },{
                    name:"案列分享",
                    url:"share"
                },{
                    name:"白皮书",
                    url:"/user"
                },{
                    name:"API",
                    url:"https://www.apiopen.top/api.html"
                }
                
                
                
            ]
        }
    },
    components:{
        checkLanguage
    },
    mounted() {
        // this.userName = this.$getCookie("username")
       
        
    },
    methods: {
        ...mapMutations([
            'noLoginStatus'
        ]),
         exitFn(){
            // this.$delCookie('username');
            // this.userName = "";
            // this.noLoginStatus()
            // this.$router.push("/")
        },
        pushRoute(e,url){
            if(!url) return;
            var reg =  /^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i
            console.log(url)
            if(reg.test(url)){
                window.open(url);
                return;
            }
            debugger;
            this.$router.push(url)
            // if(url.indexOf("admin") > 0){
            //     let routeData = this.$router.resolve({
            //         path: url,
            //         // query: {
            //             //     id: 1
            //         // }
            //     });
                
            //     window.open(routeData.href, '_blank');
            // }else{

            //     this.$router.push(url)
            // }
        },
        menuUp(index){
            this.isMenu = index;
        },
        menuDown(index){
            this.isMenu = index;
        },
        aa(){
            this.$axios.get("/api/getWangYiNews?page=10").then(res=>{
                if(res.statusText === "OK"){
                    res.data.result.forEach((item,index) =>{
                        })
                }
                        console.log(res);
            })
        }
    },
}
</script>
<style lang="less" scoped>
// @import "@/assets/stylus/_reset.scss";
    .header-box{
       display:flex;
       width: 100%;
       padding: 18px 45px;
        position: relative;
       border-bottom: 1px solid #808080;
       position: relative;
       z-index: 99;
    //    background: red;
    }
   
    .header-box .logo{
        width: 100%;
        font-size: 20px;
        display:flex;
        align-items: center;
        line-height: 36px;
        margin-right: 864px;
        .logo-box{
            width: 29px;
            height: 23px;
            margin-right: 12px;
        }
    }
    .header-box .nav-box{
        font-size: 14px;
    }
    .header-box .nav-box-right{
        font-size: 14px;
        position: absolute;
        right: 45px;
        .dom{
            display: flex;
            line-height:36px;
            // align-items: center;
            // margin-right: pxTorem(10px);
            a{
                margin-right: 10px;
            }
        }
        span{
            cursor: pointer;
        }
    }
   .header-box .nav-box ul{
       display:flex;
       align-items: center;
    }
    .header-box .nav-box ul .first-li{
        width: 100px;
        height: 36px;
        line-height:36px;
        text-align: center;
        font-size: 14px;
        white-space: nowrap;
        margin-right: 39px;
        position: relative;
        padding-bottom: 6px;
        cursor: pointer;
        
        &:hover{
            border-bottom:3px solid rgba(0,161,235,1);
        }
        &:hover .sub-menu{
            // border: 1px solid red;
            display: flex;
        }
        .sub-menu{
            width: 100%;
            position: fixed;
            // left: 21px;
            padding: 8px; 
            padding-top: 30px;  
            // border: 1px solid red;   
            display: none;
            li{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                position: relative;
                padding-left: 20px;
                margin-right: 20px;
                position: relative;
                align-items: flex-start;
                cursor: pointer;
                line-height: 35px;
                .title-box{
                    margin-bottom:20px;                                        
                    &:before{
                        width:4px;
                        height:12px;
                        background:rgba(0,161,235,1);
                        display: block;                    
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 13px;
                    }
                    &:after{
                        width:100%;
                        // height:2px;
                        // background:#fff;
                        // display: block;                    
                        // content: '';
                        // position: absolute;
                        // bottom: -6px;
                        // left: 0;
                    }
                } 
                 
            }
        }
    }
    //吸顶样式
     .header-box-fixed{
       border-bottom: none;
       color: #fff; 
    }
</style> 