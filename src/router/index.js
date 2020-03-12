import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import User from '../views/User.vue';
import AddUser from '../views/AddUser.vue';
import EditUser from '../views/EditUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/users/create',
    name: 'AddUser',
    component: AddUser,
  },
  {
    path: '/users/:id/edit',
    name: 'EditUser',
    component: EditUser,
    props: true,
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
