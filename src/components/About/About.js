import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader';
import me from './../../img/Me.jpg';

const About = () => {
	return (
		<div className={classes.AboutMe} id="about" >
			<PageHeader title={'About Me'} />
			<div className={classes.Container}>
				<div className={classes.Text}>
					<h2>Hello! I'm Kenny(Zongxi Li)</h2>
					<p>
						I am a Candidate for Bachelor of Science with Mathematics and
						Statistics double majors of University of Toronto Scarborough. Now,
						I am pushing Information Technology solutions grad-program in Humber
						college and seeking for a software developer job.
					</p>
				</div>
				<div className={classes.Photo}>
					<img className={classes.Me} src={me} alt="me"></img>
				</div>
			</div>
		</div>
	);
};

export default About;
