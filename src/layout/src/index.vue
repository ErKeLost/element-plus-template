<template>
  <drawer />
  <div>
    <el-container class="main-content">
      <el-header
        v-if="settingStore.headerSetting.showHeader"
        :height="`${getHeaderSetting.height}px`"
        :style="{ marginLeft: settingStore.menuSetting.fixed ? `${getSideSetting.width}px` : '' }"
        :class="[
          settingStore.headerSetting.fixed ? ['header-fixed'] : '',
          settingStore.menuSetting.fixed ? ['menu-margin'] : ''
        ]"
      >
        <div style="color: red">Headesr</div>
      </el-header>
      <el-container
        :class="settingStore.headerSetting.fixed ? ['page-content'] : ''"
        :style="[
          settingStore.headerSetting.fixed && settingStore.headerSetting.showHeader
            ? { marginTop: `${getHeaderSetting.height}px` }
            : ''
        ]"
      >
        <el-aside
          v-if="settingStore.sideSetting.showSide"
          :class="[
            'side-setting-class',
            settingStore.menuSetting.fixed ? 'aside-fixed' : '',
            settingStore.menuSetting.headerFixed ? 'aside-headerFixed' : ''
          ]"
          :style="[
            settingStore.menuSetting.headerFixed ? { top: `${getHeaderSetting.height}px` } : ''
          ]"
          :width="`${getSideSetting.width}px`"
        >
          <div style="width: 100%; height: 500px; background-color: #bfa" />
        </el-aside>
        <el-container class="[settingStore.sideSetting.showSide ? 'full-container' : '']">
          <el-main
            :class="[
              settingStore.menuSetting.fixed ? ['menu-margin'] : '',
              settingStore.menuSetting.headerFixed ? ['menu-margin'] : ''
            ]"
            :style="{
              marginLeft:
                settingStore.menuSetting.headerFixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : '',
              marginBottom:
                settingStore.footerSetting.fixed && settingStore.footerSetting.showFooter
                  ? `${getFooterSetting.height}px`
                  : ''
            }"
          >
            <div style="background: #eab">
              <i-ep-add-location />
              <i-ep-aim />
              <i-ep-picture-rounded color="red" font-size="30px" />
              <div v-loading="{ text: 'I LOVE YOU 我是不一样的版本...' }" style="height: 500px">
                Loading Area
              </div>
              <div v-loading="{ text: 'erkelost adny...' }" style="height: 500px">Loading Area</div>
              <div style="height: 1500px">
                <el-button @click="showMessage">测试elmessage</el-button>
              </div>
              <div style="height: 1500px">
                <el-button @click="showMessage">测试elmessage</el-button>
              </div>
              4153456456465
            </div>
          </el-main>
          <el-footer
            v-if="settingStore.footerSetting.showFooter"
            :class="[
              settingStore.footerSetting.fixed ? 'page-footer' : '',
              settingStore.menuSetting.fixed || settingStore.menuSetting.headerFixed
                ? ['menu-margin']
                : ''
            ]"
            :style="{
              height: `${getFooterSetting.height}px`,
              marginLeft:
                settingStore.menuSetting.fixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : '',
              marginLeft:
                settingStore.menuSetting.headerFixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : ''
            }"
          >
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useProjectSettingStore } from '~/store/modules/projectSetting'
import { useProjectSetting } from '~/composables/setting/useProjectSetting'
const settingStore = useProjectSettingStore()
const { getHeaderSetting, getFooterSetting, getSideSetting } = useProjectSetting()
console.log(getFooterSetting.value)
console.log(getFooterSetting)
const showMessage = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success'
  })
}
const height = ref(`${getFooterSetting.value.height}px`)
const menuContainerMargin = ref(`${getSideSetting.value.width}px`)
watch(
  () => getSideSetting.value,
  (newVal) => {
    console.log(newVal)
  }
)
console.log(getSideSetting.value.width)
</script>
<style scoped lang="scss">
.full-container {
  width: 100vw;
}
.side-setting-class {
  position: relative;
  z-index: 2001;
}
.menu-margin {
  // margin-left: 250px;
}
.page-content {
  // margin-top: 80px;
}
.aside-fixed {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
}
.aside-headerFixed {
  position: fixed;
  left: 0;
  height: 100%;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fba;
  z-index: 2001;
}
.page-footer {
  position: fixed;
  bottom: 0;
  background-color: #abf;
  width: 100%;
  z-index: 2001;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
  position: relative;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  padding: 0;
}
.el-footer {
  // height: v-bind(height);
}
</style>
