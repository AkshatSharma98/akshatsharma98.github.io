import React from 'react';
import { About, Contact, Footer, Header,
         Nav, Experience, Portfolio } from './components';
import ContactType2 from './components/contact/ContactType2';

const App = () => {
  return (
    <div>
       <Header />
       <Nav />
       <About />
       <Portfolio />
       <ContactType2 />
       <Experience />
       <Footer />
    </div>
  )
}

export default App