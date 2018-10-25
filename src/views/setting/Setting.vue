<template>
    <el-row :gutter="20" class="panel-group">
        <el-col :span="6" class="panel-item">
            <el-card shadow="always">
                <div class="card-panel-icon-wrapper icon-money">
                    <svg-icon icon-class="message" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">货品数量</div>
                    <count-to class="card-panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6" class="panel-item">
            <el-card shadow="always">
                <div class="card-panel-icon-wrapper icon-money">
                    <svg-icon icon-class="message" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">货品数量</div>
                    <count-to class="card-panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6" class="panel-item">
            <el-card shadow="always">
                <div class="card-panel-icon-wrapper icon-money">
                    <svg-icon icon-class="message" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">货品数量</div>
                    <count-to class="card-panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6" class="panel-item">
            <el-card shadow="always">
                <div class="card-panel-icon-wrapper icon-money">
                    <svg-icon icon-class="message" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">货品数量</div>
                    <count-to class="card-panel-num" :startVal="0" :endVal="productTotal" :duration="3200"></count-to>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Setting"
    }
</script>

<style scoped>

</style>