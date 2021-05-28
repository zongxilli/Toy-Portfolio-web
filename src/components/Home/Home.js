import classes from './Home.module.css';
import code from './../../img/investment.svg';
import binaryWorld from './../../img/instant_support.svg';
import WaveLine from './WaveLine';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<div className={classes.Home} id="home">
			<WaveLine />
			<div className={classes.Container}>
				<h1 className={classes.Hello}>Hello, world.</h1>
				<h1>Welcome to my website</h1>
			</div>
			<img className={classes.Code} src={code} alt="code"></img>
			<motion.img
				className={classes.BinaryWorld}
				src={binaryWorld}
				alt={'binaryWorld'}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{delay: 1.4}}></motion.img>
		</div>
	);
};

export default Home;
