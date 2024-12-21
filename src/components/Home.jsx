import '../Home.css'
import Header from './Header';
const Home = () => {
  return (
    <div className="home_container">
        <Header/>
      <div className="content">
        <div className="content_one">
        <p className='home_title'>SO, YOU WANT TO TRAVEL TO</p>
        <span className='title'>SPACE</span>
        <p className="home_about">
          {
            "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!"
          }
        </p>
        </div>
        <div className="button">EXPLORE</div>
      </div>
    </div>
  );
};

export default Home;
