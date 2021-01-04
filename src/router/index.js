import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Three from "../components/Three";
import User_details from "../components/User_details";


Vue.use(Router)

export default new Router({
    routes: [
        {path:"/first",component:First},
        {path:"/second",component:Second},
        {path:"/three",component:Three},
        {path:"/user",component:User_details},
        {path:"/",redirect:"/first"},
        {path:"/*",redirect:"/first"},
    ]
})
