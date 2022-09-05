//1. 导入 useNavigate
import {useNavigate} from 'react-router-dom'

function Login (){
    //2. 执行 useNavigate 得到一个跳转函数
    const navigate = useNavigate();
    //跳转到关于页
    function goAbout () {
        //3. 调用跳转函数传入目标路径
        // navigate ('/about?id=1001', { replace: true })
        navigate ('/about/1001', { replace: true })
    }
    return (
        <div>
            login
            <button onClick={goAbout}>跳转到关于页</button>
        </div>
    )
}

export default Login