import * as types from '../types';
import {newsList} from '@/api/info';
import ListItem from '@/mock/json/newsList'

 
console.log("dataListdataListdataListdataList:",ListItem)

export default {
    newsList({commit}, info){
        let {page,count} = info;
        return new Promise((resolve,reject) =>{
            // newsList({page:page,count:count}).then(res =>{
            //     const { data } = res;
            //     // commit('NEWS_LISTDATA', data)
            //     resolve(data);
            // }).catch(error =>{
            //     reject(error);
            // })
            resolve(ListItem);
        })
        commit(types.GET_LIST, info)
    }
}