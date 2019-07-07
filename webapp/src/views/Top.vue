<template>
  <div class="top">
    <Counter></Counter>
    <Counter setNumber="3"></Counter>
    <input type="text" name="name" v-model="text">
    <p>{{ text }}</p>
  </div>
</template>
<script lang="ts">
    import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
    import Counter from "@/components/Counter.vue";

    @Component({
        components: {
            Counter,
	}
    })
    export default class Top extends Vue{
    @Prop() public text!: string;

    @Emit()
    public input(text: string) {}

    private get localValue(): string {
      return this.text;
    }

    private set localValue(text: string) {
      this.input(text);
    }
    }
 
</script>
<style>
div.test3{
   padding:20px;
}
</style>
