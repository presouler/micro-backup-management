<template>
  <div>
    <el-form :model="user">
      <el-form-item label="名字">
        <el-input v-model="user.name">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="user.sex" label="1">男</el-radio>
        <el-radio v-model="user.sex" label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="user.bio"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onSubmit">提交</el-button>
        <el-button type='info' @click="onInitial">重制</el-button>
        <el-button type="primary" @click="toUsers">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
      },
    };
  },
  created() {
    this.onInitial();
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addUser', this.user).then(() => {
        this.$router.push({ name: 'Users' });
      }).catch();
    },
    onInitial() {
      this.user = { name: '', sex: '', bio: '' };
    },
    toUsers() {
      this.$router.push({ name: 'Users' });
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
