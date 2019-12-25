import * as types from '../types';

export default {
    getList({commit}, info){
        commit(types.GET_LIST, info)
    }
}