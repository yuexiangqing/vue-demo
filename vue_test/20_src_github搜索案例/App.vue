<template>
 <div class="container">
   <search></search>
   <list></list>
</div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
	name:'App',
	components: {List,Search}
	}
</script>

<style>

</style>
