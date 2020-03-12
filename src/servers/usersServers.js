import request from '../utils/request';

export default {
  getAllUsers(query = {}) {
    return request({
      method: 'get',
      url: '/users',
      params: query,
    });
  },
  getUser(id) {
    return request({
      method: 'get',
      url: `/users/${id}`,
    });
  },
  destroyUser(id) {
    return request({
      method: 'delete',
      url: `/users/${id}`,
    });
  },
  addUser(user) {
    return request({
      method: 'post',
      url: '/users',
      data: user,
    });
  },
  editUser(user) {
    return request({
      method: 'PUT',
      url: `/users/${user.id}`,
      data: user,
    });
  },
};
