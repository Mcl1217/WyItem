export default [
    {
        path:"/",
        name:"Home",
        component:() => import('../pages/Home/Home'),
        meta:{isShowNavFooter:true}
    },
    {
        path:"/category",
        name:"Category",
        component:() => import('../pages/Category/Category'),
        meta:{isShowNavFooter:true}
    },
    {
        path:"/buy",
        name:"Buy",
        component:() => import('../pages/Buy/Buy'),
        meta:{isShowNavFooter:true}
    },
    {
        path:"/cart",
        name:"Cart",
        component:() => import('../pages/Cart/Cart'),
        meta:{isShowNavFooter:true},
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem("USER_TOKEN")) next()
            else next("/login/?redirect=" + to.path)
        }
    },
    {
        path:"/personal",
        name:"Personal",
        component:() => import('../pages/Personal/Personal'),
        meta:{isShowNavFooter:true},
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem("USER_TOKEN")) next()
            else next("/login/?redirect=" + to.path)
        }
    },
    {
        path:"/login",
        name:"Login",
        component:() => import('../pages/Login/Login'),
        meta:{isShowNavFooter:false},
    },
    {
        path:"/logintype/:flag?",
        name:"LoginType",
        component:() => import('../pages/LoginType/LoginType'),
        meta:{isShowNavFooter:false},
        beforeEnter: (to, from, next) => {
            if(from.path.startsWith("/login")) next()
            else next("/")
        }
    },
    {
        path:"/search",
        name:"Search",
        component:() => import('../pages/Search/Search'),
        meta:{isShowNavFooter:false}
    },

]