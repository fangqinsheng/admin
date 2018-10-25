<template>
    <el-table :data="tableData5" style="width: 100%" align="center">
        <el-table-column type="expand" width="100">
            <template slot-scope="props">
                <el-table :data="props.row.child" :show-header="false">
                    <el-table-column type="expand" width="100">
                        <template slot-scope="props">
                            <el-table :data="props.row.child" :show-header="false">
                                <el-table-column width="100"></el-table-column>
                                <el-table-column prop="name"></el-table-column>
                                <el-table-column prop="id"></el-table-column>
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <el-alert :title="scope.row.display === 'block' ? '显示' : '隐藏'"
                                                  :closable="false"
                                                  :type="scope.row.display === 'block' ? 'success' : 'primary'"
                                                  center show-icon>
                                        </el-alert>
                                    </template>
                                </el-table-column>
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <el-button size="mini" type="success"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                        <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">新增下级</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name"></el-table-column>
                    <el-table-column prop="id"></el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-alert :title="scope.row.display === 'block' ? '显示' : '隐藏'"
                                      :closable="false"
                                      :type="scope.row.display === 'block' ? 'success' : 'primary'"
                                      center show-icon>
                            </el-alert>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button size="mini" type="success"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">新增下级</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </el-table-column>
        <el-table-column label="分组名称" prop="name" >
        </el-table-column>
        <el-table-column label="排序" prop="id" width="160">
        </el-table-column>
        <el-table-column prop="tag" label="状态" width="140">
            <template slot-scope="scope">
                <el-alert :title="scope.row.display === 'block' ? '显示' : '隐藏'"
                          :closable="false"
                          :type="scope.row.display === 'block' ? 'success' : 'primary'"
                        center show-icon>
                </el-alert>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="success"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">新增下级</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import '@/mock/mock.js'
// import treeToArray from "./eval";

export default {
    name: "TreeTable",
    data() {
        return {
            tableData5: [{
                id: '1',
                name: '储存用品',
                display: 'block',
                child: [{
                    id: '11',
                    name: '储存用品',
                    display: 'block',
                    child: [{
                        id: '111',
                        name: '储存用品',
                        display: 'block',
                    }]
                }]
            },{
                id: '1',
                name: '储存用品',
                display: 'block',
                child: [{
                    id: '11',
                    name: '储存用品',
                    display: 'block',
                    child: [{
                        id: '111',
                        name: '储存用品',
                        display: 'block',
                    }]
                }]
            },{
                id: '1',
                name: '储存用品',
                display: 'block',
                child: [{
                    id: '11',
                    name: '储存用品',
                    display: 'block',
                    child: [{
                        id: '111',
                        name: '储存用品',
                        display: 'block',
                    }]
                }]
            }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.el-table td, .el-table th.is-leaf {
    border: none;
}
.el-table-column {
    border: none;
}
</style>
