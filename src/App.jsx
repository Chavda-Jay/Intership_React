import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Home2 } from './components/Home2'
import { Navbar } from './components/Navbar'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import ContentComponent from './components/ContentComponent'
import { ApiDemo1 } from './components/api/ApiDemo1'
import { MyApiDemo1 } from './components/api/MyApiDemo1'
import { MyApiDemo2 } from './components/api/MyApiDemo2'
import { OmdbApi } from './components/api/OmdbApi'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { MyPortFolio } from './components/MyPortFolio'
import { ApiDemo2 } from './components/api/ApiDemo2'
import { FunctionDemo1 } from './components/FunctionDemo1'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { HomeComponent } from './components/HomeComponent'
import { NetflixHome } from './components/NetflixHome'
import { NetflixShows } from './components/NetflixShows'
import { NetflixMovies } from './components/NetflixMovies'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Watch } from './components/watch'
import { CardComponent } from './components/CardComponent'
import { Employees } from './components/Employees'
import { InputDemo1 } from './components/input/InputDemo1'
import { InputDemo2 } from './components/input/InputDemo2'
import { FormDemo1 } from './components/form/FormDemo1'
import { MyFormDemo1 } from './components/form/MyFormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'




export default function App() {
  return (
    <>
      <Navbar />
      {/* <HeaderComponent /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/mapdemo1" element={<MapDemo1/>} />
        <Route path="/mapdemo2" element={<MapDemo2/>} />
        <Route path="/mapdemo3" element={<MapDemo3/>} />
        <Route path="/mapdemo4" element={<MapDemo4/>} />
        <Route path="/mapdemo5" element={<MapDemo5/>} />
        <Route path="/functiondemo1" element={<FunctionDemo1/>} /> 
        <Route path="/myportfolio" element={<MyPortFolio/>} />
        <Route path="/apidemo1" element={<ApiDemo1/>} />
        <Route path="/myapidemo1" element={<MyApiDemo1/>} />
        <Route path="/myapidemo2" element={<MyApiDemo2/>} />
        <Route path="/omdbapi" element={<OmdbApi/>} />  
        <Route path="/apidemo2" element={<ApiDemo2/>} />  
        <Route path="homecomponent" element={<HomeComponent/>}/>
        <Route path="netflixhome" element={<NetflixHome/>}/>
        <Route path="netflixshows" element={<NetflixShows/>}/>
        <Route path="netflixmovies" element={<NetflixMovies/>}/>
        <Route path="/watch/:name" element={<Watch/>}/>
        <Route path="errornotfound" element={<ErrorNotFound/>}/>
        <Route path="cardcomponent" element={<CardComponent/>}/>
        <Route path="employee" element={<Employees/>}/>
        <Route path="usestatedemo1" element={<UseStateDemo1/>} />
        <Route path="usestatedemo2" element={<UseStateDemo2/>} />
        <Route path="usestatedemo3" element={<UseStateDemo3/>} />
        <Route path="inputdemo1" element={<InputDemo1/>} />
        <Route path="inputdemo2" element={<InputDemo2/>} />
        <Route path="formdemo1" element={<FormDemo1/>} />
        <Route path="myformdemo1" element={<MyFormDemo1/>} />
        <Route path="formdemo2" element={<FormDemo2/>} />
        <Route path="formdemo3" element={<FormDemo3/>} />
        <Route path="formdemo4" element={<FormDemo4/>} />
      </Routes>

      {/* <ContentComponent />
      <FooterComponent /> */}
    </>
  )
}