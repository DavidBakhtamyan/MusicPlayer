import './style.css';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <h2 className='SidebarHeading'>Musify</h2>
        <ul className='SidebarList'>
            <li className='active'><i className="fa fa-house"></i>HOME</li>
            <li><i className="fa fa-search"></i>BROWSE</li>
            <li><i className="fa fa-microphone"></i>RADIO</li>
        </ul>
        <span className='SidebarListHeading'>LIBRARY</span>
        <ul className='SidebarList'>
            <li><i className='fa fa-clock'></i>RECENTLY PLAYED</li>
            <li><i className='fa fa-heart' ></i>FAVORIYE SONGS</li>
            <li><i className='fa fa-user'></i>ARTIST</li>
            <li><i className='fa fa-compact-disc' ></i>ALBUMS</li>
        </ul>
        <span className='SidebarListHeading'>PLAYLISTS</span>
        <ul className='SidebarList'>
            <li>GOSPEL RAP TOP 50</li>
            <li>PRAISE JAMZ 30</li>
            <li>HILLSONGS N BETHEL</li>
        <button className='SidebarBtn'><i className="fa fa-plus"></i> ADD NEW PLAYLIST</button>
        </ul>
    </div>
  )
}

export default Sidebar