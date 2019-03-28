<template>
	<div style="height: 100%;">
		<div class="header">
			<Header></Header>
		</div>

		<condiv></condiv>

	</div>
	
</template>

<script>
	import Header from "@/components/header"
	import condiv from '@/components/condiv'
	import Rightmenu from "@/components/rightmenu"
	export default {
		components: {
			Header,
			condiv
//			,
//			Rightmenu
		},
		name: 'con-div',
		data() {
			return {

			}
		}

	}
</script>

<style>
	.header {
		width: 100%;
		height: 40px;
	}	
	.con {
		/*padding-top: 84px;*/
		position: relative;
		height: 100%;
	}	
	.tab-con {
		height: 94%;
		overflow: auto;
	}
</style>