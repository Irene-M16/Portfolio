import { useState } from 'react'
import { ArrowUpRight, Code2, Mail, MapPin, MessageCircle, Send, Sparkles, Loader2, X } from 'lucide-react'
import profilePic from './assets/profile.jpg'

const projects = [
  { 
    title: 'Nyondo Hardware', 
    tag: 'HARDWARE · INNOVATION', 
    description: 'A full-stack inventory management system designed to streamline hardware distribution.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: null,
    caseStudy: {
      problem: "Local hardware stores in Uganda struggle with manual inventory tracking, leading to stockouts and lost revenue.",
      solution: "We built a centralized, cloud-based dashboard that allows store owners to track stock in real-time, manage suppliers, and generate automated sales reports.",
      impact: "Reduced inventory counting time by 80% and eliminated out-of-stock incidents for the pilot store."
    }
  },
  { 
    // UPDATED LUNEXA DETAILS
    title: 'Lunexa', 
    tag: 'WEB · COMMUNICATION', 
    description: 'A WhatsApp-style communication app currently in development, built for seamless real-time messaging and file sharing.',
    tech: ['JavaScript', 'Node.js', 'Express.js'],
    image: null,
    caseStudy: {
      problem: "Small remote teams need a fast, distraction-free way to communicate without the heavy bloat of traditional enterprise tools.",
      solution: "We are developing a lightweight web-based chat app. It handles real-time messaging, file sharing, and a clean, minimalist UI. The app is currently in active development, with core messaging features almost complete.",
      impact: "Currently in the testing phase. The goal is to provide a smooth, instant communication platform that doesn't require downloading heavy desktop software."
    }
  },
  { 
    title: 'Farm2Plate', 
    tag: 'AGRITECH · SOCIAL IMPACT', 
    description: 'A mobile and SMS-focused platform bridging the gap between farmers and households to end food insecurity in Uganda.',
    tech: ['SMS Tech', 'AI Matching', 'Mobile Money'],
    image: null,
    caseStudy: {
      problem: "Uganda produces enough food for everyone, yet millions go hungry. The issue isn't a shortage of food; it's a broken connection. 40% of harvested food is wasted because 60% of farmers (many using basic feature phones) lack reliable market access.",
      solution: "We built a platform that uses SMS technology, AI-driven matching, and mobile money (like MTN MoMo) to connect farmers directly with households, schools, and NGOs. Because it's SMS-first, it works for farmers without smartphones or internet access.",
      impact: "Since our 2021 pilot with 50 farmers, we've grown to connect over 5,800 farmers with 12,000+ households. We've successfully reduced post-harvest waste and created a self-sustaining ecosystem that gets food to those who need it most."
    }
  },
  { 
    // UPDATED VIDEX DETAILS
    title: 'Videx', 
    tag: 'MEDIA · PLATFORM', 
    description: 'A YouTube-style video platform where users can upload, edit, and watch videos.',
    tech: ['JavaScript', 'Node.js', 'Express.js'],
    image: null,
    caseStudy: {
      problem: "Content creators need a simple, self-hosted way to share videos and manage their content without relying on ad-heavy, restrictive platforms like YouTube.",
      solution: "Built a full-stack video application using JavaScript, Node.js, and Express. The platform includes a secure user dashboard for uploading, editing, and managing videos. Viewers can browse, search, and stream high-quality video content seamlessly.",
      impact: "Successfully demonstrates complex full-stack media handling, file storage optimization, and user authentication, serving as a functional prototype for a scalable video ecosystem."
    }
  },
]

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 
  'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 
  'Figma', 'Git', 'GitHub', 'REST APIs', 'UI/UX Design'
]

function SocialLink({ href, label, children }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-btn">{children}</a>
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="topography hero-section">
      
      <div className="container hero-header-container">
        <header className="hero-header">
          <a href="#home" className="font-display text-sm font-semibold tracking-[.3em]">PORTFOLIO</a>
          <div className="social-links">
            <SocialLink href="https://www.linkedin.com/in/munguromo-irene-74a5953b8" label="LinkedIn">
              <span style={{fontSize: '12px', fontWeight: 'bold'}}>in</span>
            </SocialLink>
            <SocialLink href="https://wa.me/256771402481" label="Chat with Irene on WhatsApp">
              <MessageCircle size={17} />
            </SocialLink>
          </div>
        </header>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-circle-1" />
            <div className="profile-circle-2" />
            <img src={profilePic} alt="Munguromo Irene" className="profile-img" />
          </div>
          <p className="hero-subtitle" style={{display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: 'normal', fontSize: '14px'}}>
            <Sparkles size={15} /> Designing meaningful digital experiences
          </p>
          <h1 className="hero-title">Munguromo Irene</h1>
          <p className="hero-subtitle">SOFTWARE ENGINEER</p>
          <a href="#projects" className="hero-btn">Explore my work <ArrowUpRight size={16} /></a>
        </div>
      </div>

    </section>
  )
}

function About() { 
  return (
    <section id="about" className="topography section-padding" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container about-grid">
        <SectionHeading 
          eyebrow="01 / ABOUT ME" 
          title="Crafting products people love to use." 
          copy="I’m a software engineer with a passion for turning curious ideas into polished, accessible digital products. I specialize in full-stack development, bridging the gap between intuitive frontend design and robust backend architecture. I care deeply about the small details, thoughtful systems, and making complicated things feel simple." 
        />
        
        <div className="glass-card" style={{padding: '2rem'}}>
          <div className="toolkit-header">
            <div className="toolkit-icon"><Code2 size={20} /></div>
            <div>
              <p className="font-display" style={{fontSize: '1.1rem', fontWeight: 500}}>My toolkit</p>
              <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Tools I reach for often</p>
            </div>
          </div>
          <div className="skills-list">
            {skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects({ setSelectedProject }) { 
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem'}}>
          <SectionHeading eyebrow="02 / SELECTED WORK" title="A few things I’ve built." />
          <a href="#contact" className="project-link" style={{color: 'var(--teal-light)'}}>Let’s build something <ArrowUpRight size={17} /></a>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={project.title} className="glass-card project-card" onClick={() => setSelectedProject(project)}>
              
              <div className="project-image-area">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom right, var(--teal-dark), #046b86)', position: 'absolute', top: 0, left: 0 }} />
                )}
                <div className="project-number">{String(i + 1).padStart(2, '0')}</div>
              </div>

              <div className="project-details">
                <p className="project-tag">{project.tag}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <button className="project-link">
                  View case study <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        <p className="project-tag">{project.tag}</p>
        <h2 className="modal-title">{project.title}</h2>
        
        <div className="project-tech" style={{marginBottom: '2rem'}}>
          {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>

        <h3 className="modal-section-title">The Problem</h3>
        <p className="modal-text">{project.caseStudy.problem}</p>

        <h3 className="modal-section-title">The Solution</h3>
        <p className="modal-text">{project.caseStudy.solution}</p>

        <h3 className="modal-section-title">The Impact</h3>
        <p className="modal-text">{project.caseStudy.impact}</p>
      </div>
    </div>
  )
}

function Contact() { 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else { setStatus('error'); }
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="topography section-padding" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="03 / GET IN TOUCH" title="Let’s make something great." copy="Have a project in mind or just want to say hello? My inbox is always open." />
          <div className="contact-info">
            <a href="mailto:munguromoirene7@gmail.com"><Mail size={17} style={{color: 'var(--teal-light)'}} />munguromoirene7@gmail.com</a>
            <p><MapPin size={17} style={{color: 'var(--teal-light)'}} />Available worldwide</p>
          </div>
        </div>
        
        <form className="glass-card contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="you@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="form-input" placeholder="Tell me a little about your project" />
          </div>
          
          <button disabled={status === 'loading'} className="submit-btn" type="submit">
            {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send message <Send size={16} /></>}
          </button>
          
          {status === 'success' && <p className="form-status status-success">Message sent successfully!</p>}
          {status === 'error' && <p className="form-status status-error">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

function App() { 
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main>
      <Hero />
      <About />
      <Projects setSelectedProject={setSelectedProject} />
      <Contact />
      <footer className="footer">© {new Date().getFullYear()} Munguromo Irene. Designed with intention.</footer>
      
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  ) 
}

export default App
