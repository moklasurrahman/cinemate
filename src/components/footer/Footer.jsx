import React from 'react'
import './footer.scss'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div className="footer">
       
        <div className="left">
          &copy; 2023 Cinemate.All Right Reserved
        </div>

        <div className="right">
          <div className="footList">
            <a className='link' href="https://www.instagram.com/moklasurrahmantaj/" target='_blank' rel='noreferrer'><InstagramIcon className='icon'/> instagram</a>
            <a className='link' href="https://www.facebook.com/profile.php?id=100004143574385"  target='_blank' rel='noreferrer'> <FacebookIcon className='icon'/> facebook</a>
            <a className='link' href="https://github.com/moklasurrahman" target='_blank' rel='noreferrer'> <GitHubIcon className='icon'/> Github</a>
          </div>
        </div>


      </div>
    </footer>
  )
}

export default Footer