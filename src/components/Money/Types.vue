<template>
  <div>
    <ul class="type">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-'; // '-'表示支出，'+'表示收入

  @Prop(Number) xxx: number | undefined;
  //Prop 告诉 vue xxx 不是data 是  prop
  //Number 告诉 vue xxx 是个 number
  // xxx 属性名
  //Number | undefined 就是 xxx 的类型

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }


}

</script>

<style lang="scss" scoped>
    .type {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            line-height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;

            }
        }
    }
</style>