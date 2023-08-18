import React, { Suspense } from "react";

const Header = React.lazy(() => import("./components/Header/Header"));
const Hero = React.lazy(() => import("./components/Hero/Hero"));
const TabsSection = React.lazy(
  () => import("./components/TabsSection/TabsSection")
);

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <TabsSection />
        </Suspense>
      </main>
    </>
  );
}

export default App;
