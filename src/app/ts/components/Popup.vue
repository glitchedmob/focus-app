<template lang="pug">
.popup
	h1(v-bind:class="{ focused: isFocused }") Focus
	toggle-switch(v-model="isFocused")
	#bottom-buttons
		button.btn.btn-danger#block-site Block Site
		a.btn.btn-primary#settings(href="" target="_blank") Settings

</template>

<script lang="ts">
import Vue from 'vue';
import ToggleSwitch from './ToggleSwitch.vue';

export default Vue.extend({
	data() {
		return {
			isFocused: false
		}
	},

	components: {
		ToggleSwitch
	}
});
</script>

<style lang="stylus" scoped>
.popup
	width 400px

h1
	text-align center
	margin 10px 0
	font-size 65px
	color transparent
	text-shadow 0 0 10px rgba(0,0,0,0.5)
	transition all 300ms ease-in-out
	
	&.focused
		color #333
		text-shadow none

#bottom-buttons
	margin 40px 0 0 0

#settings
	float right
</style>


