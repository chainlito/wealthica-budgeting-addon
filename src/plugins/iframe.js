import Vue from 'vue';
import iFrameResize from 'iframe-resizer/js/iframeResizer';

Vue.directive('resize', {
  inserted: (el) => {
    iFrameResize({ log: true }, `#${el.id}`);
  },
});
