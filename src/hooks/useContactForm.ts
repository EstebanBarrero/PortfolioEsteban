import { useReducer, useRef, useCallback } from 'preact/hooks';
import { ContactService } from '../services/ContactService';
import { langSignal } from '../services/LanguageService';

const CONTACT_EMAIL = 'barrerodavid10@gmail.com';
const contactService = new ContactService(CONTACT_EMAIL);

// ── State machine ──────────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  status: FormStatus;
  message: string;
}

type FormAction =
  | { type: 'submit' }
  | { type: 'success'; message: string }
  | { type: 'error';   message: string }
  | { type: 'reset' };

const INITIAL: FormState = { status: 'idle', message: '' };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'submit':  return { status: 'sending', message: '' };
    case 'success': return { status: 'success', message: action.message };
    case 'error':   return { status: 'error',   message: action.message };
    case 'reset':   return INITIAL;
    default:        return state;
  }
}

// ── Validation ─────────────────────────────────────────────────────────────────

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
        errEl.id = `${id}-error`;
        errEl.setAttribute('role', 'alert');
        group.appendChild(errEl);
      }
      errEl.textContent = error;
      field.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      errEl?.remove();
      field.setAttribute('aria-invalid', 'false');
    }
  });
  return valid;
}

// ── Public interface ───────────────────────────────────────────────────────────

export interface ContactFormState {
  status: FormStatus;
  message: string;
  isSending: boolean;
}

export interface ContactFormHandlers {
  handleSubmit: (e: Event) => Promise<void>;
  handleFieldInput: (e: Event) => void;
  handleFieldFocus: (e: Event) => void;
  handleFieldBlur:  (e: Event) => void;
}

export function useContactForm(): [ContactFormState, ContactFormHandlers] {
  const [state, dispatch] = useReducer(formReducer, INITIAL);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReset = (ms = 8000) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => dispatch({ type: 'reset' }), ms);
  };

  const handleSubmit = useCallback(async (e: Event) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!validateForm(form)) return;

    dispatch({ type: 'submit' });

    const isEs = langSignal.value === 'es';
    try {
      await contactService.submit({
        name:    (form.querySelector('#name')    as HTMLInputElement).value.trim(),
        email:   (form.querySelector('#email')   as HTMLInputElement).value.trim(),
        subject: (form.querySelector('#subject') as HTMLInputElement).value.trim() || 'Portfolio contact',
        message: (form.querySelector('#message') as HTMLTextAreaElement).value.trim(),
      });
      dispatch({
        type: 'success',
        message: isEs
          ? '✓ ¡Mensaje enviado! Te respondo pronto.'
          : "✓ Message sent! I'll get back to you soon.",
      });
      form.reset();
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('focused'));
    } catch {
      dispatch({
        type: 'error',
        message: isEs
          ? `✗ Error al enviar. Escríbeme a ${CONTACT_EMAIL}`
          : `✗ Could not send. Email me directly at ${CONTACT_EMAIL}`,
      });
    }
    scheduleReset();
  }, []);

  const handleFieldInput = useCallback((e: Event) => {
    const field = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    field.parentElement?.classList.remove('has-error');
    field.parentElement?.querySelector('.field-error')?.remove();
  }, []);

  const handleFieldFocus = useCallback((e: Event) => {
    (e.currentTarget as HTMLInputElement).parentElement?.classList.add('focused');
  }, []);

  const handleFieldBlur = useCallback((e: Event) => {
    const field = e.currentTarget as HTMLInputElement;
    if (!field.value) field.parentElement?.classList.remove('focused');
  }, []);

  return [
    { status: state.status, message: state.message, isSending: state.status === 'sending' },
    { handleSubmit, handleFieldInput, handleFieldFocus, handleFieldBlur },
  ];
}
