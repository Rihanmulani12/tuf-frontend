import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubmissionList from "./SubmissionList.jsx";
import SubmitForm from "./Submitfrom.jsx"; 


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmitForm />} />
        <Route path="/page2" element={<SubmissionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
