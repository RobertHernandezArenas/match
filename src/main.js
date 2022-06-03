import Vue from "vue";
import App from "./App.vue";
import "hls-player/dist/hls-player.css";
import hlsPlayer from "hls-player";

Vue.use(hlsPlayer);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

