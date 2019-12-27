const Utils = {
    //事件兼容性封装
    addEvent(element,type,callback){
        if(element.addEventListener){
            element.addEventListener(type,callback,false);
        }else if(element.attachEvent){
            //兼容ie
            element.attachEvent(`on${type}`,callback);
        }
    },
    /**
     * 生成随机字符串(可指定长度)
     * @param len
     * @returns {string}
     */
    randomString(len){
        len = len || 6;
        let str = '#$&ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        let strLen = str.length;
        let result = "";
        for(let i = 0; i<= len;i++){
            result += str.charAt(Math.floor(Math.random() * strLen));
        }
        return result;


    },
    /**
     * randomWord 产生任意长度随机字母数字组合
     * @param randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
     * @param min
     * @param max
     * @returns {string}
     * 调用方法:
     * 生成 3 - 32 位随即字符串
     * randomWord(true,3,32);    例如：olyOXUF5oDsuMmXl3Mi48
     * 生成 32 位随机字符串
     * randomWord(false,32);     例如：fjpnWj29Bb8boiXbLeDF0nxkR4aYcLRl
     */
    randomWord(randomFlag,min,max){
        let result = "";
        let range = min;
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if(randomFlag){
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for(let i = 0;i< range;i++){
            let pos = Math.round(Math.random()* (arr.length - 1));
            result += arr[pos];
        }
        return result;

    },
    /**
     * 获取url后参数
     * '?prod=pc_his&from=pc_web&json=1'
     */
    getQueryParms(){
    //获取url中"?"符后的字串 ?prod=pc_his&from=pc_web&json=1
        let queryParms = location.search;
        let result = {};
        if(queryParms.indexOf("?") != -1){
            let str = queryParms.substr(1);
            let strs = str.split('&');
            for(let i = 0,len = strs.length; i< len;i++){
                result[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return result;
    },
    /**
     * 生成随机颜色值
     */
    getRandomColor(){
        let rgb = [];
        for(let i = 0;i < 3;i++){
            let color = Math.floor(Math.random() * 256).toString(16);
            color = color.length === 1 ? '0' + color : color;
            rgb.push(color);
        }
        return '#' +  rgb.join("");

    },
    /**
     * 验证身份证号
     * @param el 号码输入input
     * @returns {boolean}
     */
    checkIdCard(card){
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(card); 
    },
    /**
     * 判断微信浏览器
     * true:微信浏览器，false:不是微信浏览器
     * @returns {Boolean}
     */
    isWeChart(){
        let ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) === 'micromessenger'){
            return true;
        }else{
            return false;
        }

    },
    /**
     * 设置cookies
     *   var exdate = new Date(expiredays);
    var expires = isNaN(exdate) ? "" : ";expires=" + exdate.toGMTString();
    doc.cookie = name + "=" + value + expires;
     */
    setCookie(name,value,expiresDay){
        expiresDay =  new Date(expiresDay);
        let expires = isNaN(expiresDay) ? "" : ";expires=" + expiresDay.toGMTString();
        document.cookie = name + "=" + escape(value) + ';expires=' + expires;
    },
    /**
     * 获取cookies
     */
    getCookie(name){
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        var arr = document.cookie.match(reg);
        if (arr) {
          return decodeURIComponent(arr[2]);
        } else {
          return "";
        } 
    },
    /**
     * 获取cookies
     */
    delCookie(name){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    /**
     * 浏览器判断
     * 用法示例——多套页面判断是否显示移动端：
     *   let ua = isBrowser();
     *   if (!ua.mobile) {
     *       location.href = './pc.html';
     *   }
     */
    isBrowser(){
        let ua = navigator.userAgent;
        let uaLower = navigator.userAgent.toLowerCase();
        return{
            trident: ua.indexOf('Trident') > -1,
        //IE内核
        presto: ua.indexOf('Presto') > -1,
        //opera内核
        webKit: ua.indexOf('AppleWebKit') > -1,
        //苹果、谷歌内核
        gecko: ua.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        //火狐内核
        mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
        //是否为移动终端
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        //ios终端
        android: ua.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        //android终端或uc浏览器
        iPhone: ua.indexOf('iPhone') > -1,
        //是否为iPhone或者QQHD浏览器
        iPad: ua.indexOf('iPad') > -1,
        //是否iPad
        webApp: ua.indexOf('Safari') == -1,
        //是否web应该程序，没有头部与底部
        iosv: ua.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: uaLower.match(/MicroMessenger/i) == "micromessenger",
        ali: ua.indexOf('AliApp') > -1,
        }
    },
    /**
     * 生成UUID
     * @returns {string}
     */
    generateUUID(){
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    },
    /**
     * 删除左右两端的空格
     * @param str
     * @returns {string | * | void}
     */
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    /**
     * 首字母大写
     * @param str
     * @returns {string}
     */
    fistLetterUpper(str){
        return str.charAt(0).toUpperCase() + str.substr(1);
    },
    /**
     * 过滤非法字符串
     */
    illegalFilter(str){
        let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
        let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        if(regCn.test(str) || regEn.test(str)){
            return false;
        }
        return true;
    }




}

export default Utils;

