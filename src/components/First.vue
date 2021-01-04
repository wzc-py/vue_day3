<template>
    <div>
        <h3>用户管理</h3>
        <table border="1" cellspacing="0">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>工资</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in user_list" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.salary }}</td>
                <td>
                    <button @click="look(index)">查看用户详细信息</button>
                    |
                    <button @click="del_user(index)">删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "First",
    data() {
        return {
            user_list: [
                {id: 1, name: '小王', age: 18, salary: 5555},
                {id: 2, name: '小李', age: 20, salary: 10000},
                {id: 3, name: '小张', age: 58, salary: 6666},
                {id: 4, name: '小明', age: 62, salary: 8888},
            ]
        }
    },
    methods:{
        look(index){
            this.$router.push({path:"/user?id="+this.user_list[index].id})
        },
        del_user(index){
            this.user_list.splice(index,1);
        },
    }
}
</script>

<style scoped>

h3 {
    color: red;
}
tr td{
    text-align: center;
}

</style>
