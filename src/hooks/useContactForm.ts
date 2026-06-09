import { useEffect } from 'preact/hooks';
import { ContactService } from '../services/ContactService';
import { langSignal } from '../services/LanguageService';

const CONTACT_EMAIL = 'barrerodavid10@gmail.com';
const contactService = new ContactService(CONTACT_EMAIL);

interface FieldRule { id: string; required: boolean; pattern?: RegExp; patternMsg?: string; }

const FIELDS: FieldRule[] = [
  { id: 'name',    required: true },
  { id: 'email',   required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, patternMsg: 'Invalid email address' },
  { id: 'message', required: true },
];

function validateForm(form: HTMLFormElement): boolean {
  let valid = true;
  FIELDS.forEach(({ id, required, pattern, patternMsg }) => {
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
    const group = field?.parentElement;
    if (!field || !group) return;
    const value = field.value.trim();
    let error = '';
    if (required && !value) error = 'This field is required';
    else if (pattern && value && !pattern.test(value)) error = patternMsg ?? 'Invalid value';
    group.classList.toggle('has-error', !!error);
    let errEl = group.querySelector<HTMLElement>('.field-error');
    if (error) {
      if (!errEl) {
        errEl = document.createElement('span');
        errEl.className = 'field-error';
        errEl.setAttribute('role', 'alert');
        group.appendChild(errEl);
      }
      errEl.textContent = error;
      valid = false;
    } else {
      errEl?.remove();
    }
  });
  return valid;
}

export function useContactForm(): void {
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    if (!form) return;

    const clearErr = (field: HTMLInputElement | HTMLTextAreaElement) => {
      field.parentElement?.classList.remove('has-error');
      field.parentElement?.querySelector('.field-error')?.remove();
    };

    FIELDS.forEach(({ id }) => {
      const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
      field?.addEventListener('input',  () => clearErr(field));
      field?.addEventListener('focus',  () => field.parentElement?.classList.add('focused'));
      field?.addEventListener('blur',   () => { if (!field.value) field.parentElement?.classList.remove('focused'); });
    });

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      const btn     = document.getElementById('submitBtn') as HTMLButtonElement;
      const text    = document.getElementById('submitText')!;
      const spinner = document.getElementById('submitLoading')!;
      const status  = document.getElementById('formStatus')!;
      const isEs    = langSignal.value === 'es';

      btn.disabled          = true;
      text.style.display    = 'none';
      spinner.style.display = 'inline-block';
      status.textContent    = '';
      status.className      = 'form-status';

      try {
        await contactService.submit({
          name:    (form.querySelector('#name')    as HTMLInputElement).value.trim(),
          email:   (form.querySelector('#email')   as HTMLInputElement).value.trim(),
          subject: (form.querySelector('#subject') as HTMLInputElement).value.trim() || 'Portfolio contact',
          message: (form.querySelector('#message') as HTMLTextAreaElement).value.trim(),
        });
        status.textContent = isEs ? '✓ ¡Mensaje enviado! Te respondo pronto.' : "✓ Message sent! I'll get back to you soon.";
        status.className = 'form-status success';
        form.reset();
        form.querySelectorAll('.form-group').forEach(g => g.classList.remove('focused'));
      } catch {
        status.textContent = isEs
          ? `✗ Error al enviar. Escríbeme a ${CONTACT_EMAIL}`
          : `✗ Could not send. Email me directly at ${CONTACT_EMAIL}`;
        status.className = 'form-status error';
      } finally {
        btn.disabled          = false;
        text.style.display    = 'inline';
        spinner.style.display = 'none';
      }
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 8000);
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);
}
