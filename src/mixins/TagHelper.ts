import Component from 'vue-class-component';
import Vue from 'vue';


@Component
export class TagHelper extends Vue {
    createTag() {
        const msg = window.prompt('请填写新标签');
        if (!msg) { return window.alert('标签名不能为空!');}
        this.$store.commit('createTag', msg);
    }
}

export default TagHelper;