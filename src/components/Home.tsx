import "./styles/Home.css";
// import ReactPdf from 'resume.pdf';

function Home(){ 
    return(<section className="home" id="home">
        <div className="home-content">
            <h1>Hi, I'm Bhumir Patel</h1>
            <h3>Computer Science Student</h3>
            <p>I am currently a student at The University of Tennessee, Knoxville majoring in Computer Science and a minor in Mathematics and Machine Learning. I like to run in my free time and work on engaging projects.</p>
            <div className="info-button" id ="info-button">
                <a href="resume.pdf" download className="buttonsytle">Resume</a>
                <a href="mailto:bhumir2503@gmail.com" className="buttonsytle">Contact</a>
            </div>
            <div className="iconlogo" id = "iconlogo">
                <a target="_blank" href="https://www.linkedin.com/in/bhumir-patel-060261186" className="Icon">
                    <img src="images/linkedin.png"/>
                </a>
                <a target="_blank" href="https://github.com/Bhumir2503" className="Icon">
                    <img src="images/github.png"/>
                </a>
            </div>
        </div>
        <img src="images/man.png" className="man"/>
    </section>);
}

export default Home;