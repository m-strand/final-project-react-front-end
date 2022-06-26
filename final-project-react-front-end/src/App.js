import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header.js";
import FilterType from "./components/FilterType.js";
import Artic from "./components/Artic.js";
import Castles from "./components/Castles.js";
import IconicCities from "./components/IconicCities.js";
import Treehouses from "./components/Treehouses.js";
import Windmills from "./components/Windmills.js";
import Footer from "./components/Footer.js";


function App () {
    return (
        <>
        <Header />
        <FilterType />
        <Switch>
            <Route path="/artic">
                <Artic />
            </Route>
                
            <Route path="/castles">
                <Castles />
            </Route>

            <Route path="iconiccities">
                <IconicCities />
            </Route>

            <Route path="treehouses">
                <Treehouses />
            </Route>

            <Route path="windmills">
                <Windmills />
            </Route>
        </Switch>
        <Footer /> 
        </>

    );
};
export default App;