<template>
  <ConfigProvider v-bind="configProvider" :locale="locale === 'en' ? enUS : zhCN">
    <FRCore :locale="locale" :widgets="{ ...defaultWidgets, ...widgets }" v-bind="nextProps.rest" />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
import enUS from 'ant-design-vue/lib/locale/en_US';
// import { FRCore } from './core';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { FormCtx } from './hooks/index';
import { widgets as defaultWidgets } from './widgets/antd';
import { FRProps } from './types';

const props = withDefaults(defineProps<FRProps>(), {
  schema: () => ({}),
  disabled: false,
  readOnly: false,
  labelWidth: '110px',
  locale: 'cn',
  removeHiddenData: false,
  allCollapsed: false,
  requiredMark: true,
});

watch(
  () => props.locale,
  newLocale => {
    dayjs.locale(newLocale);
  }
);
FormCtx({});
const nextProps = computed(() => {
  const { widgets, configProvider, locale, ...rest } = props;
  return {
    widgets,
    configProvider,
    locale,
    rest,
  };
});
</script>
