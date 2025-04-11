const base = {
    get() {
        return {
            url : "http://localhost:8080/huiyuanguanli/",
            name: "huiyuanguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/huiyuanguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "连锁超市会员管理系统"
        } 
    }
}
export default base
