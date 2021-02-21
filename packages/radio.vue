<template>
  <label class="roy-radio" :class="{ 'is-checked': label === model }">
    <span class="roy-radio_input">
      <span class="roy-radio_inner"></span>
      <input
        type="radio"
        class="roy-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="roy-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "RoyRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: ""
    },
    value: null,
    name: {
      type: String,
      defualt: ""
    }
  },
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup;
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.roy-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: nroy;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: nroy;
  -webkit-user-select: nroy;
  -moz-user-select: nroy;
  .roy-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: nroy;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .roy-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .roy-radio_original {
      opacity: 0;
      outline: nroy;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .roy-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.roy-radio.is-checked {
  .roy-radio_input {
    .roy-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .roy-radio_label {
    color: #409eff;
  }
}
</style>
