<template>
    <Layout>
      <div class="labels">
        <router-link class="labels-row" to="/">
          <span>衣</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Labels extends Vue{

  }
</script>

<style lang="scss" scoped>

.labels {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  color:#101010;
  > .labels-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px 16px 0;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #101010;
      margin-right: 16px;
    }

  }
}

.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>