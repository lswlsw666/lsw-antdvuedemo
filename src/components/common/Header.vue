<template>
    <a-layout id="components-layout-demo-top-side">
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :defaultSelectedKeys="['2']"
                    :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">首页</a-menu-item>
                <a-menu-item key="2">资源合作</a-menu-item>
                <a-menu-item key="3">个人中心</a-menu-item>
            </a-menu>
        </a-layout-header>
    </a-layout>
</template>
<style>
    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: rgba(255,255,255,.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
