import { computed } from 'vue'
import { useProjectSettingStore } from '~/store/modules/projectSetting'

export function useProjectSetting() {
  const projectStore = useProjectSettingStore()

  const getNavMode = computed(() => projectStore.navMode)

  const getNavTheme = computed(() => projectStore.navTheme)

  const getIsMobile = computed(() => projectStore.isMobile)

  const getSideSetting = computed(() => projectStore.sideSetting)

  const getHeaderSetting = computed(() => projectStore.headerSetting)

  const getFooterSetting = computed(() => projectStore.footerSetting)

  const getMultiTabsSetting = computed(() => projectStore.multiTabsSetting)

  const getMenuSetting = computed(() => projectStore.menuSetting)

  const getCrumbsSetting = computed(() => projectStore.crumbsSetting)

  const getPermissionMode = computed(() => projectStore.permissionMode)

  const getShowFooter = computed(() => projectStore.showFooter)

  const getIsPageAnimate = computed(() => projectStore.isPageAnimate)

  const getPageAnimateType = computed(() => projectStore.pageAnimateType)

  return {
    getNavMode,
    getNavTheme,
    getIsMobile,
    getSideSetting,
    getHeaderSetting,
    getFooterSetting,
    getMultiTabsSetting,
    getMenuSetting,
    getCrumbsSetting,
    getPermissionMode,
    getShowFooter,
    getIsPageAnimate,
    getPageAnimateType
  }
}
