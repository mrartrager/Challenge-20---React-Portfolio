import { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Project from './pages/Project';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
// function App(){

//     const [currentPage, setCurrentPage ] = useState('about')
//     // return (
//     //     <h1 className="text-3xl font-bold underline">
//     //       Hello world!
//     //     </h1>
//     //   )
//     return (
//         <>
//         <Nav setCurrentPage/>
//         {/* <Header/>
//         <About/>
//         <Project/> 
//         <Contact/>
//         <Footer/> */}
//         {/* 


//         */}
//         </>
//     )
// }
// export default App;


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
