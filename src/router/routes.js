export default [
    {
        path: "/",
        name: "Home",
        component: () => import('../pages/Home/Home'),
        meta: {isShowNavFooter: true}
    },
    {
        path: "/category",
        name: "Category",
        component: () => import('../pages/Category/Category'),
        meta: {isShowNavFooter: true}
    },
    {
        path: "/buy",
        name: "Buy",
        component: () => import('../pages/Buy/Buy'),
        meta: {isShowNavFooter: true}
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import('../pages/Cart/Cart'),
        meta: {isShowNavFooter: true},
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("USER_TOKEN")) next()
            // 如果未登录,则去登录页,并且携带购物车页面的路径
            else next("/login/?redirect=" + to.path)
        }
    },
    {
        path: "/personal",
        name: "Personal",
        component: () => import('../pages/Personal/Personal'),
        meta: {isShowNavFooter: true},
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("USER_TOKEN")) next()
            // 如果未登录,则去登录页,并且携带个人中心页面的路径
            else next("/login/?redirect=" + to.path)
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('../pages/Login/Login'),
        meta: {isShowNavFooter: false},
    },
    {
        // 标志登录的方式
        path: "/logintype/:flag?",
        name: "LoginType",
        component: () => import('../pages/LoginType/LoginType'),
        meta: {isShowNavFooter: false},
        beforeEnter: (to, from, next) => {
            // 必须是从登录页跳转而来
            if (from.path.startsWith("/login")) next()
            else next("/")
        }
    },
    {
        path: "/search",
        name: "Search",
        component: () => import('../pages/Search/Search'),
        meta: {isShowNavFooter: false}
    },

]