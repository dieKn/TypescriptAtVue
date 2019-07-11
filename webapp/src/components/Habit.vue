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
    import {Habit} from "./model/Habit";
    import axios from "axios";
    @Component
    export default class HabitList extends Vue{
	newHabit: string = '';
//	public customer: Customer = new Customer(0, "test0", "user0");
	habits: Habit[] = [
//			{habit: "Typescript", actCheck: true}, 
//			{habit: "Swift", actCheck: false}
		];
	
	mounted() {
		this.onClickApi();
  	}

	//methods
	public onClickApi(){
                main('http://192.168.0.10:8080/habits')
                .then(res => {
                        console.log(res);
                        this.habits = res 
                        console.log(this.habits[0].habit);
                });
        }
	addHabit(): void{
		if(this.newHabit == ''){ return }
		this.habits.push(
			{id: 3, habit: this.newHabit, actCheck: false}
		);
		this.newHabit = '';
	}
	deleteHabit(item: {id: number, habit: string, actCheck: boolean}): void{
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
    
    export async function main(url: string) {
          try {
            const { data } = await axios.get(url);
            return data;  // { message: "Real response!" }
          } catch (err) {
            throw new Error(err.message);
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
