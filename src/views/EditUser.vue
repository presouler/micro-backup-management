<template>
  <div>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="user.name">
        </el-input></el-form-item>
      <el-form-item>
        <el-radio
        label="1" v-model="user.sex"
        >男</el-radio>
        <el-radio v-model="user.sex"
        label="2"
        >女</el-radio>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="user.bio"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="editUser">提交
          </el-button>
          <el-button type="primary">取消
            </el-button>
            </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    id: {
      type: [String, Number],
    },
    query: {
      type: Object,
    },
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch('getUser', this.id);
    },
    editUser() {
      this.$store.dispatch('editUser', this.user).then(() => {
        this.$router.push({ name: 'Users', query: this.query });
      });
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
