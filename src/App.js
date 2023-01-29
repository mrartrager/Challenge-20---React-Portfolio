// import './App.css' will uncomment when App css is created
import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

function App(){
    // return (
    //     <h1 className="text-3xl font-bold underline">
    //       Hello world!
    //     </h1>
    //   )
    return (
        <>
        <Header/>
        <About/>
        <Project/> 
        {/* 
        
        <Contact/>
        <Footer/> */}
        </>
    )
}
export default App;