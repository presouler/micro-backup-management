import Vue from 'vue';
import Vuex from 'vuex';
import { message } from 'element-ui';
import usersServers from '../servers/usersServers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user:
      {
        id: '',
        name: '',
        sex: '',
        bio: '',
      },
    total: 0,
  },
  mutations: {
    SET_ALLUSERS(state, payload) {
      state.users = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_TOTAL(state, payload) {
      state.total = payload;
    },
  },
  actions: {
    getAllUsers(context, query = {}) {
      usersServers.getAllUsers(query).then((res) => {
        context.commit('SET_TOTAL', parseInt(res.headers['x-total-count'], 10));
        context.commit('SET_ALLUSERS', res.data);
      });
    },
    getUser(context, id) {
      usersServers.getUser(id).then((res) => { context.commit('SET_USER', res.data); });
    },
    destroyUser(context, id) {
      usersServers.destroyUser(id).then(() => {
        message({
          type: 'success',
          message: '删除成功',
        });
      });
    },
    addUser(context, user) {
      usersServers.addUser(user).then(() => {
        message({
          type: 'success',
          message: '添加成功',
        });
      }).catch(() => {
        message({
          type: 'error',
          message: '添加失败',
        });
      });
    },
    editUser(context, user) {
      usersServers.editUser(user).then(() => {
        message({
          type: 'success',
          message: '修改成功',
        });
      }).catch(() => {
        message({
          type: 'error',
          message: '修改失败',
        });
      });
    },
  },
  modules: {
  },
});
