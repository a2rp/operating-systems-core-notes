// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutOperatingSystems from "./components/aboutOperatingSystems";
import WhatIsOperatingSystem from "./topics/whatIsOperatingSystem";
import OsGoalsAndResponsibilities from "./topics/osGoalsAndResponsibilities";
import KernelBasics from "./topics/kernelBasics";
import SystemCalls from "./topics/systemCalls";
import ProcessAndThread from "./topics/processAndThread";
import CpuScheduling from "./topics/cpuScheduling";
import Synchronization from "./topics/synchronization";
import Deadlocks from "./topics/deadlocks";
import MemoryManagement from "./topics/memoryManagement";
import FileSystems from "./topics/fileSystems";
import IoBasics from "./topics/ioBasics";
import MustKnowQna from "./topics/mustKnowQna";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutOperatingSystems />

                    <WhatIsOperatingSystem />
                    <OsGoalsAndResponsibilities />
                    <KernelBasics />
                    <SystemCalls />
                    <ProcessAndThread />
                    <CpuScheduling />
                    <Synchronization />
                    <Deadlocks />
                    <MemoryManagement />
                    <FileSystems />
                    <IoBasics />

                    <MustKnowQna />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
