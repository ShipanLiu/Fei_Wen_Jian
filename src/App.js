import React, { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import MyDocs from './pages/myDocs/ImgHover'
import Header from './components/header/index'
import Footer from './components/footer/index'
export default memo(function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/docs">
          <MyDocs></MyDocs>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
      <Footer></Footer>
    </div>
  )
})
