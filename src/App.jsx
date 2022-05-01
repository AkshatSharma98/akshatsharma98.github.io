import React from 'react';
import { About, Contact, Footer, Header,
         Nav, Experience, Portfolio } from './components';
import ContactType2 from './components/contact/ContactType2';

const App = () => {
  return (
    <div>
       <Header />
       <Nav />
       <Experience />
       <About />
       <ContactType2 />
       <Footer />
    </div>
  )
}

export default App