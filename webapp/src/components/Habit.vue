<template>
  <div id="habitList">
	<p>
	    NewHabit:
	    <input type="text" v-model="newHabit">
	    <button @click="addHabit">Add</button>
	  </p>
	  <hr>
	<ul>
	  <li v-for="item in habits">
	   <input type="checkbox" v-model="item.actCheck" />
	   <span v-bind:class="{ 'complete': item.actCheck }">{{ item.habit }}</span>
	   <button v-on:click="deleteHabit(item)">Delete</button>
	  </li>
	</ul>
	<p>Remaining Tasks: {{ remains }}/{{ habits.length }}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class HabitList extends Vue{
	newHabit: string = '';
	habits: {habit: string, actCheck: boolean}[] = [
			{habit: "Typescript", actCheck: true}, 
			{habit: "Swift", actCheck: false}
		];
	
	//methods
	addHabit(): void{
		if(this.newHabit == ''){ return }
		this.habits.push(
			{habit: this.newHabit, actCheck: false}
		);
		this.newHabit = '';
	}
	deleteHabit(item: {habit: string, actCheck: boolean}): void{
		//this.habits = this.habits.splice(item, 1);
		console.log(this.habits.indexOf(item));
		this.habits.splice(this.habits.indexOf(item), 1);
	}
	// computed
	get remains(): number{
		let counter: number = 0;
		for(let i=0; i<this.habits.length; i++ ){
		  if(!this.habits[i].actCheck){
		    counter++;
		  }
		}
		return counter;
	}
    }

</script>
<style>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul > li {
  margin: 5px;
  text-indent: 0;
}

ul > li > .complete {
  text-decoration: line-through;
  color: #ddd;
}
</style>
