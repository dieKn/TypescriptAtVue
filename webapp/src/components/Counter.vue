<template>
  <div id="counter">
    <div>{{count}}</div>
    <button v-on:click="decrement">-1</button>
    <button v-on:click="increment">+1</button>
    <button @click="onClick">Counter</button>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Counter extends Vue{
	public name: string = 'Counter';
	public count: number = 0;
	@Prop()
	public setNumber?: number;
	increment (): void {
            this.count++;
        }
        decrement (): void {
            this.count--;
        }	
	public onClick(){
		console.log(this.setNumber);
		console.log(this.setNumber + 'aaa');
		alert(this.count);
		const a: number = 3;
		console.log(a+2);
	}
    }
</script>
