import React,{Component} from 'react'
import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/* 
应用根组件
*/

export default class App extends Component{
    render(){
        return (
         <BrowserRouter>
           <Switch>
           {/* 注册路由 */}
              <Route path='/login' component={Login}/>
              <Route path='/' component={Admin}/>
           </Switch>
         </BrowserRouter>

        )
    }
}
