<template lang="pug">
.container
	options-nav
	.day-slider
		p.left.arrow(@click="previousDay()") &lsaquo;
		h2 {{ day }}
		p.right.arrow(@click="nextDay()") &rsaquo;
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';

export default Vue.extend({

	data() {
		return {
			day: 'Sunday',
			week: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			],
		}
	},

	methods: {
		nextDay() {
			const dayIndex = this.week.indexOf(this.day);

			if(dayIndex === 6) {
				this.day = this.week[0]
			} else {
				this.day = this.week[dayIndex + 1];
			}

		},

		previousDay() {
			const dayIndex = this.week.indexOf(this.day);

			if(dayIndex === 0) {
				this.day = this.week[6]
			} else {
				this.day = this.week[dayIndex - 1];
			}
		}
	},

	components: {
		'options-nav': Nav
	}
});
</script>

<style lang="stylus" scoped>
.day-slider
	width 400px
	margin 0 auto
	display flex
	align-items center
	justify-content center

	h2
		text-align center
		flex-grow 1
		font-size 25px
		margin 15px 0 0 0

.arrow
	flex-grow 0
	font-size 100px
	line-height 50px
	margin 0
	color #BDBDBD
	user-select none

	&:hover
	&:focus
		cursor pointer
</style>


