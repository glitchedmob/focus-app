<template lang="pug">
.popup
	h1(v-bind:class="{ focused: isFocused }") Focus
	toggle-switch(
		v-if="isFocused != null"
		v-model="isFocused"
		:checked="isFocused"
		@input="updateIcon()")
	#bottom-buttons
		button.btn.btn-danger#block-site Block Site
		router-link.btn.btn-primary#settings(:to="{ name: 'sites' }" target="_blank") Settings

</template>

<script lang="ts">
import Vue from 'vue';
import ToggleSwitch from './ToggleSwitch.vue';
import { Storage, Icon } from '../extension';

export default Vue.extend({
	data() {
		return {
			isFocused: null 
		}
	},

	created() {
		Storage.get('focused')
		.catch(() => {
			(this.isFocused as null | boolean) = false;
			Storage.set('focused', this.isFocused)
		})
		.then(data => {
			this.isFocused = data;
			this.updateIcon();
		})
	},

 	methods: {
		updateIcon() {
			Icon.set(
				this.isFocused ?
				'../images/icons/focus-app38.png' :
				'../images/icons/focus-app-red38.png'
			);

			Storage.set('focused', this.isFocused)
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
	padding 10px

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


