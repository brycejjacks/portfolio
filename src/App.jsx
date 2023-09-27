import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <nav id='sideNavBar' className=''>
        <div id='navLogo'><img src='sprout-0.png' className="App-logo" alt="logo" /></div>
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
          <div className='row '>
            <div className='card col-md'> 
              <p className='card-text'>
                I am a well rounded software engineer with refined problem solving skills. As an ambitious young coder, 
                I pride myself on consistently producing quality readable code. I've spent most of my time developing in 
                TS, but I like to consider myself technology agnostic.
              </p>
            </div>
            <div className='card col-md'>
              <p className='card-text'>
                I am the definition of a people person. I have great communication skills that I use them to get to know 
                those around me. I appreciate human conversation in the work place. Not only do I want to be your coworker, 
                I want to be your friend.
              </p>
            </div>
            <div className='card col-md'>
              <p className='card-text'>
                Lastly, I believe myself to be the happiest person on Earth lol. I credit much of this joy to my endless 
                feelings of gratitude for all the beautiful things around me. People, nature, complex data algorithms, and 
                donuts to name a few. Book coming soon.
              </p>
            </div>
          </div>

        </div>

        <div id='workExperience' className='section'>
          <h1 className='sectionTitle'>Work Experience</h1>
          <div className="card mt-5">
            <h5>Contracted Technology Consultant - Software Engineer</h5>
            <h6 class="card-subtitle mb-2 text-muted">JULY 2023 - CURRENT</h6>
            <strong></strong>
            <ul>
              <li>Developed dispatching software using Angular, NestJS, PostgreSQL, TypeORM, multiple AWS Cloud Products, Docker, Twilio, Github Actions for PG&E and SDG&E, used by 1,000+ users.</li>
              <li>Implemented automated solutions for management, resulting in a 50% reduction in clients' work time.</li>
              <li>Collaborated directly with clients to ensure optimum satisfaction while navigating the project lifecycle within an agile/scrum team of four.</li>
            </ul>

          </div>
          <div className="card mt-5">
            <h5>StreamAlign Software - Co-Founder</h5>
            <h6 class="card-subtitle mb-2 text-muted">SEPTEMBER 2023 - CURRENT</h6>
            <ul>
              <li>Co-founded tech consulting company.</li>
              <li>Adapted and maintained open-source project.</li>
              <li>Engineered entire web services from design to deployment options. </li>
              <li>Collaborated using agile methods.</li>
            </ul>
            <a className='card-link' href='https://www.streamalign.io/' rel='noreferrer'>Landing Page</a>
          </div>
          <div className="card mt-5">
            <h5>Bitwise Industries - Full Stack Developer</h5>
            <h6 class="card-subtitle mb-2 text-muted">AUGUST 2021 - MAY 2023</h6>
            <ul>
              <li>Delivered 4 projects using multiple technologies, including Angular, NestJS, Wordpress, React, Django, Express.js, showcasing versatility, range, and robust programming concepts understanding.</li> 
              <li>Contributed to the growth of 10+ coworkers by providing walkthroughs and detailed bug-resolution demos, increasing project delivery timeliness and programming aptitude across the entire company.</li>
              <li>Collaborated closely with clients to gather requirements, provide technical insights, and translate business needs into effective software solutions.</li>
            </ul>
            {/* Technologies: Bootstrap, Wordpress, Angular, Nest, Node, Postgres, TypeORM, AWS Lambda, AWS S3, Docker, CircleCI */}
          </div>
          <div className="card mt-5">
            <h5>AlphaWorks — Javascript Instructor</h5>
            <h6 class="card-subtitle mb-2 text-muted">AUGUST 2021 - JULY 2022</h6>
            <ul>
              <li>Instructed a diverse cohort of 12 students in foundational JavaScript concepts, helping to develop practical coding skills, while emphasizing clean code practices.</li>
              <li>Conducted weekly tutorials, translating complex coding concepts into intuitive and intelligible lessons.</li>
            </ul>
            Technologies: Express, Node, Bootstrap, VanillaJS, HTML, CSS, Git
          </div>
        </div>
      
        <div id='projects' className='section'>
          <h1 className='sectionTitle'>Projects</h1>
          <div className='card mt-5'>
            <div className='card-body'>
              <h5 className='card-title'>CareerCompass</h5>
              <h6 class="card-subtitle mb-2 text-muted">AI Powered Chrome Extension</h6>
              <div className='card-text'>
                <ul>
                  <li>Invented an original AI-based solution to job searching by leveraging ChatGPT, resulting in a 20% reduction in users' search time.</li>
                  <li>Collaborated with two others to build a Google Chrome Extensions in Vanilla JS.</li>
                  <li>Optimized load times and SEO by utilizing static site generation with GatsbyJS.</li>
                  Technologies: ChatGPT, JavaScript&nbsp; 
                </ul>
              </div>
              <a className='card-link' href='https://careercompass.streamalign.io/' rel='noreferrer'>Landing Page</a>
            </div>
          </div>
          <div className='card mt-5'>
            <div className='card-body'>
              <h5 className='card-title'>The Elementals Rock Paper Scissors</h5>
              <h6 class="card-subtitle mb-2 text-muted">Lead Developer</h6>
              <div className='card-text'>
                <ul>
                  <li>Worked as a project lead of two others, to make a classic game in an original way. Built game logic.</li>
                  <li>Set up multiple restful api endpoints. Created user authentication. Used socket io to create a UI that
                  persists across browsers.</li>
                  Technologies: MongoDB, Express, Angular, Node, SocketIO, Heroku&nbsp; 
                </ul>
              </div>
              <a className='card-link' href='https://theelementals-rps.onrender.com/home/play' rel='noreferrer'>Project Link</a>
              <a className='card-link' href='https://github.com/mean-stack-apprentices/theElementals-RPS' rel='noreferrer'>Github</a>
            </div>
          </div>
          <div className='card mt-5'>
            <h5>Pokemon Pokedex</h5>
            <ul className='card-text'>
              <li>Oversaw restAPI project.</li>
              <li>Cleaned and reused data from a third party.</li>
              <li>Designed, lead, and taught the backend of project.</li>
              Technologies: HTML, CSS, Javascript, Express, Node, RestAPI
            </ul>
              <a className='card-link' href='https://github.com/brycejjacks/swish-pokedex' rel='noreferrer'>Github</a>
          </div>
        </div>

        <div id='technologies' className='section'>
          <h1 className='sectionTitle'>Technologies</h1>
          <div className='d-flex flex-row flex-wrap justify-content-around'>
            <img src="assets/technologies/java-logo-cut.png" alt="java" className='technologyIcon'/>
            <img src="assets/technologies/html.png" alt="html" className='technologyIcon'/>
            <img src="assets/technologies/css.png" alt="css" className='technologyIcon'/>
            <img src="assets/technologies/vanillajs.png" alt="javascript" className='technologyIcon'/>
            <img src="assets/technologies/typescript.png" alt="typescript" className='technologyIcon'/>
            <img src="assets/technologies/angular.svg" alt="angular" className='technologyIcon'/>
            <img src="assets/technologies/react.png" alt="react" className='technologyIcon'/>
            <img src="assets/technologies/bootstrap.png" alt="bootstrap" className='technologyIcon'/>
            <img src="assets/technologies/graphql.png" alt="graphql" className='technologyIcon'/>
            <img src="assets/technologies/nestjslogo.png" alt="nestjs" className='technologyIcon'/>
            <img src="assets/technologies/mongo.png" alt="mongodb" className='technologyIcon'/>
            <img src="assets/technologies/postgresql.png" alt="postgresql" className='technologyIcon'/>
            <img src="assets/technologies/python.png" alt="python" className='technologyIcon'/>
            <img src="assets/technologies/nodejslogo.png" alt="nodejs" className='technologyIcon'/>
          </div>
        </div>
        
        <div id='awards' className='section'>
          <h1 className='sectionTitle'>Awards</h1>
          <div className='container mt-5 h-75'>
            <div className='row'>
              <div className='col align-self-start'>
              <img className="awardPhoto" src="assets/business/NSBExSHG.jpeg" alt="NSBExSHG.jpeg"/>
                <h5>NSBE x Sledgehammer Hackathon Winner</h5>
                <strong>1st Place (2021)</strong>
              </div>
              <div className='col align-self-end'>
                <img className="awardPhoto" src="assets/business/beautifulBakersfieldGraphic.png" alt="Beautiful Bakersfield Award"/>
                <h5>Beautiful Bakersfield Award Winner</h5>
                <strong>Young Adult (2019)</strong>
              </div>
            </div>
          </div>
        </div>
      
        <div id='contact' className='section'>
          <h1 className='sectionTitle'>Contact</h1>
          <a rel='noreferrer' href='https://github.com/brycejjacks/'><img src="assets/contact/github.png" alt='github' className='technologyIcon'/></a>
          <a rel='noreferrer' href='https://www.linkedin.com/in/brycejjacks/'><img src="assets/contact/linkedIn.png" alt='linkedIn' className='technologyIcon'/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
