<template>
    <div class="">
        <!-- 进度条 -->
        <el-steps :active="active" simple>
            <el-step title="1.选择商品分类" icon="el-icon-edit"></el-step>
            <el-step title="2.填写商品信息" icon="el-icon-upload"></el-step>
            <el-step title="3.上传商品详情页" icon="el-icon-picture"></el-step>
        </el-steps>
        <!-- 进度条 -->
        <!--:class="{'selected' : index === catelogIndex }"-->
       <div class="select-box clearfloat" v-if="active === 1">
           <ul class="select-items">
               <li :class="{'selected' : categoryId === index}" v-for="(item,index) in cate"
                   @click="cateSelect(index)" :key="item.id">{{ item.name }}</li>
           </ul>
           <ul class="select-items" v-show="cateStatus">
               <li :class="{'selected' : listId === index}" v-for="(item,index) in list"
                   @click="listSelect(index)" :key="item.id">{{ item.name }}</li>
           </ul>
           <ul class="select-items" v-show="listStatus">
               <li :class="{'selected' : typeId === index}" v-for="(item,index) in type"
                   @click="typeSelect(index)" :key="item.id">{{ item.name }}</li>
           </ul>
           <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
               <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
               <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
               <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
               <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
           <!--</el-breadcrumb>-->
       </div>
        <div class="select-box clearfloat" v-if="active === 2">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="select-box clearfloat" v-if="active === 3">
            <p>3</p>
        </div>
        <el-row class="select-btn">
            <el-button style="margin-top: 12px;" @click="prev" v-if="active == 2 || active ==3">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next" v-if="active == 0 || active == 1 || active == 2">下一步</el-button>
            <el-button style="margin-top: 12px;" @click="jumpTo('list')" v-if="active == 3">提交</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "add",
    data(){
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            active: 1,
            categoryId: -1,
            listId: -1,
            typeId: -1,
            step: 0,
            // cateStatus: false,
            listStatus: false,
            cate: [
                { name: '储存用品', index: 0 },
                { name: '展示用品', index: 1 },
                { name: '周转用品', index: 2 }
            ],
            list: [
                { name: '保鲜盒', index: 0 },
                { name: '保鲜盒', index: 1 },
                { name: '保鲜盒', index: 2 },
                { name: '保鲜盒', index: 3 }
            ],
            type: [
                { name: '加强保鲜盒' },
                { name: '普通保鲜盒' },
                { name: '带扣保鲜盒' }
            ],
        }
    },
    methods: {
        jumpTo(url){
            this.$router.push(url);
        },
        next() {
            if (this.active++ > 2) this.active = 0;
            console.log(this.active)
        },
        prev() {
            if (this.active-- < 0) this.active = 0;
            console.log(this.active)
        },
        cateSelect: function(index){
            this.categoryId = index;
            if (this.listStatus){
                this.listStatus = false;
                this.cateStatus = true;
                this.listId = -1;
            }else{
                this.cateStatus = true;
            }
            console.log(index);
        },
        listSelect: function(index){
            this.listId = index;
            this.listStatus = true;
            // if (!this.listStatus){
            //     this.listStatus = true;
            // }else{
            //     this.listStatus = false;
            // }
            console.log(index);
        },
        typeSelect: function(index){
            this.typeId = index;
            this.listStatus = true;
            console.log(index);
        }

    }
}
</script>

<style scoped lang="scss">
.container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.select-tabs-box {
    width: 900px;
    margin: 0 auto;
}
.select-tabs {
    margin: 80px 0;

}
.select-tab.selected {
    background: #ec6941;
}
.select-tab {
    color: #fff;
    background: #b5b5b5;
    line-height: 44px;
    text-align: center;
}
.select-box {
    background: #eff8ff;
    padding: 0 20px;
    /*margin: 100px 120px;*/
    min-width: 1160px;
}
.select-items {
    float: left;
    padding: 36px 18px;
    margin: 50px 30px;
    width: (1160-294)/3 + px;
    min-height: 450px;
    background: #fff;
    border: 1px solid #b1d2ff;

}
.select-items li {
    padding: 0 20px;
    line-height: 30px;
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 15px;
    border: 1px solid #fff;
    cursor: pointer;
}
.select-items li:hover, .select-items li.selected{
    border: 1px solid #b1d2ff;
    background: #eff8ff;
}
.select-address {

}
.select-btn {
    text-align: center;
}
</style>