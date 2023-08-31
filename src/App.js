import { connect } from "react-redux";
// import { View } from "./components/view/view.js";
import View from './components/view/view'
import { Route, Routes } from "react-router-dom";
import Add from './components/add/add.js'
import { Adding ,Delete } from "./Redux store/actions";
import  Edit  from "../src/components/edit/edit.js"

function App({state,Adding,Delete}) {

  return (
    <div >
        <Routes>
          <Route path="/" element={<View  />}></Route>
          <Route path="/add" element={<Add type = {Adding} />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
    </div>
  );
}

const mapStateToprop = (state) => (
  {
    state
  }
)

export default connect(mapStateToprop,{Adding,Delete})  (App);