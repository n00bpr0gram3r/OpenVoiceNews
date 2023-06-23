import React from 'react'
function About() {
  return (
    <div>
      <div className="container px-5" style={{ marginTop: '80px' }}>

        <h2 className='text-center mb-3'>About OpenVoiceNews</h2>
        <p>Welcome to OpenVoiceNews, a personal project dedicated to delivering news content for your reading pleasure. Created with passion and a commitment to providing reliable information, OpenVoiceNews is a one-person endeavor.</p>

        <h3 className='text-center mb-3'>Objective</h3>
        <p>Driven by a deep love for news and an unwavering belief in the power of knowledge, this website is a labor of love. Our focus is solely on delivering high-quality news articles to keep you informed and up-to-date.</p>

        <h3 className='text-center mb-3'>Team</h3>
        <p>While OpenVoiceNews may not have a large team behind it, rest assured that every effort is made to ensure accuracy and integrity in the content we provide. Join us on this personal news journey and explore the world through the lens of OpenVoiceNews.</p>
      </div>

      {/* <footer className='fixed-bottom bg-secondary'>Hey this is footer</footer> */}

      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
     
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-dark fixed-bottom"
          style={{ backgroundColor: '#ECEFF1' }}
        >
          {/* <!-- Section: Social media --> */}
          <section
            className="d-flex justify-content-between text-white"
            style={{ backgroundColor: 'black' }}

          >
            {/* <!-- Left --> */}
            <div className="mx-2">
              <span>Made with <i class="fa-solid fa-heart fa-beat-fade"></i> </span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              
              <a href="https://twitter.com/abdulb4s1t" target='__blank' className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.google.com/" target='__blank' className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://instagram.com/abdulb4s1t" target='__blank' className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/abdul-basit-832840198/" target='__blank' className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/n00bpr0gram3r" target='__blank' className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
        </footer>
      </div>
  )
}

export default About
