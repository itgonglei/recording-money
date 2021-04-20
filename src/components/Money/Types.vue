<template>
    <div>
        <ul class="type">
          <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
          <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Types',
    props:['xxx'],//外部属性
    data() { //内部属性
      return {
        type: '-'// '-'表示支出  '+' 表示收入
      };
    },
    //生命周期
    mounted() {
      console.log('生命周期');
    },
    //方法
    methods: {

      selectType(type: string) {
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknown');
        }
        (this as any).type = type;
      }
    }
  };
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