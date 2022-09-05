/* 
404 路由配置：
  场景：当所有的路径都没有匹配的时候显示
  语法规则：在各级路由的最后添加 * 号路由作为兜底

*/

//引入两个外部组件
import Logins from "./Logins";
import Layout from "./Layout";
import Board from "./Board";
import Article from "./Article";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import NotFound from "./NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>
        <Route path="/logins" element={<Logins/>}></Route>
        {/* 当所有的路径都没有匹配时，做兜底匹配显示，未找到 */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
