import { BrowserRouter, Routes, Route } from "react-router-dom"
import PatientListView from "./pages/PatientListView"
import PatientRegistrationView from "./pages/PatientRegistrationView"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patients" element={<PatientListView />} />
        <Route path="/patient/register" element={<PatientRegistrationView />} />
      </Routes>
    </BrowserRouter>
  )
}
