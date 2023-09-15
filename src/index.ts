import type { App, Plugin } from 'vue';
import FR from './FR.vue';
import './index.less';

FR.install = (app: App): App => {
  app.component(FR.name, FR);
  return app;
};

export default FR as typeof FR & Plugin;
