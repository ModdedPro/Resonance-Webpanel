import Vue, { VNode } from "vue";

interface AppSettings {
  websocket: {
    port: string;
    host: string;
  };
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
declare global {
  interface Window {
    __env: typeof AppSettings;
  }
}
