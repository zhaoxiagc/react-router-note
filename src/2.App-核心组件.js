/* 
核心组件：
一、BrowserRouter
  作用：包裹整个应用，一个 React 应用只需要使用一次
  两种常用的 Router：HashRouter 和 BrowserRouter
    HashRouter：
      使用 URL 的哈希值实现
      例如：http://localhost:3000/#/first
    BrowserRouter(推荐):
      使用 H5 的 history.pushState API 实现
      例如：http://localhost:3000/first

二、Link
  作用：用于指定导航链接，完成路由跳转
  语法说明：组件通过 to 属性指定路由地址，最终会渲染为 a 链接元素

三、Routes
  作用：提供一个路由出口，满足条件的路由组件会渲染到这里

四、Route
  作用：指定导航链接，完成路由匹配
  语法说明：path 属性指定匹配的路径地址，element 属性指定要渲染的组件
  
*/



//引入两个外部组件
import Home from "./Home";
import About from "./About";
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
        <Route path="about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
