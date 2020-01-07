export default [
    {
        path:"/",
        name:"homeright",
        component:() => import('@/views/homeright'),
        meta:{
            title:"后台管理系统",
            isShow:true
        }
    },
    {
        path:"/devList",
        name:"devList",
        component:() => import('@/views/devList'),
        meta:{
            title:"后台管理系统-开发管理",
            isShow:true
        }
    },
    {
        path:"/businessList",
        name:"businessList",
        component:() => import('@/views/businessList'),
        meta:{
            title:"后台管理系统-运营管理",
            isShow:true
        }
    },
    {
        path:"/orderList",
        name:"orderList",
        component:() => import('@/views/orderList'),
        meta:{
            title:"后台管理系统-订单管理",
            isShow:true
        }
    },
    {
        path:"/userAdd",
        name:"userAdd",
        component:() => import('@/views/user/userAdd'),
        meta:{
            title:"后台管理系统-认证管理",
            isShow:true
        }
    },
    {
        path:"/userInfo",
        name:"userInfo",
        component:() => import('@/views/user/userInfo'),
        meta:{
            title:"后台管理系统-权限管理",
            isShow:true
        }
    }
    
    
]