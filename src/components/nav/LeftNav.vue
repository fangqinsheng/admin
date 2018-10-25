<template>
   <div id="left-nav">
       <h1 id="admin-title">welshine商城系统<span>Λ1.0</span></h1>
       <div class="user">
           <div class="user-img">
               <img src="../../assets/logo.jpg" alt="头像">
           </div>
           <p class="user-describe">您好！{{ userName }}，欢迎登陆</p>
           <form action="">
               <div class="input-div">
                   <input type="text" placeholder="标示盒" onfocus="this.placeholder = ''" onblur="this.placeholder= '标示盒'"/>
                   <button onclick="">
                       <span class="el-icon-search"></span>
                   </button>
               </div>
           </form>
       </div>
       <div class="left-nav">
            <el-menu router :unique-opened ="unicode" background-color="#393d49" text-color="#ffffff" active-text-color="#005abc"
                     v-for="issue in $router.options.routes" :key="issue.id">
              <template v-if="issue.name === $store.state.leftNavState">
                  <el-submenu v-for="(item, index) in issue.children" :key="item.id" v-if="!item.leaf"
                              :index="index+ ''" v-show="item.menuShow">
                      <template slot="title"><i class="el-icon-location"></i><span slot="title">{{ item.name }}</span></template>
                      <el-menu-item v-for="term in item.children" :key="term.id" :index="term.path" v-if="term.menuShow">
                          <i class="el-icon-location"></i><span slot="title">{{  term.name  }}</span>
                      </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else-if="item.leaf" :index="item.path"
                                :class="$route.path === item.path ? 'is-active ' : ''">
                      <template slot="title"><i class="el-icon-location"></i><span slot="title">{{ item.name }}</span></template>
                  </el-menu-item>
              </template>
           </el-menu>
       </div>
   </div>
</template>
<script>
export default {
    name: 'LeftNav',
    data() {
        return {
            isCollapse: true,
            userName: '方帅',
            unicode: true,
            active: '',
        };
    },

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    watch: {
        '$route': function (to) {
            // console.info("to.path:" + to.path);
        }
    }
}
</script>

<style scoped lang="scss">
.el-menu {
    border: none;
}
#left-nav {
    height: 100%;
    width: 200px;
    background: #393d49;
}
#admin-title {
    text-align: center;
    background: #333;
    font: 16px 'jdFontAwesome';
    color: #fff;
    line-height: 60px;
    span {
        font-size: 10px;
        vertical-align: top;
    }
}
.user{
    margin-bottom: 20px;
    .user-img{
        padding: 20px 66px;
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
    .user-describe {
        font-size: 14px;
        color: #fff;
        text-align: center;
    }
}
.user-describe {
    margin-bottom: 8px;
    font-size: 14px;
}
form {
    padding: 0 10px;
    .input-div {
        position: relative;
        background: #fff;
        padding: 0 10px;
        height: 24px;
        overflow: hidden;
    }
    input {
        position: absolute;
        line-height: 24px;
        outline: none;
    }
    button {
        position: absolute;
        right: 8px;
        top: 50%;
        margin-top: -8px;
        background: none;
        span {
            background: none;
            font-size: 20px;
            cursor: pointer;
        }
    }
}
</style>