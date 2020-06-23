<template>
    <div>
        <label> {{ label }}</label>
        <b-input class="input-style" :value="defaultValue" @blur="getValue($event)"/>
        <!-- <label for="input-style"> {{ label }}</label> -->
        
    </div>
</template>

<script>
export default {
    props: ["label", "defaultValue"],
    methods: {
        getValue(event) {
            this.$emit("changeInValue", event.target.value);
        }
    }
}
</script>

<style scoped>
label {
    color: #919090;
    /* position: absolute;
    top: 10px; */
}
.input-style:focus {
    box-shadow: none;
    outline: none;
    border-color: #ed5901;;
}
/* #input-style:focus ~ label {
    color: #ed5901;;
} */
</style>