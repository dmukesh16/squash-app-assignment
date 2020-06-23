<template>
  <div class="mt-4">
    <label v-if="label" class="dropdown-label">{{ label }}</label>
    <b-form-select
      v-model="selected"
      @change="changedSelect"
      :class="'w-100'"
      :options="options"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  props: ["options", "label", "selectedOption"],
  data() {
    return {
      selected: ""
    };
  },
  created() {
    this.selected = this.selectedOption;
  },
  methods: {
    changedSelect() {
      this.$emit("selectedOption", this.selected);
    }
  }
};
</script>
<style scoped>
.custom-select {
  background: url("../assets/down_arrow.svg") #ffffff no-repeat right 0.75rem
    center/12px 8px;
  cursor: pointer;
}
.custom-select option {
    padding: 20px;
}
.custom-select:focus {
  outline: none;
  box-shadow: none;
  border-color: #ed5901;
}
.dropdown-label {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #919090;
  margin-bottom: 10px;
}
</style>