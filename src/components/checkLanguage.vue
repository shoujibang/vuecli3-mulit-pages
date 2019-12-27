<template>
    <div class="check-language"> 
        <el-select @change="changeLang" v-model="languageVal" placeholder="请选择">
            <el-option
            v-for="item in language"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        
    </div> 
</template>
<script>

export default {
    name:"checkLanguage",
    props:{
       
    },
    created() {
       
    },
    components:{
        
    },
    data() {
        return {
           languageVal:'',
           language:[{
                value: 'zh-CN',
                label: '中文'
           },{
                value: 'en-US',
                label: '英文'
           }] 
            
        }
    },
    mounted() {
        
        
        
    },
    methods: {
      changeLang(lang){
            console.log(lang)
            console.log(this.$i18n)
            console.log()
            // loading遮罩
            const loading = this.$loading({
            lock: true,
            text: this.$t("home.loadingText"),
            // spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(function(){
            loading.close();
            },600)
            if(lang === 'zh-CN'){
                this.$setStorage('locale', 'zh-CN');
                this.$i18n.locale = this.$getStorage("locale")
            }else if(lang === 'en-US'){
                this.$setStorage('locale', 'en-US');
                this.$i18n.locale = this.$getStorage("locale")
            }else{

            }
        }  
    },
}
</script>
<style lang="less" scoped>
    .check-language{
       font-size: 20px;
       /deep/.el-input__inner{
           width: 130px;
       }
    }
   
    
</style> 