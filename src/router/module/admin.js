export default [
    {
        path:"/",
        name:"homeRight",
        component:() => import('@/views/homeright'),
        meta:{
            title:"后台管理系统",
            isShow:true
        }
    },
    {
        path:"devList",
        name:"devList",
        component:() => import('@/views/devList'),
        meta:{
            title:"后台管理系统-开发管理",
            isShow:true
        }
    },
    {
        path:"businessList",
        name:"businessList",
        component:() => import('@/views/businessList'),
        meta:{
            title:"后台管理系统-运营管理",
            isShow:true
        }
    }
]