<template>
 <div id="app">
    <hls-player :width="900" :height="500" :autoplay="true" :muted="false" :controls="true" ref="myPlayer" :source="src"/>
  </div>
</template>

<script>

export default {
  data() {
		return {
			src: 'http://51.161.115.48:8080/live/tito_robert/ZpAzL2e7FK/110.m3u8'
		};
	}
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
