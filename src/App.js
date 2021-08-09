import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Pages/HomePage';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import "./components/app.css";
import ComputerCollege from './components/Pages/ComputerCollege';
import About from './components/Media/About';
import SignIn from './components/Admin/Sign/SignIn';
import Contact from './components/Contact/Contact';
import BiologicalScience from './components/Pages/BiologyCollege';
import Arts from './components/Pages/ArtCollege';
import Medical from './components/Pages/MediaclUni';
import Engineering from './components/Pages/EngineeringUni';
import CompUni from './components/Pages/CompUni';
import IComUni from './components/Pages/IcomUni';
import FA from './components/Pages/FaUni';
import CS from './components/Pages/CsUni';
import MU from './components/Pages/MedUni';
import EU from './components/Pages/EngUni';
import SS from './components/Pages/SocialUni';
import MS from './components/Pages/ManagUni';
import LU from './components/Pages/LawUni';
import RS from './components/Pages/ReligiousUni';
import LS from './components/Pages/LanguageUni';
import Media from './components/Pages/MediaUni';
import AU from './components/Pages/ArtsUni';
import CU from './components/Pages/CommerceUni';
import CM from './components/Pages/CSMaster';
import MM from './components/Pages/MedMaster';
import EM from './components/Pages/EngMaster';
import ManagMaster from './components/Pages/ManagMaster';
import SocialMaster from './components/Pages/SocialMaster';
import lawMaster from './components/Pages/LawMaster';
import ReligiousMaster from './components/Pages/ReligiousMaster';
import LangMaster from './components/Pages/LanguageMaster';
import MediaMaster from './components/Pages/MediaMaster';
import ArtsMaster from './components/Pages/ArtsMaster';
import CommerceMaster from './components/Pages/CommerceMaster';
import Dash from './components/Admin/Dashboard/Dashboard';
import Colleges from './components/Admin/CRUD/Colleges/ViewColleges';
import AddCollege from './components/Admin/CRUD/Colleges/AddCollege';
import EditCollege from './components/Admin/CRUD/Colleges/EditCollege';
import Universities from './components/Admin/CRUD/Universities/ViewUniversities';
import AddUniversity from './components/Admin/CRUD/Universities/AddUniversity';
import EditUniversity from './components/Admin/CRUD/Universities/EditUniversity';

const App = () => {
  return ( 
  <div>
    <Router>
       <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/CompCollege" component={ComputerCollege}/>
          <Route exact path="/BioCollege" component={BiologicalScience} />
          <Route exact path="/arts" component={Arts} />
          <Route exact path="/compUni" component={CompUni} />
          <Route exact path="/icom" component={IComUni} />
          <Route exact path="/fa" component={FA} />
          <Route exact path="/medical" component={Medical} />
          <Route exact path= "/engineering" component={Engineering} />
          <Route exact path= "/csuni" component={CS} />
          <Route exact path= "/MedicalUni" component={MU} />
          <Route exact path= "/EngUni" component={EU} />
          <Route exact path= "/socialUni" component={SS}  />
          <Route exact path= "/managUni" component={MS}  />
          <Route exact path= "/lawUni" component={LU}  />
          <Route exact path= "/ReligiousUni" component={RS}  />
          <Route exact path= "/LanguageUni" component={LS}  />
          <Route exact path= "/MediaUni" component={Media}  />
          <Route exact path= "/ArtsUni" component={AU}  />
          <Route exact path= "/CommerceUni" component={CU}  />
          <Route exact path= "/CsMaster" component={CM}  />
          <Route exact path= "/MedicalMaster" component={MM}  />
          <Route exact path= "/EngMaster" component={EM}  />
          <Route exact path= "/ManagMaster" component={ManagMaster}  />
          <Route exact path= "/SocialMaster" component={SocialMaster}  />
          <Route exact path= "/LawMaster" component={lawMaster}  />
          <Route exact path= "/religiousMaster" component={ReligiousMaster}  />
          <Route exact path= "/LanguageMaster" component={LangMaster}  />
          <Route exact path= "/MediaMaster" component={MediaMaster}  />
          <Route exact path= "/ArtsMaster" component={ArtsMaster}  />
          <Route exact path= "/CommerceMaster" component={CommerceMaster}  />
          <Route exact path="/about" component={About}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path='/dashboard' component={Dash} />
          <Route exact path = '/college' component={Colleges} />
          <Route exact path = '/college/add' component={AddCollege} />
          <Route exact path = '/college/edit/:id' component={EditCollege} />
          <Route exact path = '/university' component={Universities} />
          <Route exact path = '/university/add' component={AddUniversity} />
          <Route exact path = '/university/edit/:id' component={EditUniversity} />
        </Switch>
      <Footer/>
    </Router> 
  </div>
   );
}
export default App;