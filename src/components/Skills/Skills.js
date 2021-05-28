import classes from './Skills.module.css';
import PageHeader from './../PageHeader/PageHeader';
import codeThinking from './../../img/virtual_reality.svg';

const listTitleStyle = {
	fontWeight: 900,
	color: '#9B1FE8',
	marginBottom: '4px',
};

// const backendSkills = (
// 	<ul>
// 		<li>BACKEND</li>
// 		<li>Scala - Java - SQL</li>
// 		<li>AKKA - Spring Boot - Slick</li>
// 	</ul>
// );

const frontendSkills = (
	<ul>
		<li style={listTitleStyle}>FRONTEND</li>
		<li>ReactJS - HTML - CSS</li>
		<li>Redux</li>
	</ul>
);

const otherSkills = (
	<ul>
		<li style={listTitleStyle}>OTHER</li>
		<li>Git - Json - R </li>
		<li>Python - Objective C - Tableau</li>
	</ul>
);

const basicSkills = (
	<ul>
		<li style={listTitleStyle}>BASIC</li>
		<li>Microsoft Word - Microsoft Excel - Microsoft PowerPoint</li>
	</ul>
);

const totalSkills = [frontendSkills, basicSkills, otherSkills];

const Skills = () => {
	return (
		<div className={classes.Skills} id="skills">
			<PageHeader title={'What about the Skills?'} />
			<p>
				I'm a life long learner and enjoy learning new stuff! Below are some
				programming languages, toolkits, frameworks and libraries that I worked
				with and like.
			</p>
			<div className={classes.Container}>
				<img src={codeThinking} alt="CodeThinking" />
				{totalSkills.map((skill) => {
					return <div className={classes.List}>{skill}</div>;
				})}
			</div>
		</div>
	);
};

export default Skills;
