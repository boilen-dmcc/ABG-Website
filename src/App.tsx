import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Page2 } from "@/pages/Page2";
import { CompanyTaqat } from "@/pages/CompanyTaqat";
import { CompanyNorthernCovenant } from "@/pages/CompanyNorthernCovenant";
import { CompanyBryarTransport } from "@/pages/CompanyBryarTransport";
import { CompanyBarhamBlackGold } from "@/pages/CompanyBarhamBlackGold";
import { CompanyRahand } from "@/pages/CompanyRahand";
import { CompanyBinaaAlSahraa } from "@/pages/CompanyBinaaAlSahraa";
import { CompanyGashbin } from "@/pages/CompanyGashbin";
import { CompanyAlBarhamDmcc } from "@/pages/CompanyAlBarhamDmcc";
import { AlBarhamGroup } from "@/pages/AlBarhamGroup";
import { ServiceEngineering } from "@/pages/ServiceEngineering";
import { ServiceProcurement } from "@/pages/ServiceProcurement";
import { ServiceConstruction } from "@/pages/ServiceConstruction";
import { ServiceCommissioning } from "@/pages/ServiceCommissioning";
import { ServiceEpcc } from "@/pages/ServiceEpcc";
import { ServiceTransportation } from "@/pages/ServiceTransportation";
import { SolutionOilGas } from "@/pages/SolutionOilGas";
import { SolutionGasProcessing } from "@/pages/SolutionGasProcessing";
import { SolutionPetrochemicals } from "@/pages/SolutionPetrochemicals";
import { SolutionPowerGeneration } from "@/pages/SolutionPowerGeneration";
import { SolutionInfrastructure } from "@/pages/SolutionInfrastructure";
import { SolutionProjectExecution } from "@/pages/SolutionProjectExecution";
import { SolutionEpccExecution } from "@/pages/SolutionEpccExecution";
import { About } from "@/pages/About";
import { ChairmansMessage } from "@/pages/ChairmansMessage";
import { GrowthStrategy } from "@/pages/GrowthStrategy";
import { Projects } from "@/pages/Projects";
import { Careers } from "@/pages/Careers";
import { Contact } from "@/pages/Contact";
import { Certifications } from "@/pages/Certifications";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Page2 />} />
        <Route path="/companies" element={<AlBarhamGroup />} />
        <Route path="/companies/taqat" element={<CompanyTaqat />} />
        <Route
          path="/companies/northern-covenant"
          element={<CompanyNorthernCovenant />}
        />
        <Route
          path="/companies/bryar-transport"
          element={<CompanyBryarTransport />}
        />
        <Route
          path="/companies/barham-black-gold"
          element={<CompanyBarhamBlackGold />}
        />
        <Route path="/companies/rahand" element={<CompanyRahand />} />
        <Route
          path="/companies/binaa-al-sahraa"
          element={<CompanyBinaaAlSahraa />}
        />
        <Route path="/companies/gashbin" element={<CompanyGashbin />} />
        <Route
          path="/companies/al-barham-dmcc"
          element={<CompanyAlBarhamDmcc />}
        />
        <Route
          path="/services/engineering"
          element={<ServiceEngineering />}
        />
        <Route
          path="/services/procurement"
          element={<ServiceProcurement />}
        />
        <Route
          path="/services/construction"
          element={<ServiceConstruction />}
        />
        <Route
          path="/services/commissioning"
          element={<ServiceCommissioning />}
        />
        <Route path="/services/epcc" element={<ServiceEpcc />} />
        <Route
          path="/services/transportation"
          element={<ServiceTransportation />}
        />
        <Route path="/solutions/oil-refining" element={<SolutionOilGas />} />
        <Route
          path="/solutions/gas-processing"
          element={<SolutionGasProcessing />}
        />
        <Route
          path="/solutions/petrochemicals"
          element={<SolutionPetrochemicals />}
        />
        <Route
          path="/solutions/power-generation"
          element={<SolutionPowerGeneration />}
        />
        <Route
          path="/solutions/infrastructure"
          element={<SolutionInfrastructure />}
        />
        <Route
          path="/solutions/end-to-end-project-delivery-financing-solutions"
          element={<SolutionProjectExecution />}
        />
        <Route
          path="/solutions/project-execution-framework"
          element={<SolutionEpccExecution />}
        />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/chairmans-message" element={<ChairmansMessage />} />
        <Route
          path="/growth-expansion-strategy"
          element={<GrowthStrategy />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};
