import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  // update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  // remove: (id: string) => boolean
  save: () => void

}


const tagListModel: TagListModel = {
  data: [],
  fetch() {
    return this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    const id = createId.toString();
    this.data.push({id, name: name});
    this.save();
    return 'success';
  },
  // update(id,name){
  //
  // },
  // remove(id){
  //
  // },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;