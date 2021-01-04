<template>
    <table border="1">
        <tr>
            <td>ID</td>
            <td>姓名</td>
            <td>年龄</td>
            <td>工资</td>
            <td>生日</td>
            <td>地址</td>
        </tr>
        <tr>
            <td v-for="(user,index) in user_list[index]" :key=[index]>{{user}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "User_details",
    data(){
        return{
            user_list:[
                {id:1,name:'小王',age:18,salary:5555,bir:"1999-1-1",addr:"河南人"},
                {id:2,name:'小李',age:20,salary:10000,bir:"2000-1-1",addr:"北京人"},
                {id:3,name:'小张',age:58,salary:6666,bir:"20002-1-1",addr:"内蒙古滴"},
                {id:4,name:'小明',age:62,salary:8888,bir:"1988-1-1",addr:"天津人"},
            ],
            index:this.$route.query.id,
        }
    }
}
</script>

<style scoped>

</style>
