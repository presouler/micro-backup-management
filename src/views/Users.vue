<template>
  <div>
    <h1>用户管理</h1>
  <el-table
    :data="users"
    style="width:860"
    border
    >
    <el-table-column
    label="姓名"
    prop="name"
    width="180"
    ></el-table-column>
    <el-table-column
    label="性别"
    width="100">
    <template #default="scope">{{ scope.row.sex | sex }}</template>
    </el-table-column>
    <el-table-column
    label="个性"
    prop="bio"
    width="280"></el-table-column>
    <el-table-column
    label="操作"
    width="280"
    >
    <template #default="scope">
      <el-button type="primary" @click="search(scope.row)" size="small">查看</el-button>
      <el-button type="success" @click="editUser(scope.row)" size="small">编辑</el-button>
      <el-button type="info" @click="deleteUser(scope.row)" size="small">删除</el-button>
    </template>
    </el-table-column>
    <el-table-column>
      <template>
        <el-button @click="addUser"> 添加</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @current-change="onCurrentChange"
    background
    layout="prev, pager, next"
    :current-page="page"
    :page-size="limit"
    :total="total">
</el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['users', 'total']),
    page() {
      return parseInt(this.$route.query.page, 10) || 1;
    },
    limit() {
      return parseInt(this.$route.query.limit, 10) || 3;
    },
    query() {
      return this.$route.query;
    },
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    editUser(row) {
      this.$router.push({ name: 'EditUser', params: { id: row.id, query: this.query } });
    },
    deleteUser(user) {
      this.$confirm(`删除用户:${user.name}信息？`, '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning',
      }).then(() => {
        this.$store.dispatch('destroyUser', user.id);
        this.getAllUsers();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除',
        });
      });
    },
    onCurrentChange(page) {
      this.$router.push({ name: 'Users', query: { page, limit: this.limit } });
    },
    search(row) {
      this.$router.push({ name: 'User', params: { id: row.id } });
    },
    getAllUsers() {
      this.$store.dispatch('getAllUsers', {
        _page: this.page,
        _limit: this.limit,
      });
    },
    addUser() {
      this.$router.push({ name: 'AddUser' });
    },
  },
};
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
