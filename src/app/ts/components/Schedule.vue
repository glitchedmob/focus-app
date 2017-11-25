<template lang="pug">
.container
	options-nav
	.day-slider
		p.left.arrow(@click="previousDay()") &lsaquo;
		h2 {{ day }}
		p.right.arrow(@click="nextDay()") &rsaquo;
	.add-time
		input(type="text" v-model="start")
		input(type="text" v-model="end" @keyup.enter="addTime()")
		button.btn.btn-primary.btn-circle(@click="addTime()")
			span.plus &plus;
	schedule-time(v-for="(time, index) of schedule[day.toLowerCase()]" :key="index" :time="time" @delete="removeTime(time)")
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';
import ScheduleTime from './ScheduleTime.vue';

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

			start: '',
			end: '',

			schedule: {
				sunday: [
					{ start: '10:00 pm', end: '10:10 pm' },
					{ start: '10:00 pm', end: '10:10 pm' }
				],
				monday: [
					{ start: '10:00 pm', end: '10:10 pm' }
				],
				tuesday: [],
				wednesday: [],
				thursday: [
					{ start: '10:00 pm', end: '10:10 pm' }
				],
				friday: [
					{ start: '10:00 pm', end: '10:10 pm' }
				],
				saturday: []
			}
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
		},

		removeTime(time: Object) {
			const timeIndex = (this.schedule as any)[this.day.toLowerCase()].indexOf(time);

			if(timeIndex > -1) {
				(this.schedule as any)[this.day.toLowerCase()].splice(timeIndex, 1);
			}
		},

		addTime() {
			if(this.start != '' && this.end != '') {
				(this.schedule as any)[this.day.toLowerCase()].unshift({
					start: this.start,
					end: this.end
				})
			}
		}
	},

	components: {
		'options-nav': Nav,
		ScheduleTime
	}
});
</script>

<style lang="stylus" scoped>
.day-slider
	width 400px
	margin 0 auto 40px auto
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

.add-time
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


