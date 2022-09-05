/* 
编程式导航-跳转携带参数
  场景：有些时候不光需要跳转路由还需要传递参数

  两种方式：
    1. searchParams 传参
      传参：navigate('./about?id=1001')
      取参：
        let [params] = useSearchParams();
        let id = params.get('id')
    2. params 传参
      传参：navigate('./about/1001')
      取参：
        let params = useParams();
        let id = params.id

*/



//引入两个外部组件
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


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
        <Route path="/about/:id" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
