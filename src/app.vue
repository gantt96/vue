<template>
  <div class="app-container">
    <!-- 存放 header 区域 -->
    <mt-header fixed title="欢迎来到公众号"></mt-header>

    <!-- 存放 router-view 区域(组件切换区域) -->
	<transition>
    <router-view></router-view>
	</transition>

    <!-- 存放底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/file">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/manage">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
	</nav>
  </div>
</template>

<script>
export default {};
</script>
    
<style lang="scss">
    .app-container{
        padding-top: 40px;
		overflow-x: hidden;
    }
	html,body{
		background-color: #fff;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
	}
</style>
