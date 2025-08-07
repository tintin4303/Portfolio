import javaLogo from '../assets/images/java.svg';
import pythonLogo from '../assets/images/python.svg';
import jsLogo from '../assets/images/js.svg';
import pgLogo from '../assets/images/postgresql.svg';
import reactLogo from '../assets/images/react.png';
import nodeLogo from '../assets/images/node.svg';

function Logos() {
  return (
    <section>
      <div className="container d-flex justify-content-center mb-5">
        <div id="logos">
          <img src={javaLogo} alt="java" height="40" />
          <img src={pythonLogo} alt="python" height="40" />
          <img src={jsLogo} alt="javascript" height="40" />
          <img src={pgLogo} alt="postgresql" height="40" />
          <img src={reactLogo} alt="react" height="40" />
          <img src={nodeLogo} alt="node" height="40" />
        </div>
      </div>
    </section>
  );
}
export default Logos;
