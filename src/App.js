import React, { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Alert } from 'reactstrap'
import FloatingBg from './components/floatingBg/FloatingBg'
import Home from './pages/home/Home.jsx'
import MyDocs from './pages/myDocs/MyDocs'
import Header from './components/header/index'
import Footer from './components/footer/index'
export default memo(function App() {
  return (
    <div>
      <Alert color="primary">
        <h1 className="bg-danger">Mascha!!!!!</h1>Schreib mir via WhatsApp wenn
        du hier gesehen hast!!!!
      </Alert>
      <Header></Header>
      <FloatingBg></FloatingBg>
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
