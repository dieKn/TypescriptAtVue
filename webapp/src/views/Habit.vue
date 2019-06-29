<template>
    <div class="home">
      <HabitList></HabitList>	
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import MyButton from "@/components/MyButton.vue";
    import Counter from "@/components/Counter.vue";
    import HabitList from "@/components/Habit.vue";

    @Component({
        components: {
            MyButton,
	    Counter,
	    HabitList,
    },
    })
    export default class Home extends Vue {}
</script>
