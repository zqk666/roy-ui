<template>
  <div class="roy-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "RoyCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>
