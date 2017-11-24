<template lang="pug">
	.options
		options-nav
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';

export default Vue.extend({

	components: {
		'options-nav': Nav
	}
});
</script>

