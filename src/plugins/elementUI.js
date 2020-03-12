import Vue from 'vue';
import {
  Button, Table, TableColumn, Pagination, MessageBox, Message, Form, FormItem, Input, Radio,
} from 'element-ui';


Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(Radio);
Vue.use(Input);
Vue.use(FormItem);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
