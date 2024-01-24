import './Contact.css'


const Contact = () => {
  return (
    <div id='contact' className='contact-section'>
        <div className='contact-icons'>
            <i className="fa-brands fa-square-instagram focus"> </i>
            <i className="fa-solid fa-envelope focus"> </i>
            <a 
                className='link' 
                href='https://www.linkedin.com/in/roshanpatil05/' target='_blank'>
                <i className="fa-brands fa-linkedin focus"> </i>
            </a>
        </div>
        <p className='footer-note'>
            Copyright © 2024. All rights reserved
        </p>
    </div>
  )
}

export default Contact