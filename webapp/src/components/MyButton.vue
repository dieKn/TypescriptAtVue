<template>
    <button @click="onClickApi">SendButton</button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import axios from "axios";
    @Component
    export default class MyButton extends Vue{
	@Prop()
	public greet?: string;
	
	public myButton(){
		alert(this.greet);
		alert("world!");
		
	}
	public onClickApi(){
		main().then(res => console.log(res));
	}
    }
    
    export async function main() {
	  try {
	    const { data } = await axios.get('http://10.138.97.192:8080/customer');
	    return data;  // { message: "Real response!" }
	  } catch (err) {
	    throw new Error(err.message);
	  }
    }

</script>
