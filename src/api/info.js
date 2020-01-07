import axios from '../../config/axios';

//?page=2&count=4
export function newsList(params){
    return axios.get('/devapi/getWangYiNews',{
        params:{
            page:params.page,
            count:params.count
        }
    });
}