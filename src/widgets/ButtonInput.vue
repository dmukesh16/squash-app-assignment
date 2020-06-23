<template>
  <div class="mt-4">
    <button
      class="common-style"
      :style="getStyle()"
      v-on:click="buttonClick"
      :disabled="disabled"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["buttonText", "disabled", "buttonType"],
  methods: {
    buttonClick() {
      this.$emit("onButtonClick");
    },
    getStyle() {
      switch (this.buttonType) {
        case 'next':
          return "color: #ffffff; background-color: #ed5901;";
        case 'back':
          return "color: #000000; background-color: #f4f6f7;"
      }
    }
  }
}
</script>
<style scoped>
.common-style {
  height: 40px; 
  width: 100%;
  cursor: pointer;
  border: 0;
  font-weight: bold;
}
.common-style:focus {
  outline: 0;
}
.common-style:disabled {
  opacity: 0.7;
  cursor: default;
}
</style>