
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubmissionList from "./SubmissionList";
import SubmitForm from "./Submitfrom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmitForm/>} />
        <Route path="/page2" element={<SubmissionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

