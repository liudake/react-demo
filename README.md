# 基于react框架创建项目
node版本： v16.13.2
npm版本：8.1.2
## 项目启动
### `npm start`

## 需求内容
1. 实现输入查询场景
2. 查询正确显示信息
3. 查询错误显示错误提示（样式自由发挥）
4. 需要有请求状态提示（例如loading，样式自由发挥）

## 技术亮点
1. 封装fetch网络请求，支持get,post,put,delete，支持async await 写法，支持捕获请求错误信息。
2. 封装自定义Hooks完成日常请求loading与error俘获。
3. 封装自定义Hook中的防抖函数，优化搜索查询场景。
4. 全量使用TS写法。
5. react社区有个SWR库，可以进行请求数据优化以及缓存等策略。[SWR](https://swr.vercel.app/zh-CN) 
