export default [
    {
        path:"/admin",
        name:"admin",
        component:() => import('views/homeRight.vue'),
        meta:{
            title:"个人中心"
        }
    }
]