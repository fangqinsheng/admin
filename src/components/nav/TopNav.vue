<template>
    <el-row id="top-nav" >
        <el-col :span="10">
            <!--<li class="collapse-btn" v-model="isCollapse"><i class="iconfont">&#xe753;</i></li>-->
            <el-menu
                    :default-active=" defaultActiveIndex "
                    :router= "true" class="el-menu-demo" mode="horizontal"
                    background-color="#393d49" text-color="#fff"
                    active-text-color="#ffd04b" style="border: none;">
                <el-menu-item index="/">系统</el-menu-item>
                <el-menu-item index="/goods">商品</el-menu-item>
                <el-menu-item index="3" disabled>订单</el-menu-item>
                <el-menu-item index="4" disabled>会员</el-menu-item>
                <el-menu-item index="5" disabled>促销</el-menu-item>
                <el-menu-item index="6" disabled>手机</el-menu-item>
                <el-menu-item index="7" disabled>公众号</el-menu-item>
                <el-menu-item index="8"><a href="https://fangqinsheng.github.io" target="_blank">文档</a></el-menu-item>
                <el-menu-item index="9"><a href="http://www.welshine.com" target="_blank">企业站</a></el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="14" class="right">
            <div class="span">
                <a href="javascript:void(0)" class="nav-btn">清除缓存</a>
                <a href="javascript:void(0)" class="nav-btn">便签</a>
            </div>
            <div class="user-switch span">
                <img src="../../assets/logo.jpg" alt="">
                <span>方钦昇</span>
                <div class="switch-box">
                    <ul class="switch-items">
                        <li><i></i>个人资料</li>
                        <li><i></i>个人资料</li>
                        <li><i></i>退出登录</li>
                    </ul>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "TopNav",
    data(){
        return {
            defaultActiveIndex: '/',
            isScroll: false,
            isCollapse: true,
            LeftNavWidth: 200
        }

    },
    created() {
       this.fetchNavData();
       // this.handleSelect();
    },
    methods: {
        // handleSelect(index){
        //     this.defaultActiveIndex = index;
        //     console.log(this.defaultActiveIndex);
        // },
        fetchNavData () {
            var cur_path = this.$route.path,
                routers = this.$router.options.routes,
                nav_name = "goods";
            for(var i =0;i<routers.length;i++) {
                var children = routers[i].children;
                if(children){
                    for(var j=0;j<children.length;j++){
                        if(children[j].path === cur_path){
                            nav_name = routers[i].name;
                            break;
                        }
                    }
                }
            }
            this.$store.state.leftNavState = nav_name;
            // console.log(this.$store.state.leftNavState);
        }
    },
    watch: {
        '$route': function (to) {
            // console.info("to.path:" + to.path);
            this.fetchNavData();
        }
    }
}
</script>

<style scoped lang="scss">
.right {
    line-height: 60px;
    color: #fff;
    /*float: right;*/
    text-align: right;
}
.right a {
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
}
.collapse-btn {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
    color: #fff;
}
#top-nav {
    background: #393d49;
    padding: 0 20px;
}
.span {
    display: inline-block;
}
.user-switch {
    position: relative;
    padding: 0 10px;
    min-width: 150px;
    img {
        padding: 0 12px;
        vertical-align: middle;
        width: 34px;
        border-radius: 50%;
    }
    span {
        font-family:"iconfont" !important;
        font-size: 14px;
        cursor: pointer;
    }
    span:after {
        padding: 0 10px;
        content: '\e603';
    }
    .switch-box {
        display: none;
        position: absolute;
        background: #fff;
        width: 100%;
        li {
            padding-left: 30px;
            color: #333;
            font-size: 14px;
            cursor: pointer;
        }
    }
}
</style>