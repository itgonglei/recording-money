<template>
  <Layout>
    <div class="labels">
      <router-link v-for="tag in tags" :key="tag.id" class="labels-row"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Money/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component({
  components: {Button},
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
  }

  createTag() {
    const msg = window.prompt('请填写新标签');
    if (!msg) { return window.alert('标签名不能为空!');}
    this.$store.commit('createTag', msg);
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