<template>
<div>
<Header></Header>
<div>
  {{text}}
</div>
</div>

</template>

<script>
	import Header from "@/components/header"
	export default {
		 props:["text"],
		components: {
			Header
		},
		data() {
			return {

			}
		}

	}
</script>

<style>
	.top-header-div{
		border-bottom:1px solid #CCCC77 ;
	}
</style>