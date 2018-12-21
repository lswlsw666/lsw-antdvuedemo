<template>
    <a-layout-content style="padding: 1px 50px;background: #f0f2f5">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout style="padding: 24px 0; background: #fff">
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                        mode="inline"
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"
                        style="height: 100%"
                        :openKeys="openKeys"
                        @openChange="onOpenChange"
                >
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />用户中心</span>
                        <a-menu-item key="1">我发布的信息</a-menu-item>
                        <a-menu-item key="2">我收藏的信息</a-menu-item>
                        <a-menu-item key="3">我的站内通知</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="laptop" />广告系统</span>
                        <a-menu-item key="5">产品购买</a-menu-item>
                        <a-menu-item key="6">站外推广</a-menu-item>
                        <a-menu-item key="7">标王推广</a-menu-item>
                        <a-menu-item key="8">精品官网</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="notification" />账户管理</span>
                        <a-menu-item key="9">我的资料</a-menu-item>
                        <a-menu-item key="10">我的认证</a-menu-item>
                        <a-menu-item key="11">账户明细</a-menu-item>
                        <a-menu-item key="12">我的反馈</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <LayoutContent/>
        </a-layout>
    </a-layout-content>
</template>
<script>
    import LayoutContent from './LayoutContent.vue';
    export default {
        name: 'Index',
        components:{
            LayoutContent
        },
        props: {
            msg: String
        },
        data () {
            return {
                rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
                openKeys: ['sub1'],
            }
        },
        methods: {
            onOpenChange (openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : []
                }
            },
        },
    }
</script>