import './topbar.scss'
import {Mail, Person} from '@mui/icons-material'

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>genius.</a>
                <div className="itemContainer">
                    <Person className='icon'/>
                    <span>+91 1234567890</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon'/>
                    <span>Y2Z2a@example.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" id="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar