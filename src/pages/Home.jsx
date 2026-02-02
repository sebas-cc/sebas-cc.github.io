import { useRef } from 'react';
import RepoManager from '../components/repoManager';

function Home() {
    const EMAIL = 'csebas459@gmail.com';
    const dialogRef = useRef(null); // RepoManager dialog
    const openModal = () => {
        dialogRef.current?.showModal();
    };

    return (
        <>
            <main>
                {/*<!-- Hero Section -->*/}
                <section id="home" className="hero">
                    <div className="hero-content">
                        <span className="hero-badge">✨ Available for new projects & collaborations</span>
                        <h1>Full Stack Developer <br />Web Optimization, Performance & Scalable Solutions</h1>
                        <p>I help businesses scale their web presence by building reliable web applications and improving existing sites with performance optimization, technical SEO, and clean, maintainable code. My work balances user experience, fast loading times, and long-term stability.</p>
                        <div className="cta-buttons">
                            <a href="#projects" className="btn btn-primary">Explore My Projects</a>
                            <a href="#contact" className="btn btn-secondary">Hire Me</a>
                        </div>
                    </div>
                </section>
                {/*<!-- About Section -->*/}
                <section id="about" className="about">
                    <div className="about-content">
                        <div className="about-text">
                            <div className="section-title">
                                <h2>About Me</h2>
                                <p>Focused on performance, reliability, and scalable web applications</p>
                            </div>
                            <div className="about-details">
                                <p>I’m a full-stack developer with a strong focus on building efficient, maintainable, and scalable web applications. My background combines frontend and backend development, allowing me to improve performance, streamline functionality, and create smooth user experiences across platforms.</p>
                                <p>Over the past few years, I’ve worked on projects that improved site stability, structure, and technical performance, helping teams solve real-world problems through clean code and practical engineering decisions. I’m constantly learning and refining my skills, especially around modern JavaScript, React, and backend workflows to deliver more reliable solutions.</p>

                                <dl className="stats-grid">
                                    <div className="stat-item">
                                        <dt className="stat-label">Scalable Web Architecture</dt>
                                        <dd className="stat-number">
                                            <svg aria-hidden="true" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                                <path d="M3 9h18"></path>
                                                <path d="M8 9v11"></path>
                                                <path d="M13 13h5"></path>
                                                <path d="M13 17h5"></path>
                                            </svg>
                                            <span className="sr-only">
                                                Scalable full-stack web architecture, modular systems, and maintainable codebases.
                                            </span>
                                        </dd>
                                    </div>

                                    <div className="stat-item">
                                        <dt className="stat-label">Modern Full-Stack Technologies</dt>
                                        <dd className="stat-number">
                                            <svg aria-hidden="true" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"></path><path d="M3 12l9 5 9-5" stroke="currentColor" opacity="0.8"></path><path d="M3 17l9 5 9-5" stroke="currentColor" opacity="0.5"></path></svg>
                                            <span className="sr-only">
                                                React, Next.js, TypeScript, Node.js, APIs, databases, and modern dev-tooling.
                                            </span>
                                        </dd>
                                    </div>

                                    <div className="stat-item">
                                        <dt className="stat-label">UI/UX, Accessibility & Code Quality</dt>
                                        <dd className="stat-number">
                                            <svg aria-hidden="true" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5.5 3.5l7.5 13 3-5 5-3L5.5 3.5z"></path>
                                                <circle cx="15" cy="15" r="6" opacity="0.5"></circle>
                                            </svg>
                                            <span className="sr-only">
                                                User-centered design, WCAG accessibility standards, and usability best practices.
                                            </span>
                                        </dd>
                                    </div>

                                    <div className="stat-item">
                                        <dt className="stat-label">Performance, SEO & Core Web Vitals</dt>
                                        <dd className="stat-number">
                                            <svg aria-hidden="true" width="48" height="48" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                                <circle cx="64" cy="64" r="52" strokeWidth="8" opacity="0.5"></circle>
                                                <path d="M64 12
       A52 52 0 0 1 116 64" strokeWidth="8" strokeLinecap="round"></path>
                                                <polyline points="36,76 52,60 68,68 92,44" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></polyline>
                                                <circle cx="36" cy="76" r="4" fill="currentColor"></circle>
                                                <circle cx="52" cy="60" r="4" fill="currentColor"></circle>
                                                <circle cx="68" cy="68" r="4" fill="currentColor"></circle>
                                                <circle cx="92" cy="44" r="4" fill="currentColor"></circle>
                                            </svg>
                                            <span className="sr-only">
                                                Optimized load times, SEO best practices, and strong Core Web Vitals scores.
                                            </span>
                                        </dd>
                                    </div>
                                </dl>

                            </div>
                        </div>
                        <div className="about-image">
                            <div className='card-inner'>
                                <div className="card-front">
                                </div>
                                <img className="card-back" alt='Sebastian Camacho' width='100px' height='200px' src='https://media.licdn.com/dms/image/v2/D4E03AQFcTpCi4R8oGA/profile-displayphoto-scale_200_200/B4EZpM8efdGYAc-/0/1762227514818?e=2147483647&v=beta&t=8lv8JHY9NGegFYAxcjXQ8uxM7GPCdj2F2-89i1Y1YXQ'></img>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Skills Section --> */}
                <section id="skills" className="skills">
                    <div className="section-title">
                        <h2>Technical Expertise</h2>
                        <p>Crafting modern web experiences with industry-leading technologies</p>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <span className="skill-icon">
                                <svg aria-hidden="true" width="48" height="48" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                    <rect x="16" y="24" width="96" height="80" rx="10" strokeWidth="8" />
                                    <line x1="19" y1="40" x2="109" y2="40" strokeWidth="8" />
                                    <rect x="40" y="56" width="28" height="24" rx="3" strokeWidth="6" />
                                    <rect x="56" y="68" width="28" height="24" rx="3" strokeWidth="4" opacity="0.5" />
                                    <circle cx="86" cy="58" r="8" strokeWidth="4" opacity="0.8" />
                                    <path d="M86 50 v4 M86 62 v4 M78 58 h4 M90 58 h4" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                                </svg>
                            </span>
                            <h3>Web Development & CMS Customization</h3>
                            <p>I develop and improve websites across WordPress, Shopify, and custom-coded platforms, focusing on clean structure, performance, and maintainability. From UI refinements to technical troubleshooting and feature implementations, I help teams make their sites faster, smoother, and easier to manage.</p>
                        </div>
                        <div className="skill-card">
                            <span className="skill-icon">
                                <svg aria-hidden="true" width="48" height="48" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                    <rect x="20" y="20" width="88" height="28" rx="8" strokeWidth="4" />
                                    <line x1="32" y1="32" x2="96" y2="32" strokeWidth="2" />
                                    <rect x="20" y="52" width="88" height="28" rx="8" strokeWidth="4" />
                                    <line x1="32" y1="64" x2="96" y2="64" strokeWidth="2" />
                                    <rect x="20" y="84" width="88" height="24" rx="8" strokeWidth="4" />
                                    <circle cx="44" cy="96" r="6" strokeWidth="2" opacity="0.8" />
                                    <circle cx="64" cy="96" r="6" strokeWidth="2" opacity="0.8" />
                                    <circle cx="84" cy="96" r="6" strokeWidth="2" opacity="0.8" />
                                </svg>
                            </span>
                            <h3>Backend Architecture</h3>
                            <p>I work with Node.js, APIs, and database integrations to build reliable backend functionality that supports real-world applications. My approach prioritizes clear logic, stable data flows, and scalable architecture, ensuring features remain robust as projects grow.</p>
                        </div>
                        <div className="skill-card">
                            <span className="skill-icon">
                                <svg width="48" height="48" viewBox="10 10 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" stroke="currentColor">
                                    <path
                                        d="M38 84h46c12 0 22-9 22-20s-8-18-18-19c-2-12-13-21-26-21-12 0-22 7-25 17-10 1-19 9-19 19 0 13 10 24 20 24z"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <h3>Cloud & DevOps</h3>
                            <p>I deploy and maintain applications using modern hosting platforms and cloud workflows, with attention to version control, environment configuration, and efficient deployment practices. Currently expanding my expertise in containerization and cloud scalability to support larger-scale projects.</p>
                        </div>
                    </div>
                </section>
                {/* <!-- Projects Section --> */}
                <section id="projects" className="projects">
                    <div className="projects-container">
                        <div className="section-title">
                            <h2>Featured Projects</h2>
                            <p>A showcase of my latest work and technical achievements</p>
                        </div>
                        <div className="projects-grid">
                            <div className="project-card">
                                <img className="project-image" src="/assets/images/SEO-Analyzer.webp" alt="SEO Analyzer"/>
                                <div className="project-content">
                                    <h3>SEO Analyzer</h3>
                                    <p>SEO Analyzer is a modern browser extension that provides real-time, on-page SEO analysis directly in your browser. It evaluates headings, meta tags, links, page structure, and social metadata, offering clear insights to help optimize pages for search engines and sharing performance.</p>
                                    <div className="project-tech">
                                        <span className="tech-tag">JavaScript</span>
                                        <span className="tech-tag">HTML</span>
                                        <span className="tech-tag">CSS</span>
                                    </div>
                                </div>
                            </div>
                            {/*
                            <div className="project-card">
                                <div className="project-image">📱</div>
                                <div className="project-content">
                                    <h3>SaaS Analytics Tool</h3>
                                    <p>A comprehensive analytics platform providing real-time insights and data visualization for business intelligence and decision making.</p>
                                    <div className="project-tech">
                                        <span className="tech-tag">Vue.js</span>
                                        <span className="tech-tag">Python</span>
                                        <span className="tech-tag">PostgreSQL</span>
                                        <span className="tech-tag">D3.js</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-image">🌐</div>
                                <div className="project-content">
                                    <h3>Social Media Hub</h3>
                                    <p>A unified social media management platform with scheduling, analytics, and multi-platform integration for content creators and businesses.</p>
                                    <div className="project-tech">
                                        <span className="tech-tag">Next.js</span>
                                        <span className="tech-tag">TypeScript</span>
                                        <span className="tech-tag">Prisma</span>
                                        <span className="tech-tag">Redis</span>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="cta-buttons">
                            <button onClick={openModal} className="btn btn-primary">More of my work</button>
                        </div>
                    </div>
                    <RepoManager username='sebas-cc' ref={dialogRef} />
                </section>

                <section id="contact" className="contact-section">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                            Feel free to reach out through any of the platforms below.
                        </p>
                    </div>

                    <ul className="social-links">
                        <li className="social-item">
                            <a
                                href="https://github.com/sebas-cc"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Profile"
                                className="social-link github"
                            >
                                <img
                                    src="https://skillicons.dev/icons?i=github"
                                    title="GitHub Link"
                                    alt="GitHub Link"
                                    className="social-icon"
                                />
                                <span className="social-text">GitHub</span>
                            </a>
                        </li>

                        <li className="social-item">
                            <a
                                href="https://www.linkedin.com/in/sebastian-camacho-71a862239"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Profile"
                                className="social-link linkedin"
                            >
                                <img
                                    src="https://skillicons.dev/icons?i=linkedin"
                                    title="LinkedIn Link"
                                    alt="LinkedIn Link"
                                    className="social-icon"
                                />
                                <span className="social-text">LinkedIn</span>
                            </a>
                        </li>

                        <li className="social-item">
                            <a
                                href={`mailto:${EMAIL}`}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link email"
                            >
                                <img
                                    src="https://skillicons.dev/icons?i=gmail"
                                    title="Email"
                                    alt="Email"
                                    className="social-icon"
                                />
                                <span className="social-text">Email Me</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Home;