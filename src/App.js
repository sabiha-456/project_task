import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/store";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {CourseList} from "./components/courseLIst"
import {CourseDetails} from "./components/courseDetails"


function App() {
  const localstore = configStore();
  return (
    <div className="main">
      <Provider store={localstore}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList/>}/>
          <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
        </Routes>
        </BrowserRouter>
        
        
      </Provider>
    </div>
  );
}

export default App;
