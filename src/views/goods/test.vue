<template>

    <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="6">
            <el-form-item label="商品名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="商品编码">
                <el-input v-model="form.coding"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="商品分类">
                <el-select v-model="form.region" placeholder="请选择产品分类">
                    <el-option label="储存用品" value="shanghai"></el-option>
                    <el-option label="周转用品" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <span>更多查询条件</span>
            </el-form-item>
        </el-col>
    </el-form>

    <el-table
            :data="tableData" size="small"
            style="width: 100%" border fit highlight-current-row
            :default-sort = "{prop: 'date'}">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="宣传画廊">
                        <img class="gallery" v-for="pic in props.row.gallery" :key="pic" :src="pic">
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="产品描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                    <el-form-item label="标签" prop="tags">
                        <template slot-scope="scope" v-for="item in props.row.tags">
                            <el-tag :type="scope.row.tags.type">{{ item.text }}</el-tag>
                        </template>
                        <!--<span>{{ props.row.tips }}</span>-->
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="商品编码" prop="goods" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.goods.id }}</span>
                <img :src="scope.row.goods.imgUrl" width="40" alt="">
            </template>
        </el-table-column>
        <el-table-column label="终端商价格" prop="desc" align="center">
        </el-table-column>
        <el-table-column label="经销商价格" prop="desc" align="center">
        </el-table-column>
        <el-table-column label="详情" prop="details" align="center">
            <template slot-scope="scope">
                <el-dialog title="商品详情" :visible.sync="detailDialogVisible">
                    <div v-html="goodsDetail"></div>
                </el-dialog>
                <el-button type="primary" size="mini" @click="showDetails(scope.row.detail)">查看</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="180" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "test",
        data(){
            return {
                form: {
                    name: '',
                    coding: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    tabPosition: 'top',
                    desc: ''
                },
                tableData: [{
                    imgUrl: '',
                    goods: {
                        id: '2311',
                        imgUrl: '',
                    },
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    date: '2016-05-01',
                    tags: '',
                    gallery: ''
                }, {
                    goods: {
                        id: '2311',
                        imgUrl: 'http://welshine.com/uploadfile/2018/0226/20180226023107584.png',
                    },
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    gallery: '',
                    tags: '',
                    date: '2016-05-04'
                }, {
                    goods: {
                        id: '2311',
                        imgUrl: '',
                    },
                    imgUrl: '',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    gallery: '',
                    tags: '',
                    date: '2016-05-01'
                }, {
                    goods: {
                        id: '2311',
                        imgUrl: '',
                    },
                    imgUrl: '',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    gallery: '',
                    tags: '',
                    date: '2016-05-02'
                }]
            }
        }
    }
</script>

<style scoped>

</style>