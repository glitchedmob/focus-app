<template lang="pug">
.container
	options-nav
	.day-slider
		p.left.arrow(@click="previousDay()") &lsaquo;
		h2 {{ day }}
		p.right.arrow(@click="nextDay()") &rsaquo;
	schedule-add(@submit="addTime($event)")
	schedule-time(v-for="(time, index) of schedule[day.toLowerCase()]" :key="index" :time="time" @delete="removeTime(time)")
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';
import ScheduleTime from './ScheduleTime.vue';
import ScheduleAdd from './ScheduleAdd.vue';

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

		addTime(event: any) {
			(this.schedule as any)[this.day.toLowerCase()].unshift(event)
		}
	},

	components: {
		'options-nav': Nav,
		ScheduleTime,
		ScheduleAdd
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
</style>


