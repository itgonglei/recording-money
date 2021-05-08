import Component from 'vue-class-component';
import Vue from 'vue';

const map: { [key: string]: string } = {
    'tag name duplicated': '标签名重复了'
};

@Component
export class TagHelper extends Vue {
    createTag() {
        const msg = window.prompt('请填写新标签');
        if (!msg) { return window.alert('标签名不能为空!');}
        this.$store.commit('createTag', msg);
        if (this.$store.state.createTagError) {
            window.alert(map[this.$store.state.createTagError.message] || '位置错误');
        }
    }
}

export default TagHelper;