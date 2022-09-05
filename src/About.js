import { useSearchParams } from "react-router-dom" 
import { useParams } from "react-router-dom";


//方法一：searchParams 传参
/* function About (){
    let [params] = useSearchParams();
    console.log([params]);
    //params 是一个对象，对象中有一个 get 函数
    //用来获取对应的参数
    //把参数的名称作为 get 方法的实参传过来
    const id = params.get('id')
    const name = params.get('name')
    console.log(id);   //注意：跳转传参时，如果同一参数具有多个值，那以第一个为主

    return (
        <div>about:得到的参数 id 值为：{id},{name}</div>
    )
} */

//方法二：params 传参
function About (){
    let params = useParams();
    console.log(params);
    //params 是一个对象，对象中有一个 get 函数
    //用来获取对应的参数
    //把参数的名称作为 get 方法的实参传过来
    const id = params.id
    console.log(id);   //注意：跳转传参时，如果同一参数具有多个值，那以第一个为主

    return (
        <div>about:得到的参数 id 值为：{id}</div>
    )
}

export default About