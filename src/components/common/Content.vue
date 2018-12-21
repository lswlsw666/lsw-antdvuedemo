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
                        <a-menu-item key="1" :navs="navs" @click="add">我发布的信息</a-menu-item>
                        <a-menu-item key="2" :navs="navs" @click="add">我收藏的信息</a-menu-item>
                        <a-menu-item key="3" :navs="navs" @click="add">我的站内通知</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="laptop" />广告系统</span>
                        <a-menu-item key="4" :navs="navs" @click="add">产品购买</a-menu-item>
                        <a-menu-item key="5" :navs="navs" @click="add">站外推广</a-menu-item>
                        <a-menu-item key="6" :navs="navs" @click="add">标王推广</a-menu-item>
                        <a-menu-item key="7" :navs="navs" @click="add">精品官网</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="notification" />账户管理</span>
                        <a-menu-item key="8" :navs="navs" @click="add">我的资料</a-menu-item>
                        <a-menu-item key="9" :navs="navs" @click="add">我的认证</a-menu-item>
                        <a-menu-item key="10" :navs="navs" @click="add">账户明细</a-menu-item>
                        <a-menu-item key="11" :navs="navs" @click="add">我的反馈</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ padding: '0 6px', minHeight: '730px'}">
                <div>
                    <!--<div :style="{ marginBottom: '16px' }">-->
                        <!--<a-button @click="add">ADD</a-button>-->
                    <!--</div>-->
                    <a-tabs
                            hideAdd
                            v-model="activeKey"
                            type="editable-card"
                            @edit="onEdit"
                    >
                        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
                            {{pane.content}}
                        </a-tab-pane>
                    </a-tabs>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout-content>
</template>
<script>
    // import LayoutContent from './LayoutContent.vue';
    // import TabsContent from './TabsContent.vue';
    export default {
        name: 'Content',
        components:{
            // LayoutContent,
            // 'tab-content':TabsContent
        },
        props: {
            msg: String
        },
        data () {
            const panes = [
                { title: '首页', content: 'Content of Tab 1', key: '0' },
            ];
            const navsTitle = [
                {1:'我发布的信息',2:'我收藏的信息',3:'我的站内通知',4:'产品购买',5:'站外推广',6:'标王推广',7:'精品官网',8:'我的资料',9:'我的认证',10:'账户明细',11:'我的反馈'}
            ];
            return {
                rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
                openKeys: ['sub1'],
                activeKey: panes[0].key,
                panes,
                newTabIndex: 0,
                navs: {
                    'sub1': ['1', '2', '3'], 'sub2': ['5','6','7','8'], 'sub3': ['9','10','11','12'],
                },
                navsTitle,

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
            callback (key) {
                console.log(key)
            },
            onEdit (targetKey, action) {
                this[action](targetKey)
            },
            add (navs) {
                const panes = this.panes
                // console.log(panes);return
                // const activeKey = `newTab${this.newTabIndex++}`
                const activeKey = this.navsTitle[0][navs.key]
                var a = {title:this.navsTitle[0][navs.key],content:this.navsTitle[0][navs.key] + '的内容',key:navs.key};
                panes.push(a);
                // panes.push({ title: `New Tab ${activeKey}`, content: `Content of new Tab ${activeKey}`, key: activeKey })
                this.panes = panes
                this.activeKey = activeKey
            },
            remove (targetKey) {
                let activeKey = this.activeKey
                let lastIndex
                this.panes.forEach((pane, i) => {
                    if (pane.key === targetKey) {
                        lastIndex = i - 1
                    }
                })
                const panes = this.panes.filter(pane => pane.key !== targetKey)
                if (lastIndex >= 0 && activeKey === targetKey) {
                    activeKey = panes[lastIndex].key
                }
                this.panes = panes
                this.activeKey = activeKey
            },
            handleClick(navs){
                console.log(this.navsTitle[0][navs.key])
                console.log(navs.key)
            }
        },
    }
</script>