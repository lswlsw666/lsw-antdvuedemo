import Vue from 'vue/dist/vue.js'
// import Button from 'ant-design-vue/lib/button'
// import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Menu } from 'ant-design-vue';
import { Breadcrumb } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
// import  Router from 'vue-router'


import App from './App'
Vue.use(Button);
Vue.use(Layout);
Vue.use(Breadcrumb);
Vue.use(Menu);
Vue.use(Icon);
// Vue.use(Router);
// Vue.component(Button.name, Button)
// Vue.component(Layout.name, Layout)
// Vue.component(Layout.Header, Layout)
// Vue.component(Layout.Content, Layout.content)
// Vue.component(Menu.name, Menu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
