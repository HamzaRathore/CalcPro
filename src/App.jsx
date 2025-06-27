import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./pages/Main";
import Layout from "./pages/Layout";
import BudgetPlannerCalculator from './components/financeAndBusiness/BudgetPlannerCalculator';
import LoanEMICalculator from './components/financeAndBusiness/LoanEMICalculator';
import MortgageCalculator from './components/financeAndBusiness/MortgageCalculator';
import CompoundInterestCalculator from './components/financeAndBusiness/CompoundInterestCalculator';
import CurrencyConverter from './components/financeAndBusiness/CurrencyConverter';
import RetirementSavingsCalculator from './components/financeAndBusiness/RetirementSavingsCalculator';
import ProfitMarginCalculator from './components/financeAndBusiness/ProfitMarginCalculator';
import TaxCalculator from "./components/financeAndBusiness/TaxCalculator";
import BmiCalculator from './components/healthAndFitness/BmiCalculator';
import CalorieIntakeCalculator from './components/healthAndFitness/CalorieIntakeCalculator';
import BmrCalculator from './components/healthAndFitness/BmrCalculator';
import BodyFatCalculator from './components/healthAndFitness/BodyFatCalculator';
import PregnancyDueCalculator from './components/healthAndFitness/PregnancyDueCalculator';
import WaterIntakeCalculator from './components/healthAndFitness/WaterIntakeCalculator';
import OhmsLawCalculator from './components/scienceEngineering/OhmsLawCalculator';
import PhysicsForceCalculator from './components/scienceEngineering/PhysicsForceCalculator';
import MolarityCalculator from './components/scienceEngineering/MolarityCalculator';
import UnitConverter from './components/scienceEngineering/UnitConverter';
import SpeedDistanceTimeCalculator from './components/scienceEngineering/SpeedDistanceTimeCalculator';
import PowerConsumption from './components/scienceEngineering/PowerConsumption';
import PercentageCalculator from './components/mathsCalculators/PercentageCalculator';
import AreaAndPerimeter from './components/mathsCalculators/AreaAndPerimeter';
import ProbabilityCalculator from './components/mathsCalculators/ProbabilityCalculator';
import AlgebraSolver from './components/mathsCalculators/AlgebraSolver';
import AgeCalculator from './components/dailyLifeAndMiscellaneous/AgeCalculator';
import DateDifferenceCalculator from './components/dailyLifeAndMiscellaneous/DateDifferenceCalculator';
import LoveCompatibilityCalculator from './components/dailyLifeAndMiscellaneous/LoveCompatibilityCalculator';
import TipCalculator from './components/dailyLifeAndMiscellaneous/TipCalculator';
import TimeZoneConverter from './components/dailyLifeAndMiscellaneous/TimeZoneConverter';
import SimpleAndCompoundInterest from "./components/mathsCalculators/SimpleAndCompoundInterest";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <SearchProvider>
      <Routes>
         
        <Route path="/" element={<Layout />}>
          {/* Finance */}
          <Route path="/finance/budget-planner" element={<BudgetPlannerCalculator />} />
          <Route path="/finance/loan-emi" element={<LoanEMICalculator />} />
          <Route path="/finance/mortage" element={<MortgageCalculator/>}/>
          <Route path="/finance/compound-interest" element={<CompoundInterestCalculator/>}/>
          <Route path="/finance/currency" element={<CurrencyConverter/>}/>
          <Route path="/finance/retirement-saving" element={<RetirementSavingsCalculator/>}/>
          <Route path="/finance/profit-margin" element={<ProfitMarginCalculator/>}/>
          <Route path="/finance/tax-calculator" element={<TaxCalculator/>}/>

    
          {/* Health */}
          <Route path="/health/bmi-calculator" element={<BmiCalculator/>}/>
          <Route path="/health/calorie-intake" element={<CalorieIntakeCalculator/>}/>
          <Route path="/health/bmr-calculator" element={<BmrCalculator/>}/>
          <Route path="/health/body-fat" element={<BodyFatCalculator/>}/>
          <Route path="/health/pregnancy-due-date" element={<PregnancyDueCalculator/>}/>
          <Route path="/health/water-intake" element={<WaterIntakeCalculator/>}/>


          {/* Science */}
          <Route path="/science/ohms-law" element={<OhmsLawCalculator/>}/>
          <Route path="/science/force" element={<PhysicsForceCalculator/>}/>
          <Route path="/science/molarity" element={<MolarityCalculator/>}/>
          <Route path="/science/unit-converter" element={<UnitConverter/>}/>
          <Route path="/science/speed-distance-time" element={<SpeedDistanceTimeCalculator/>}/>
          <Route path="/science/power-consumption" element={<PowerConsumption/>}/>


          {/* Maths */}
          <Route path="/math/percentage-calculator" element={<PercentageCalculator/>}/>
          <Route path="/math/interest-calculator" element={<SimpleAndCompoundInterest/>}/>
          <Route path="/math/quadratic-equation" element={<AlgebraSolver/>}/>
          <Route path="/math/area-perimeter" element={<AreaAndPerimeter/>}/>
          <Route path="/math/probability-calculator" element={<ProbabilityCalculator/>}/>


          {/* Daily Life and Miscellaneous */}

           <Route path="/daily/age" element={<AgeCalculator/>}/>
           <Route path="/daily/date-difference" element={<DateDifferenceCalculator/>}/>
           <Route path="/daily/love-compatibility" element={<LoveCompatibilityCalculator/>}/>
           <Route path="/daily/tip-calculator" element={<TipCalculator/>}/>
           <Route path="/daily/time-zone-calculator" element={<TimeZoneConverter/>}/>

        </Route>
         <Route path="/termsAndCondition" element={<TermsAndCondition/>}/>
         <Route path ="/privacy-policy" element={<PrivacyPolicy/>}/>
        
      </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
