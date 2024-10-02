/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './Navbar.css';
import menu_icon from '../../assets/Images/menu.png';
import logo from '../../assets/Images/logo.png';
import search_icon from '../../assets/Images/search.png';
import upload_icon from '../../assets/Images/upload.png';
import more_icon from '../../assets/Images/more.png';
import notification_icon from '../../assets/Images/notification.png';
import profile_icon from '../../assets/Images/jack.png';
const Navbar = ({setSideBar,sidebar}) => {
  return (
    <>
      <section>
        <nav className='flex-div'>
          <div className="nav-left flex-div">
            <img className='menu-icon' src={menu_icon} alt="" onClick={()=>setSideBar(!sidebar)} />
            <img className='logo' src={logo} alt="" />
          </div>

          <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
              <input type="text" name="searchlogo" id="searchlogo" />
              <img src={search_icon} alt="search_icon" />
            </div>
          </div>

          <div className='nav-right flex-div'>
            <img src={upload_icon} alt="upload_icon" />
            <img src={more_icon} alt="more_icon" />
            <img src={notification_icon} alt="notification_icon" />
            <img src={profile_icon} className='user-icon' alt="profile_icon" />
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar;