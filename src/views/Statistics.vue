<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordsTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3>{{ group.title }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id">
              {{ item.amount }} {{ item.createdAt }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordsTypeList from '@/constants/recordsTypeList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const {recordList} = this;
    // eslint-disable-next-line no-undef
    type hashTableValue = { title: string, items: RecordItem[] };
    // eslint-disable-next-line no-undef
    const hashTable: { [key: string]: hashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      // eslint-disable-next-line no-unused-vars
      const [date, time] = recordList[i].createdAt.split('T');
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordsTypeList = recordsTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }


}
</style>