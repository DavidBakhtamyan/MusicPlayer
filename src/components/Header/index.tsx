import "./style.css"
import images from "../../assets/images"
function Header() {
  return (
    <header className='Header'>
        <div className="Searchbar">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search for songs, artists etc...'/>
        </div>
        <div className="HeaderControls">
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-bell"></i>
        <img className="profilePic" src={images.profilePic} alt="" />
        </div>
    </header>
  )
}

export default Header