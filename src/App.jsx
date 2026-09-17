import { useState, useEffect } from 'react'

const WA = '2349021830274'
const wa = (msg) => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg)

const WA_GENERAL = wa("Hi Everything Maya Studios, I'd like to get in touch.")
const WA_BOOKING = wa("Hi Everything Maya Studios, I'd like to book a session. Please tell me more.")

const PORTFOLIO = [
  { id: 1, img: '/images/portfolio/p1.jpg', title: 'Portrait Session', category: 'Photography' },
  { id: 2, img: '/images/portfolio/p2.jpg', title: 'Newborn Story', category: 'Newborn' },
  { id: 3, img: '/images/portfolio/p3.jpg', title: 'Wedding Moments', category: 'Events' },
  { id: 4, img: '/images/portfolio/p4.jpg', title: 'Resin Art Piece', category: 'Resin Art' },
  { id: 5, img: '/images/portfolio/p5.jpg', title: 'Brow Artistry', category: 'Microblading' },
  { id: 6, img: '/images/portfolio/p6.jpg', title: 'Wedding Souvenirs', category: 'Souvenirs' },
]

function Lightbox({ item, onClose }) {
  if (!item) return null
  const link = wa('Hi Everything Maya Studios, I am interested in ' + item.category + '. Please tell me more.')
  return (
    <div className="lightbox-box">
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <img className="lightbox-img" src={item.img} alt={item.title} />
      <div className="lightbox-body">
        <div>
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <a className="btn-primary" href={link} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-whatsapp" /> Book this
        </a>
      </div>
    </div>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(function() {
    function onKey(e) {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return function() { window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(function() {
    document.body.style.overflow = lightbox ? 'hidden' : ''
  }, [lightbox])

  function goTo(id) {
    var el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  function overlayClick(e) {
    if (e.target.className.indexOf('lightbox-overlay') !== -1) setLightbox(null)
  }

  return (
    <div>
      <div className="bg-fixed" />
      <div className="site-content">

        <nav>
          <div className="logo">EVERYTHING <span>MAYA</span></div>
          <ul className={navOpen ? 'nav-links open' : 'nav-links'}>
            <li><a href="#home" onClick={function() { goTo('home') }}>Home</a></li>
            <li><a href="#portfolio" onClick={function() { goTo('portfolio') }}>Portfolio</a></li>
            <li><a href="#services" onClick={function() { goTo('services') }}>Services</a></li>
            <li><a href="#about" onClick={function() { goTo('about') }}>About</a></li>
            <li><a href="#contact" onClick={function() { goTo('contact') }}>Contact</a></li>
          </ul>
          <button
            className={navOpen ? 'hamburger open' : 'hamburger'}
            onClick={function() { setNavOpen(!navOpen) }}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </nav>

        <section id="home">
          <div className="hero-text">
            <div className="eyebrow">Creative Studio — Ota, Ogun State</div>
            <h1>Every moment deserves to be <em>beautifully</em> remembered.</h1>
            <p className="hero-sub">
              From newborn sessions to wedding souvenirs, resin art to microblading — Everything Maya Studios captures and creates the moments that matter.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href={WA_BOOKING} target="_blank" rel="noopener noreferrer">
                Book a session
              </a>
              <button className="btn-ghost" onClick={function() { goTo('portfolio') }}>
                View portfolio
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-img-wrap">
              <img src="/images/hero.jpg" alt="Everything Maya Studios" />
              <div className="hero-badge">Now booking</div>
            </div>
          </div>
        </section>

        <div className="strip">
          <div className="strip-item"><span className="strip-dot" />Photography</div>
          <div className="strip-item"><span className="strip-dot" />Events</div>
          <div className="strip-item"><span className="strip-dot" />Newborn</div>
          <div className="strip-item"><span className="strip-dot" />Resin Art</div>
          <div className="strip-item"><span className="strip-dot" />Microblading</div>
          <div className="strip-item"><span className="strip-dot" />Wedding Souvenirs</div>
        </div>

        <section id="portfolio">
          <div className="section-header">
            <h2 className="section-title">Our work</h2>
          </div>
          <div className="portfolio-grid">
            {PORTFOLIO.map(function(item) {
              return (
                <div key={item.id} className="portfolio-card" onClick={function() { setLightbox(item) }}>
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-text">
                      <h4>{item.title}</h4>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="services">
          <div className="section-header">
            <h2 className="section-title">What we offer</h2>
          </div>
          <div className="svc-grid">
            <div className="svc-card">
              <div className="svc-num">01</div>
              <div className="svc-title">Photography and Events</div>
              <p className="svc-desc">Professional photography for portraits, weddings, birthdays, and corporate events. Every frame tells your story.</p>
            </div>
            <div className="svc-card">
              <div className="svc-num">02</div>
              <div className="svc-title">Newborn Sessions</div>
              <p className="svc-desc">Delicate, timeless newborn photography that captures the magic of your baby's very first days.</p>
            </div>
            <div className="svc-card">
              <div className="svc-num">03</div>
              <div className="svc-title">Resin Art</div>
              <p className="svc-desc">Custom handcrafted resin pieces — trays, frames, jewellery, and bespoke creations made to order.</p>
            </div>
            <div className="svc-card">
              <div className="svc-num">04</div>
              <div className="svc-title">Microblading</div>
              <p className="svc-desc">Semi-permanent brow artistry that frames your face with natural, hair-stroke precision.</p>
            </div>
            <div className="svc-card">
              <div className="svc-num">05</div>
              <div className="svc-title">Wedding Souvenirs</div>
              <p className="svc-desc">Thoughtfully designed and produced wedding gifts and souvenirs your guests will treasure for years.</p>
            </div>
            <div className="svc-card">
              <div className="svc-num">06</div>
              <div className="svc-title">Custom Orders</div>
              <p className="svc-desc">Have something special in mind? We work with you to bring any creative idea to life.</p>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about-inner">
            <img className="about-img" src="/images/hero.jpg" alt="Everything Maya Studios workspace" />
            <div className="about-text">
              <div className="eyebrow">About the studio</div>
              <h2 className="section-title">Art, craft, and <em className="gold">intention.</em></h2>
              <p>
                Everything Maya Studios is a creative hub based in Ota, Ogun State. We believe that beauty lives in the details — in a perfectly timed shot, a handcrafted resin piece, a brow line drawn with care.
              </p>
              <p>
                Whether you are celebrating a new life, commemorating a union, or simply investing in yourself, we bring the same dedication and artistry to every session and every order.
              </p>
              <a className="btn-primary" href={WA_BOOKING} target="_blank" rel="noopener noreferrer">
                Book with us
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-inner">
            <div>
              <h2 className="section-title">Find us</h2>
              <p className="hero-sub">
                Located at Wisdomland School, off Lola bus stop, Ota. Reach out on WhatsApp to book or enquire.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-row">
                <div className="contact-icon"><i className="ti ti-map-pin" /></div>
                <span>Wisdomland School, off Olorugbembe St, off Lola bus stop, Ota</span>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><i className="ti ti-clock" /></div>
                <span>By appointment</span>
              </div>
              <a className="contact-row" href="tel:09021830274">
                <div className="contact-icon"><i className="ti ti-phone" /></div>
                <span>0902 183 0274</span>
              </a>
              <a className="contact-row" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
                <div className="contact-icon"><i className="ti ti-brand-whatsapp" /></div>
                <span>WhatsApp us to book</span>
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <div className="logo">EVERYTHING <span>MAYA</span></div>
            <div className="footer-tagline">Art, craft, and intention.</div>
          </div>
          <div className="footer-copy">2026 Everything Maya Studios. Ota, Ogun State.</div>
        </footer>

      </div>

      <div
        className={lightbox ? 'lightbox-overlay open' : 'lightbox-overlay'}
        onClick={overlayClick}
      >
        <Lightbox item={lightbox} onClose={function() { setLightbox(null) }} />
      </div>

      <a className="wa-fab" href={WA_GENERAL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="ti ti-brand-whatsapp" />
      </a>
    </div>
  )
}