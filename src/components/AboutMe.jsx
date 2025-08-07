import profileImg from '../assets/images/Nyunt Tin.jpeg';

function AboutMe() {
  return (
    <section>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-md-7 order-2 order-md-2 px-5 align-self-center" id="about-me">
            <h2 className="featurette-heading fw-normal lh-1">Aspiring Full-Stack Developer.</h2>
            <p className="lead">I'm a Computer Science student at Assumption University of Thailand. I create aesthetic websites, apps, and designs.</p>
          </div>
          <div className="col-md-5 order-1 order-md-1 text-center align-self-center pb-5 pb-md-0">
            <img src={profileImg} alt="nyunt tin" width="250" id="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
