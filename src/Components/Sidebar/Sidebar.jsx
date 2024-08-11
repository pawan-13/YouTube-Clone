import './Sidebar.css';
import home from '../../assets/Images/home.png';
import game_icon from '../../assets/Images/game_icon.png';
import automobiles from '../../assets/Images/automobiles.png';
import sports from '../../assets/Images/sports.png';
import entertainment from '../../assets/Images/entertainment.png';
import tech from '../../assets/Images/tech.png';
import music from '../../assets/Images/music.png';
import blogs from '../../assets/Images/blogs.png';
import news from '../../assets/Images/news.png';
import jack from '../../assets/Images/jack.png';
import simon from '../../assets/Images/simon.png';
import tom from '../../assets/Images/tom.png';
import megan from '../../assets/Images/megan.png';
import cameron from '../../assets/Images/cameron.png';


const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='sortcut-links'>
        <div className="side-link">
          <img src={home} alt="home" /><p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="game_icon" /><p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="automobiles" /><p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="sports" /><p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="entertainment" /><p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="tech" /><p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music" /><p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="blogs" /><p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="jack" /><p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="simon" /><p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="tom" /><p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="megan" /><p>5-Minutes Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="cameron" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;