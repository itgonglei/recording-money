<template>
  <Layout>
    <div class="labels">
      <router-link v-for="tag in tags" :key="tag.id" class="labels-row" to="/labels/edit/1">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('请填写新标签');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.labels {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  color: #101010;

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