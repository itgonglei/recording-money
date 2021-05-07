<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordsTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="group in result" :key="group.title">
          <h3 class="title">{{ beautify(group.title) }}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }}</span>
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
import dayjs from 'dayjs';
//import clone from '@/lib/clone';


@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M年D日');
    } else {
      return day.format('YYYY年MM月DD日');
    }
  }

  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  // get recordList() {
  //   return (this.$store.state as RootState).recordList;
  // }

  get result() {

    // const {recordList} = this;
    //
    // type hashTable = { title: string, items: RecordItem[] }[];
    //
    // const newList =clone(recordList).sort((a,b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
    return [];

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

  %item {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 8px 16px;

  }

  .title {
    @extend %item;
  }

  .record {
    background: white;
    @extend %item;
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }


}
</style>