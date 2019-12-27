import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages'; //引入语言包
import storage from 'util/storage'; //引入localstorage

Vue.use(VueI18n);
const browserLang = navigator.language || navigator.browserLanguage;
const i18n = new VueI18n({
    locale: storage.getStorage("local") || browserLang || 'zh-CN',
    // locale: 'zh-CN',
    messages:messages
})
export default i18n;




