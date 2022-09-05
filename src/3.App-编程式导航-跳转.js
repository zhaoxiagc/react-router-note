/* 
编程式导航-跳转
  作用：通过 js 编程的方式进行路由页面跳转，比如从登录页跳转到关于页
  语法说明：
    1. 导入 useNavigate 钩子函数
    2. 执行钩子函数得到跳转函数
    3. 执行跳转函数完成跳转

    注意：如果在跳转时不想加历史记录，可以添加额外参数 replace 为 true

*/



//引入两个外部组件
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


//进行路由配置


function App() {
  return (
    //声明当前要用一个非 hash 模式的路由
    <BrowserRouter>
      {/* 指定跳转的组件， to 用来配置路由地址 */}
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>
       {/* 路由出口，路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系，path 代表路径，element 代表组件   成对出现 */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
