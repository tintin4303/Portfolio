import dogImg from '../assets/images/dogs.jpeg';

function Intro() {
  return (
    <section>
      <div className="container p-5 mt-5" id="intro-grid-container">
        <div id="intro">
          <h1 id="name">Hello. I'm Tin.</h1>
          <p className="lead">I'm an enthusiastic programmer.</p>
        </div>
        <img src={dogImg} alt="dogs running by a beach" className="img-fluid d-block" width="400" id="dog-image" />
      </div>
    </section>
  );
}
export default Intro;
