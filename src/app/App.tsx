import { HeroSection } from './components/HeroSection';
import { RegisterTrailSection } from './components/RegisterTrailSection';
import anchorIcon from '../imports/Gemini_Generated_Image_ix9whkix9whkix9w__1_-removebg-preview.png';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF5F1' }}>
      <HeroSection />
      <RegisterTrailSection />

      {/* Fixed Anchor Menu Icon - Bottom Right */}
      <button
        className="fixed bottom-8 right-8 z-50 transition-all hover:scale-110 rounded-full p-3"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          border: 'none',
          cursor: 'pointer',
          width: '70px',
          height: '70px'
        }}
      >
        <img
          src={anchorIcon}
          alt="Menu"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}
        />
      </button>

      {/* Register Section */}
      <section className="min-h-screen py-20 px-8" style={{ backgroundColor: '#FFF5F1' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: 'var(--primary-orange)',
            marginBottom: '24px',
            letterSpacing: '4px'
          }}>
            REGISTER NOW
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: 'var(--line-height)',
            fontFamily: 'var(--font-body)',
            color: 'var(--primary-text)',
            marginBottom: '48px'
          }}>
            Secure your spot in the Coastal Innovation Hackathon 2026. Limited seats available!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-4 rounded-lg transition-all hover:scale-105" style={{
              backgroundColor: 'var(--primary-orange)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(230, 107, 54, 0.3)'
            }}>
              Register as Participant
            </button>

            <button className="px-12 py-4 rounded-lg transition-all hover:scale-105" style={{
              backgroundColor: 'var(--deep-ocean-teal)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(29, 111, 120, 0.3)'
            }}>
              Register as Team
            </button>
          </div>

          <div className="mt-16 p-8 rounded-lg" style={{
            backgroundColor: '#f7e9d4',
            border: '2px solid var(--primary-orange)'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '24px',
              fontWeight: 600,
              color: 'var(--primary-text)',
              marginBottom: '16px'
            }}>
              Important Dates
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <p style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--deep-ocean-teal)',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  Registration Deadline
                </p>
                <p style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--primary-text)',
                  fontWeight: 600
                }}>
                  March 15, 2026
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--deep-ocean-teal)',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  Hackathon Date
                </p>
                <p style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--primary-text)',
                  fontWeight: 600
                }}>
                  March 20-21, 2026
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--deep-ocean-teal)',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  Results Announcement
                </p>
                <p style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--primary-text)',
                  fontWeight: 600
                }}>
                  March 22, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Hook Section */}
      <section className="min-h-screen py-20 px-8 flex items-center" style={{ backgroundColor: '#593738' }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: '#E66B36',
            lineHeight: 1.2,
            marginBottom: '48px',
            letterSpacing: '2px'
          }}>
            "1.5 million engineers graduate every year. Most never get a room like this."
          </h2>

          <div className="space-y-6">
            <p style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400
            }}>
              The narrative about Kasaragod, Mangalore, Kozhikode — high talent, near-zero opportunity.
            </p>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400
            }}>
              No startup culture. No mentors. No room to build.
            </p>

            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
              color: '#E66B36',
              fontWeight: 600,
              marginTop: '32px'
            }}>
              CIH changes that.
            </p>
          </div>
        </div>
      </section>

      {/* Download Brochure Section */}
      <section className="py-20 px-8" style={{ backgroundColor: '#1D6F78' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: 'white',
            marginBottom: '24px',
            letterSpacing: '4px'
          }}>
            DOWNLOAD BROCHURE
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: 'var(--line-height)',
            fontFamily: 'var(--font-body)',
            color: 'white',
            marginBottom: '48px',
            opacity: 0.9
          }}>
            Get detailed information about the hackathon, themes, prizes, and sponsorship opportunities.
          </p>

          <button className="px-12 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-3 mx-auto" style={{
            backgroundColor: 'white',
            color: 'var(--deep-ocean-teal)',
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF Brochure
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-8" style={{ backgroundColor: '#FFF5F1' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: 'var(--primary-orange)',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '4px'
          }}>
            ABOUT THE HACKATHON
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--deep-ocean-teal)',
                marginBottom: '16px'
              }}>
                What is CIH?
              </h3>
              <p style={{
                fontSize: '14px',
                lineHeight: 'var(--line-height)',
                fontFamily: 'var(--font-body)',
                color: 'var(--primary-text)'
              }}>
                Coastal Innovation Hackathon is a 24-hour national-level event bringing together innovators, developers, and coastal enthusiasts to create sustainable solutions for coastal communities. Join us in shaping the future of our coastlines through technology and innovation.
              </p>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--deep-ocean-teal)',
                marginBottom: '16px'
              }}>
                Why Participate?
              </h3>
              <p style={{
                fontSize: '14px',
                lineHeight: 'var(--line-height)',
                fontFamily: 'var(--font-body)',
                color: 'var(--primary-text)'
              }}>
                Experience intense 24-hour coding, collaborate with talented teams, win exciting prizes, and make a real impact on coastal sustainability. Network with industry experts and showcase your innovative ideas to a national audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="min-h-screen py-20 px-8" style={{ backgroundColor: '#f7e9d4' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: 'var(--primary-orange)',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '4px'
          }}>
            THEMES
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Marine Conservation', desc: 'Innovative solutions for protecting ocean ecosystems and marine life' },
              { title: 'Coastal Infrastructure', desc: 'Smart technologies for sustainable coastal development' },
              { title: 'Climate Resilience', desc: 'Tools and systems to combat coastal climate challenges' }
            ].map((theme, index) => (
              <div key={index} className="p-6 bg-white rounded-lg" style={{ border: '2px solid var(--deep-ocean-teal)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--deep-ocean-teal)',
                  marginBottom: '12px'
                }}>
                  {theme.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 'var(--line-height)',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--primary-text)'
                }}>
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="min-h-screen py-20 px-8" style={{ backgroundColor: '#FFF5F1' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: 'var(--primary-orange)',
            marginBottom: '24px',
            letterSpacing: '4px'
          }}>
            SPONSORSHIP OPPORTUNITIES
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: 'var(--line-height)',
            fontFamily: 'var(--font-body)',
            color: 'var(--primary-text)',
            maxWidth: '800px',
            margin: '0 auto 48px'
          }}>
            Partner with us to support innovation and sustainability. Gain visibility among talented developers and innovators while contributing to meaningful coastal solutions.
          </p>

          <button className="px-12 py-4 rounded-lg transition-all hover:scale-105" style={{
            backgroundColor: 'var(--primary-orange)',
            color: 'white',
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(230, 107, 54, 0.3)'
          }}>
            Become a Sponsor
          </button>
        </div>
      </section>
    </div>
  );
}