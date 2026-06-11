import { Icon } from '../atoms/Icon';
import { SectionHeader } from '../atoms/SectionHeader';
import { ContactChannel } from '../molecules/ContactChannel';
import { SectionLayout } from '../templates/SectionLayout';
import { useContactForm } from '../../hooks/useContactForm';
import { CONTACT_EMAIL, LINKEDIN_URL, LINKEDIN_DISPLAY, GITHUB_URL, WHATSAPP_URL } from '../../data/constants';
import { t } from '../../services/LanguageService';
import { translations } from '../../data/translations';

interface Props { lang?: 'en' | 'es'; }

export function Contact({ lang }: Props = {}) {
  const tNow = lang ? translations[lang] : t.value;
  const [{ status, message, isSending }, { handleSubmit, handleFieldInput, handleFieldFocus, handleFieldBlur }] = useContactForm();

  return (
    <SectionLayout id="contact" ariaLabelledBy="contact-heading">

      <SectionHeader
        label={tNow.contact.label}
        title={tNow.contact.title}
        id="contact-heading"
        subtitle={tNow.contact.subtitle}
      />

      <div class="contact-grid">

        <div class="contact-info reveal-left">
          <div class="contact-availability">
            <span class="avail-dot" />
            <span class="avail-text">{tNow.contact.available}</span>
          </div>

          <h3 class="contact-tagline">
            <span>{tNow.contact.tagline}</span><br />
            <span class="text-gradient-cyan">{tNow.contact.taglineAccent}</span>
          </h3>

          <p class="contact-desc">{tNow.contact.desc}</p>

          <div class="contact-channels">
            <ContactChannel href={`mailto:${CONTACT_EMAIL}`} icon="mail"           label="Email"     value={CONTACT_EMAIL}    ariaLabel="Send email" />
            <ContactChannel href={WHATSAPP_URL}              icon="message-circle" label="WhatsApp"  value="+57 319 392 9347" ariaLabel="WhatsApp" target="_blank" rel="noopener noreferrer" />
            <ContactChannel href={LINKEDIN_URL}              icon="linkedin"       label="LinkedIn"  value={LINKEDIN_DISPLAY} ariaLabel="LinkedIn" target="_blank" rel="noopener noreferrer" />
            <ContactChannel href={GITHUB_URL}                icon="github"         label="GitHub"    value="github.com/EstebanBarrero" ariaLabel="GitHub" target="_blank" rel="noopener noreferrer" />
          </div>

          <div class="contact-location glass-card">
            <span class="location-pin"><Icon name="map-pin" size={20} /></span>
            <div>
              <div class="location-city">Medellín, Colombia</div>
              <div class="location-tz">{tNow.contact.locationTZ || 'UTC-5 · Open to remote worldwide'}</div>
            </div>
          </div>
        </div>

        <div class="contact-form-col reveal-right">
          <form class="contact-form glass-card" id="contactForm" noValidate
            aria-label="Contact form" onSubmit={handleSubmit}>

            <div class="form-group">
              <label for="name" class="form-label">{tNow.contact.formName}</label>
              <input type="text" id="name" name="name" class="form-input"
                placeholder={tNow.contact.formNamePlaceholder}
                required autocomplete="name" aria-required="true" aria-describedby="name-error"
                onInput={handleFieldInput} onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">{tNow.contact.formEmail}</label>
              <input type="email" id="email" name="email" class="form-input"
                placeholder="your@email.com"
                required autocomplete="email" aria-required="true" aria-describedby="email-error"
                onInput={handleFieldInput} onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">{tNow.contact.formSubject}</label>
              <input type="text" id="subject" name="subject" class="form-input"
                placeholder={tNow.contact.formSubjectPlaceholder}
                onInput={handleFieldInput} onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">{tNow.contact.formMessage}</label>
              <textarea id="message" name="message" class="form-input form-textarea"
                placeholder={tNow.contact.formMessagePlaceholder}
                rows={5} required aria-required="true" aria-describedby="message-error"
                onInput={handleFieldInput} onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
            </div>

            <button type="submit" class="btn btn-primary form-submit" disabled={isSending}>
              {isSending
                ? <span class="submit-spinner" aria-hidden="true" />
                : <span>{tNow.contact.formSubmit}</span>
              }
            </button>

            {message && (
              <p class={`form-status form-status--${status}`} role="alert" aria-live="polite">
                {message}
              </p>
            )}

          </form>
        </div>

      </div>

    </SectionLayout>
  );
}
