import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div >
      <Nav
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      projectSelected={projectSelected}
      setProjectSelected={setProjectSelected}
      >

      </Nav>
      <main>
      {!projectSelected ? (
        <>
          <About></About>
        </>
      ) : (
        <Projects></Projects>
      )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
