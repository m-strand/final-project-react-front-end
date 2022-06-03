import React from React.js;
import {Switch, Route} from "react-router-dom";
import Header from "./Header.js";
import FilterType from "./FilterType.js";
import Footer from "./Footer.js";


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