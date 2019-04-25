<template>
    <div class="home">
        <MyButton greet="Hello"></MyButton>
	<Counter setNumber="3"></Counter>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import MyButton from "@/components/MyButton.vue";
    import Counter from "@/components/Counter.vue";

    @Component({
        components: {
            MyButton,
	    Counter,
    },
    })
    export default class Home extends Vue {}
</script>
