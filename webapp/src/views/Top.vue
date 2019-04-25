<template>
  <div class="top">
    <Counter></Counter>
    <Counter setNumber="3"></Counter>
  </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Counter from "@/components/Counter.vue";

    @Component({
        components: {
            Counter,
    },
    })
    export default class Top extends Vue {}
</script>
<style>
div.test3{
   padding:20px;
}
</style>
