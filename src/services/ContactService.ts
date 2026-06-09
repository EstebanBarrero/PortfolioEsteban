export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactService {
  private readonly _endpoint: string;

  constructor(email: string) {
    this._endpoint = `https://formsubmit.co/ajax/${email}`;
  }

  async submit(payload: ContactPayload): Promise<void> {
    const res = await fetch(this._endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        _captcha: 'false',
        _template: 'table',
      }),
    });
    const data: { success: string | boolean } = await res.json();
    const ok = data.success === true || data.success === 'true';
    if (!ok) throw new Error('FormSubmit returned failure');
  }
}
