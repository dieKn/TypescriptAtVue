<template>
  <div class="test3">
    <button @click="onClick">Counter</button>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Counter extends Vue{
	@Prop()
	public setNumber?: number;
	
	public onClick(){
		console.log(this.setNumber);
		alert(this.setNumber + 'aaa');
		const a: number = 3;
		console.log(a+2);
	}
    }
</script>
