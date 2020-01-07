//扩展过滤器
/**
 * 去掉指定的字符串
 * str 要过滤的字符串
 */
import dayjs from 'dayjs';



 const extFilter = {
    /**
     * 格式化时间戳（秒|毫秒）
     * @param {timestamp} value
     */
    timeFilter(time,format='YY-MM-DD hh:mm:ss'){        
        var date = new Date(time); 
        var year = date.getFullYear(),
            month = date.getMonth()+1,//月份是从0开始的
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
            return '0'+index;
        });//开个长度为10的数组 格式为 ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]
    
        var newTime = format.replace(/YY/g,year)
            .replace(/MM/g,preArr[month]||month)
            .replace(/DD/g,preArr[day]||day)
            .replace(/hh/g,preArr[hour]||hour)
            .replace(/mm/g,preArr[min]||min)
            .replace(/ss/g,preArr[sec]||sec);
    
        return newTime;
    },
     /**
      * 
      * @param {*} value 
      * 要处理的字符串 
      * @param {*} len 
      */
     sliceStr(value,len){
         len = Number.parseInt(len) || 10;
         if(value.length <= len){
             return value;
         }else{
             return value.slice(0,len) + "...";
         }
     },
     /**
     * 手机号格式化
     * @param {String} phone
     */
    formatPhone(tel){
        tel = tel.toString();
        return tel.substr(0,3) + '****' + tel.substr(7,11);
    },
    /**
     * 4位一空格（格式化银行卡）
     * @param {String} val
     */
    formatBank(card){
        if (card) {
            return card.toString().replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
        }
    },
    /**
     * 千分位格式化
     * @param {数字} val
     */
    toThousands(val,type){
        let num = (val || 0).toString(),
        result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return result + type;

    },
    /**
     * 格式化小数位
     * @param val 传入的值
     * @param pos 保留的小数位
     * @returns {*}
     */
    formatFloat(val,pos=2){
       let fVal = parseFloat(val);
       if(isNaN(fVal)){
           return false;
       } 
       fVal = Math.round(val * Math.pow(10,pos)) / Math.pow(10,pos);
       let sVal = fVal.toString();
       let valPos = sVal.indexOf('.');
       if(valPos < 0){
            valPos = sVal.length;
            sVal += '.';
       }
       while (sVal.length <= valPos + pos) {
            sVal += '0';
        }
        return sVal;
    }





 }



 export default extFilter;
