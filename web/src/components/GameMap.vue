<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas"></canvas>
    </div>
</template>


<script>
import{GameMap} from "@/assets/scripts/GameMap";
import{ ref, onMounted } from 'vue'

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });

        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    /* 表示和它的父元素等长 */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>