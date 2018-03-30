# 后台管理系统

##### 项目背景
> 基于dva2.0 + umi + and-design 使用dva-cli构架应用工具搭建的项目
> @author lanyanan @dateTime 2018-03-28

### 技术架构

- 打包工具webpack

- 前端view层使用react

- react的状态 采用封装好的dva来进行管理

- 组建包的管理采用umi来进行管理

- react的组件分为container components 和 视图组件

- 路由采用react-router


### 目录结构

	├── README.md                       项目介绍
	├── webpackrc.js                    webpack的配置页面本地开发可以配置反向代理
	├── package.json                    项目依赖包不过依赖全部交给umi来管理
	├── dist                            发布版本的时候输出目录
	├── public                          公共文件目录
	├── src                             源码目录    
	│   ├── global.css                      全局css文件
	│   ├── assets                          资源目录
	│   ├── components                      视图组件全放在这里
	│   ├── layouts                         全局组件header sildbar
	│   ├── pages                           定义每个路由下的组件也称作container compontens
	│   ├── services                        所有的请求api都放在这里
	│   ├── models                          其实是存放action和reducer的逻辑的文件
	│   ├── utils                           请求工具的封装


### 使用说明

##### models 文件调用 

- namespace 是reducer的名称可以在view注入到页面
- state 存放初始状态
- subscriptions 监听事件
- effects 存放异步action可以请求fetch处理异步数据	                                       
- reducer 存放异步action 处理同步数据更新状态	                                       

##### view层视图的注入

	function mapStateToProps(state) {
	  const { list, total, page } = state.area;//area代表models的名称
	  return {
	    list,
	    total,
	    page,
	    loading: state.loading.models.users
	  };
	}
	export default connect(mapStateToProps)(Users);


##### view视图的触发action

	function SildBar({ secondChildren,showIndex ,dispatch}) { //view层获取state
	//组件触发action和传参
	onClick={(e)=>dispatch({type:"example/changesildBar",showIndex:e.target.getAttribute("data-key")})}
