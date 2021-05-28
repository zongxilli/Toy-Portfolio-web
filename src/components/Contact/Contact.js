import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaGithub,
	FaLinkedin,
} from 'react-icons/fa';
import classes from './Contact.module.css';
import { motion } from 'framer-motion';

const handelURL = (url) => {
	return () => window.open(url, '_blank');
};

const Contact = () => {
	return (
		<div className={classes.Contact} id="contact">
			<motion.h2
				style={{ paddingLeft: '140px' }}
				whileHover={{ scale: 1, x: -100 }}>
				Zongxi2014@Gmail.com
			</motion.h2>
			<div className={classes.ContactIcons}>
				<motion.div whileHover={{ scale: 1.3 }}>
					<FaFacebookSquare
						color="white"
						size="30px"
						style={{ padding: '1%' }}
						onClick={handelURL('https://www.facebook.com/Kenny.Zongxi.li')}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.3 }}>
					<FaInstagramSquare
						color="white"
						size="30px"
						style={{ padding: '1%' }}
						onClick={handelURL('https://www.instagram.com/kennyzongxi/')}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.3 }}>
					<FaGithub
						color="white"
						size="30px"
						style={{ padding: '1%' }}
						onClick={handelURL('https://github.com/zongxilli')}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.3 }}>
					<FaLinkedin
						color="white"
						size="30px"
						style={{ padding: '1%' }}
						onClick={handelURL(
							'https://www.linkedin.com/in/zongxi-kenny-li-zongxi2014/'
						)}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
