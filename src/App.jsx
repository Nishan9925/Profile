// import './App.css'
import UserProfileHeader from './components/UserProfileHeader/UserProfileHeader'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import LicenseCertificate from './components/LicenseCertificate/LicenseCertificate'
import Skills from './components/Skills/Skills'
import Language from './components/Language/Language'
// import { Route } from 'react-router-dom'
// import {SkillsLangCard} from './components/SkillsLang/SkillsLangCard/SkillsLangCard'
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserProfileHeader />} />
    //     <Route path="/" element={<Experience />} />
    //     <Route path="/" element={<Education />} />
    //     <Route path="/" element={<LicenseCertificate />} />
    //   </Routes>
    <>
      <UserProfileHeader/>
      <Experience/>
      <Education/>
      <LicenseCertificate/> 
      <Skills/>
      <Language/>
    </> 
    // </Router >
  )
}

export default App
