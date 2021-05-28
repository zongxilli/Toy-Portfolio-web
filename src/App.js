import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';
import Contact from './components/Contact/Contact';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Skills />
			<YouTube />
			<Contact />
			
		</div>
	);
};

export default App;
