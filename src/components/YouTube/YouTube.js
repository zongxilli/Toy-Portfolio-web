import classes from './YouTube.module.css';
import PageHeader from './../PageHeader/PageHeader';
import cleanCode from './../../img/Montreal_Me.jpg';
import javaStreams from './../../img/Lavender_Cath.jpg';
import lambdasAndHof from './../../img/Bahamas_Me_and_Cath.jpg';
import background from './../../img/background.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const youtubeVideo = (url, thumbnail, description) => {
	return (
		<div className={classes.VideoContainer}>
			<div className={classes.Thumbnail}>
				<img src={thumbnail} alt="thumbnail"></img>
			</div>
			<div className={classes.Text}>
				<p>{description}</p>
			</div>
		</div>
	);
};

const description1 = 'Me at Mount Royal!';
const description2 = 'She at Terre Bleu!';
const description3 = 'We at Blue Lagoon Island!';

const YouTube = () => {
	const { ref, inView } = useInView({
		threshold: 0.2
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					bounce: 0.3,
				},
			});
		}
		if (!inView) {
			animation.start({ x: '-100vw' });
		}
		// eslint-disable-next-line
	}, [inView]);

	return (
		<div className={classes.YouTube} id="youtube">
			<img className={classes.Background} src={background} alt="background" />
			<PageHeader title={'I love traveling!'} />
			<div ref={ref} className={classes.YouTubeContent}>
				<div className={classes.Paragraph}>
					<p>I love traveling especially with my baby!</p>
				</div>
				<motion.div className={classes.Videos} animate={animation}>
					{youtubeVideo(
						'https://youtu.be/hInTIsAYC4I',
						cleanCode,
						description1
					)}
					{youtubeVideo(
						'https://youtu.be/hInTIsAYC4I',
						javaStreams,
						description2
					)}
					{youtubeVideo(
						'https://youtu.be/hInTIsAYC4I',
						lambdasAndHof,
						description3
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default YouTube;
