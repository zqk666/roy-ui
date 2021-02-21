<template>
  <div class="roy-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <input type="checkbox" class="roy-switch_input" :name="name" ref="input" />
    <span class="roy-switch_core" ref="core">
      <span class="roy-switch_button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: "RoySwitch",
  props: {
    value: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ""
    },
    inactiveColor: {
      type: String,
      defualt: ""
    },
    name: {
      type: String,
      defualt: ""
    }
  },
  mounted() {
    this.setColor();
  },
  watch: {
    value(e) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        var color = !e ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value;
      // 等待value发生了改变，再setColor
      // 数据修改后，等待DOM更新，再修改按钮的颜色
      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value;
    }
  }
};
</script>
<style lang="scss" scoped>
.roy-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .roy-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: nroy;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .roy-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .roy-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .roy-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.roy-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
