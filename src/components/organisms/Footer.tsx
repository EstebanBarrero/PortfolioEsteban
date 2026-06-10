import { useEffect } from 'preact/hooks';
import { SocialLink } from '../molecules/SocialLink';
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL, WHATSAPP_URL } from '../../data/constants';
import { t } from '../../services/LanguageService';

const ASCII_LOGO = `
 ███████╗███████╗████████╗
 ██╔════╝██╔════╝╚══██╔══╝
 █████╗  ███████╗   ██║
 ██╔══╝  ╚════██║   ██║
 ███████╗███████║   ██║
 ╚══════╝╚══════╝   ╚═╝
`.trim();

export function Footer() {
  const tNow = t.value;
  const year = new Date().getFullYear();

  useEffect(() => {
    const btn = document.getElementById('backToTop');
    const handler = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    btn?.addEventListener('click', handler);
    return () => btn?.removeEventListener('click', handler);
  }, []);

  return (
    <footer id="footer" role="contentinfo">
      <div class="container footer-container">

        <div class="footer-top">

          <div class="footer-brand">
            <pre class="ascii-logo" aria-label="EST logo">{ASCII_LOGO}</pre>
            <p class="footer-tagline">
              <span dangerouslySetInnerHTML={{ __html: tNow.footer.tagline }} /><br />
              <span class="text-cyan">Medellín, Colombia</span>
            </p>
          </div>

          <nav class="footer-nav" aria-label="Footer navigation">
            <span class="footer-nav-title">{tNow.footer.navTitle}</span>
            <ul role="list">
              <li><a href="#hero">{tNow.footer.home}</a></li>
              <li><a href="#about">{tNow.footer.about}</a></li>
              <li><a href="#skills">{tNow.footer.skills}</a></li>
              <li><a href="#projects">{tNow.footer.projects}</a></li>
              <li><a href="#experience">{tNow.footer.experience}</a></li>
              <li><a href="#ai-showcase">{tNow.footer.ai}</a></li>
              <li><a href="#contact">{tNow.footer.contact}</a></li>
            </ul>
          </nav>

          <div class="footer-social">
            <span class="footer-nav-title">{tNow.footer.connectTitle}</span>
            <div class="social-links">
              <SocialLink href={GITHUB_URL}       icon="github"         label="GitHub"    ariaLabel="GitHub profile"   target="_blank" rel="noopener noreferrer" />
              <SocialLink href={LINKEDIN_URL}      icon="linkedin"       label="LinkedIn"  ariaLabel="LinkedIn profile" target="_blank" rel="noopener noreferrer" />
              <SocialLink href={`mailto:${CONTACT_EMAIL}`} icon="mail"  label="Email"     ariaLabel="Email" />
              <SocialLink href={WHATSAPP_URL}      icon="message-circle" label="WhatsApp" ariaLabel="WhatsApp"         target="_blank" rel="noopener noreferrer" />
            </div>
          </div>

        </div>

        <div class="footer-divider" aria-hidden="true" />

        <div class="footer-bottom">
          <p class="footer-credit">
          </p>
          <p class="footer-copy">
            &copy; {year} David Esteban Barrero. All rights reserved.
          </p>
          <button class="back-to-top" id="backToTop" aria-label="Back to top">
            {tNow.footer.backToTop}
          </button>
        </div>

      </div>
    </footer>
  );
}
