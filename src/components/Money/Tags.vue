<template>
    <div class="tags">
      <div class="new">
        <button @click="add">新增标签</button>
      </div>
      <ul class="current">
        <li v-for="tags in dataSource" :key="tags.id" @click="toggle(tags)"
            :class="{select:selectTags.indexOf(tags) >=0 && 'select'}">
          {{ tags.name }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() dataSource: [] | undefined;
  selectTags: string[] = [];

  toggle(tags: string) {
    const index = this.selectTags.indexOf(tags);
    if (index >= 0) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tags);
    }
    this.$emit('update:value',this.selectTags)
  }

  add() {
    const msg = window.prompt('请填写新标签');
    if (msg === '') {
      window.alert('标签名不能为空!');
      return;
    }
    if (this.dataSource) {
      this.$emit('update:dataSource', [...this.dataSource, msg]);
    }
  }

}
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;


        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;

            > li {
              $bg: #d9d9d9;
              background: $bg;
              $h: 24px;
              height: $h;
              line-height: $h;
              border-radius: ($h/2);
              padding: 0 16px;
              margin-right: 12px;
              margin-top: 4px;

              &.select {
                background: darken($bg, 50%);
                color: white;
              }

            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>