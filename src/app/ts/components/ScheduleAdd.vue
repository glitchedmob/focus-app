<template lang="pug">
	.schedule-add
		input(type="text" v-model="time.start" @keyup.enter="submit()")
		input(type="text" v-model="time.end" @keyup.enter="submit()")
		button.btn.btn-primary.btn-circle(@click="submit()")
			span.plus &plus;
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

	data() {
		return{
			time: {
				start: '',
				end: ''
			}
		}
	},

	methods: {
		submit() {
			if(!(this.time.start === '' || this.time.end === '')) {
				console.log(this.time);
				this.$emit('submit', this.time)
				this.time.start = '';
				this.time.end = '';
			}
		}
	}
});
</script>

<style lang="stylus" scoped>
.schedule-add
	width 500px
	display flex
	align-items center
	margin 15px auto

	input
		flex 1 1 100%
		width 100%
		text-align center
		margin 0 10px
		border 2px solid #333
		font-size 20px
		padding 12px 0
	button
		flex 1 1 123px
</style>
