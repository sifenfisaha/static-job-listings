import React from "react";
import Header from "./components/Header";
import JobListC from "./components/Job/JobList";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-16">
        <JobListC />
      </main>
    </>
  );
};

export default App;
