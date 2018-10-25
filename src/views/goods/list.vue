<template>
    <div class="box">
        <el-row>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部产品" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="出售产品" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="下架产品" name="third">角色管理</el-tab-pane>
                <!--<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
            </el-tabs>

            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            activeName: 'second',
            currentPage: 1
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style scoped>
</style>