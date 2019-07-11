<template>
  <div id="myButton">
    <button @click="onClickApi">SendButton</button>
    <p>{{customer.firstName}}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Customer} from "./model/Customer";
    import axios from "axios";
    @Component
    export default class MyButton extends Vue{
	@Prop()
	public greet?: string;
	public customer: Customer = new Customer(0, "test0", "user0");	

	public myButton(){
		alert(this.greet);
		alert("world!");
		
	}
	public onClickApi(){
		let customers: Customer[];
		main('http://192.168.0.10:8080/customer')
		.then(res => {
			console.log(res);
			let customers: Customer[]= res;
			this.customer = customers[0];
			console.log(this.customer.firstName);
		});
	}
	public testMapping(apiResponse: any){
		let customers: Customer[];
		customers = JSON.parse(apiResponse) as Customer[];
		console.log(customers);
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
