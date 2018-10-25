}<template>
    <div id="home">
        <LeftNav class="LeftNav" />
        <div id="main">
            <TopNav/>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import LeftNav from './nav/LeftNav.vue'
import TopNav from './nav/TopNav.vue'

export default {
    name: "Layout",
    components: {
        TopNav,
        LeftNav
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    #home {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .LeftNav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
    #main {
        position: absolute;
        min-width: 600px;
        overflow-x: scroll;
        left: 200px;
        bottom: 0;
        right: 0;
        top: 0;
        /*overflow: auto;*/
        height: 100%;
        background: #fff;
    }
    .TopNav {
        height: 60px;
        background: #e3e3e3;
    }
    .container {
        /*min-width: 1200px;*/
        /*height: 100%;*/
        /*min-height: 800px;*/
        /*margin: 20px;*/
        /*padding: 20px;*/
        /*overflow: hidden;*/
        /*background: #fff;*/
    }
</style>