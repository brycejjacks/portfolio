import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <nav id='sideNavBar' className=''>
        <div id='navLogo'><img src='/sprout-0.png' className="App-logo" alt="logo" /></div>
        <ul className='d-flex flex-column justify-content-around'>
          <li><a href='#header'>Intro</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#workExperience'>Work</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#technologies'>Technologies</a></li>
          <li><a href='#awards'>Awards</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      
      <div id='bodyWrapper'>
        <header id='header'className="App-header section">
          <div className='d-flex flex-column '>
            <img className="headshot" src='assets//me/headshotPeru.jpg' alt='headshot'></img>
            <h1>Bryce Jackson</h1>
          </div>
        </header>
      
        <div id='about' className='section'>
          <h1 className='sectionTitle'>About</h1>
          <p>
            I am a well rounded software engineer with refined problem solving skills. As an ambitious young coder, 
            I pride myself on consistently producing quality readable code. I've spent most of my time developing in 
            JS, but I like to consider myself technology agnostic.
          </p>
          <p>
            I am the definition of a people person. I have great communication skills that I use them to get to know 
            those around me. I appreciate human conversation in the work place. Not only do I want to be your coworker, 
            I want to be your friend.
          </p>
          <p>
            Lastly, I believe myself to be the happiest person on Earth lol. I credit much of this joy to my endless 
            feelings of gratitude for all the beautiful things around me. People, nature, complex data algorithms, and 
            donuts to name a few. Book coming soon.
          </p>

        </div>

        <div id='workExperience' className='section'>
          <h1 className='sectionTitle'>Work Experience</h1>
          <div className="mt-5">
            <h5>Shift3 Technologies — Full Stack Developer</h5>
            <strong>JULY  2022 - current</strong>
            <ul>
              <li>Worked on multiple projects as a technical consultant and developer using a variety of  technologies.</li> 
              <li>Collaborated using agile methods.</li>
              <li>Consulted with two clients building a dispatching/LMS (Learning Management System) and a CMS (Content Management System)/E-commerce application.</li>
            </ul>
            Technologies: Bootstrap, Wordpress, Angular, Nest, Node, Postgres, TypeORM, AWS Lambda, AWS S3, Docker
          </div>
          <div className="mt-5">
            <h5>Amiba Tech - Full Stack Consultant</h5>
            <strong>NOVEMBER 2022 - current</strong>
            <ul>
              <li>Co-founded tech consulting company.</li>
              <li>Engineered entire web services from design to deployment options. </li>
              <li>Collaborated using agile methods.</li>
            </ul>
            Technologies: Figma, React, Bootstrap, HTML, CSS, VanillaJS
          </div>
          <div className="mt-5">
            <h5>AlphaWorks — Javascript  Apprentice</h5>
            <strong>AUGUST 2021 - JULY 2022</strong>
            <ul>
              <li>Worked alongside experienced web developers completing variously scaled projects.</li>
              <li>Completed projects in multiple frameworks growing a diverse set of software developing skills.</li>
              <li>Lead small teams, delegated tasks, helped peers, collaborated, and 
              used agile methodologies.</li>
            </ul>
            Technologies: MongoDB, Express, Angular, Node, Heroku, Bootstrap, VanillaJS, React, Git
          </div>
        </div>
      
        <div id='projects' className='section'>
          <h1 className='sectionTitle'>Projects</h1>
          <div className='mt-5'>
            <h5>The Elementals Rock Paper Scissors — MEAN Stack Dev</h5>
            <ul>
              <li>Worked as a project lead of two others, to make a classic game in an original way. Built game logic.</li>
              <li>Set up multiple restful api endpoints. Created user authentication. Used socket io to create a UI that
              persists across browsers.</li>
              Technologies: MongoDB, Express, Angular, Node, SocketIO, Heroku&nbsp; 
              <a href='https://the-elementals-rps.herokuapp.com/home/play' rel='noreferrer'>Link</a>&nbsp; 
              <a href='https://github.com/mean-stack-apprentices/theElementals-RPS' rel='noreferrer'>Github</a>
            </ul>
          </div>
          <div className='mt-5'>
            <h5>Pokemon Pokedex</h5>
            <ul>
              <li>Oversaw restAPI project.</li>
              <li>Cleaned and reused data from a third party.</li>
              <li>Designed, lead, and taught the backend of project.</li>
              Technologies: HTML, CSS, Javascript, Express, Node, RestAPI <a href='https://github.com/brycejjacks/swish-pokedex' rel='noreferrer'>Github</a>
            </ul>
          </div>
        </div>

        <div id='technologies' className='section'>
          <h1 className='sectionTitle'>Technologies</h1>
          <div className='d-flex flex-row flex-wrap justify-content-around'>
            <img src="/assets/technologies/html.png" alt="html" className='technologyIcon'/>
            <img src="/assets/technologies/css.png" alt="css" className='technologyIcon'/>
            <img src="/assets/technologies/vanillajs.png" alt="javascript" className='technologyIcon'/>
            <img src="/assets/technologies/typescript.png" alt="typescript" className='technologyIcon'/>
            <img src="/assets/technologies/angular.svg" alt="angular" className='technologyIcon'/>
            <img src="/assets/technologies/react.png" alt="react" className='technologyIcon'/>
            <img src="/assets/technologies/bootstrap.png" alt="bootstrap" className='technologyIcon'/>
            <img src="/assets/technologies/graphql.png" alt="graphql" className='technologyIcon'/>
            <img src="/assets/technologies/nestjslogo.png" alt="nestjs" className='technologyIcon'/>
            <img src="/assets/technologies/mongo.png" alt="mongodb" className='technologyIcon'/>
            <img src="/assets/technologies/postgresql.png" alt="postgresql" className='technologyIcon'/>
            <img src="/assets/technologies/python.png" alt="python" className='technologyIcon'/>
            <img src="/assets/technologies/nodejslogo.png" alt="nodejs" className='technologyIcon'/>
          </div>
        </div>
        
        <div id='awards' className='section'>
          <h1 className='sectionTitle'>Awards</h1>
          <div className='container mt-5 h-75'>
            <div className='row'>
              <div className='col align-self-start'>
              <img className="awardPhoto" src="/assets/business/NSBExSHG.jpeg" alt="NSBExSHG.jpeg"/>
                <h5>NSBE x Sledgehammer Hackathon Winner</h5>
                <strong>1st Place (2021)</strong>
              </div>
              <div className='col align-self-end'>
                <img className="awardPhoto" src="/assets/business/beautifulBakersfieldGraphic.png" alt="Beautiful Bakersfield Award"/>
                <h5>Beautiful Bakersfield Award Winner</h5>
                <strong>Young Adult (2019)</strong>
              </div>
            </div>
          </div>
        </div>
      
        <div id='contact' className='section'>
          <h1 className='sectionTitle'>Contact</h1>
          <a rel='noreferrer' href='https://github.com/brycejjacks/'><img src="/assets/contact/github.png" alt='github' className='technologyIcon'/></a>
          <a rel='noreferrer' href='https://www.linkedin.com/in/brycejjacks/'><img src="/assets/contact/linkedIn.png" alt='linkedIn' className='technologyIcon'/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
