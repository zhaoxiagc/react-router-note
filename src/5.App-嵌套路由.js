/* 
嵌套路由：

*/

//引入两个外部组件
import Logins from "./Logins";
import Layout from "./Layout";
import Board from "./Board";
import Article from "./Article";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* 定义二级路由嵌套 */}
          {/* 默认二级 添加 index 属性，把它自己的 path 干掉 */}
          {/* <Route path="board" element={<Board/>}></Route> */}
          <Route index element={<Board/>}></Route>
          <Route path="article" element={<Article/>}></Route>
        </Route>
        <Route path="/logins" element={<Logins/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
