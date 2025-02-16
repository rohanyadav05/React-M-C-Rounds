import Find3rdLargestEle from "./components/arrayQuestions/Find3rdLargestEle";
import UniqueElement from "./components/arrayQuestions/UniqueElement";
import '../src/App.css';
import NavbarPractice from "./components/MC_Rounds/selfPractice/NavbarPractice";
import StringMap from "./components/mapQuestions/StringMap";
import ModalCallingContainer from "./components/MC_Rounds/customModal/ModalCallingContainer";
import Counter from "./components/MC_Rounds/contextApi/Counter";
import {CounterProvider} from './components/MC_Rounds/contextApi/CounterContext'
import ProgressBar from "./components/MC_Rounds/progressBar/ProgressBar";
import IntervalInsertion from "./components/arrayQuestions/IntervalInsertion";
import SearchBar from "./components/MC_Rounds/searchBar/SearchBar";
import Pagination from "./components/MC_Rounds/pagination/Pagination";
import LongestPalindromicSubstring from "./components/stringQues/LongestPalindromicSubstring";
import ExtractAllNumbers from "./components/arrayQuestions/ExtractAllNumbers";
import DeppCloneEx from "./components/ShallowDeepClone/DeppCloneEx";
import GridLight from "./components/MC_Rounds/gridLights/GridLight";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Rohan's App
      </header>
      {/* <Find3rdLargestEle /> */}
      {/* <UniqueElement/> */}
      
      {/* <NavbarPractice /> */}
      {/* <StringMap /> */}
      {/* <ModalCallingContainer /> */}
      {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}
      {/* <ProgressBar /> */}
      {/* <SearchBar />
      <Pagination/> */}
      {/* <LongestPalindromicSubstring/> */}
      {/* <ExtractAllNumbers /> */}
      {/* <DeppCloneEx /> */}
      <GridLight />
    </div>
  );
}

export default App;
