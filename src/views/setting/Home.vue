<template>
    <div class="container">
        <el-row class="panel-group" :gutter="20">
            <el-col :sm="12" :xs-="12" :md="12" :lg="6" class="panel-item">
                <el-card shadow="always" class="clearfloat">
                    <div class="panel-left-icon panel-blue">
                        <i class="iconfont">&#xe621;</i>
                    </div>
                    <div class="panel-right-desc">
                        <div class="panel-text">货品数量</div>
                        <count-to class="panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                    </div>
                </el-card>
            </el-col>
            <el-col :sm="12" :xs-="12" :md="12" :lg="6" class="panel-item">
                <el-card shadow="always" class="clearfloat">
                    <div class="panel-left-icon panel-blue">
                        <i class="iconfont">&#xe621;</i>
                    </div>
                    <div class="panel-right-desc">
                        <div class="panel-text">货品数量</div>
                        <count-to class="panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                    </div>
                </el-card>
            </el-col>
            <el-col :sm="12" :xs-="12" :md="12" :lg="6" class="panel-item">
                <el-card shadow="always" class="clearfloat">
                    <div class="panel-left-icon panel-blue">
                        <i class="iconfont">&#xe621;</i>
                    </div>
                    <div class="panel-right-desc">
                        <div class="panel-text">货品数量</div>
                        <count-to class="panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                    </div>
                </el-card>
            </el-col>
            <el-col :sm="12" :xs-="12" :md="12" :lg="6" class="panel-item">
                <el-card shadow="always" class="clearfloat">
                    <div class="panel-left-icon panel-blue">
                        <i class="iconfont">&#xe621;</i>
                    </div>
                    <div class="panel-right-desc">
                        <div class="panel-text">货品数量</div>
                        <count-to class="panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CountTo from 'vue-count-to'
    export default {
        name: "home",
        components: {
            CountTo
        },
        data(){
            return {
                userTotal: 20,
                goodsTotal: 20,
                productTotal: 10,
                orderTotal: 30
            }
        }
    }
</script>

<style scoped lang="scss">
.container  {
    padding: 20px;
}
.panel-group {
    .panel-item {
        /*padding: 0 10px;*/
        margin-bottom: 20px;
        .panel-left-icon{
            float: left;
            /*padding: 16px;*/
            /*margin: 14px 0 0 14px;*/
            border-radius: 6px;
            i {
                font-size: 70px;
            }
        }
        .panel-right-desc{
            float: right;
            margin: 16px;
            .panel-text{
                color: rgba(0,0,0,0.45);
                margin-bottom: 10px;
            }
            .panel-num {
                font-size: 20px;
            }
        }
    }
}
</style>