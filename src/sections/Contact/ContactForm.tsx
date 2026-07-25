import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/Button";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s-]{7,20}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Please enter at least 2 characters.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = values.phone.trim();
  if (phone && !phonePattern.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Please enter at least 10 characters.";
  }

  return errors;
}

function fieldClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-4 py-3.5 text-base text-[#121e37] transition-all duration-200 outline-none placeholder:text-gray-400",
    "focus:ring-2 focus:ring-offset-0",
    hasError
      ? "border-red-600 focus:border-red-600 focus:ring-red-600/15"
      : "border-[#1a1a1a]/15 focus:border-red-600 focus:ring-red-600/10",
  ].join(" ");
}

type FieldProps = {
  id: keyof FormValues;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, required, error, children }: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-necto_mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#121e37]/70"
      >
        {label}
        {required ? <span className="ml-1 text-red-600">*</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (isSubmitted) {
      setErrors((prev) => {
        const next = validate({ ...values, [field]: value });
        const updated = { ...prev };
        if (next[field]) updated[field] = next[field];
        else delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSuccess(true);
    setValues(initialValues);
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="mt-10 rounded-2xl border border-red-600/15 bg-red-50/60 p-6 xs:mt-12 xs:p-8 lg:mt-14">
        <p className="font-necto_mono text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
          Message sent
        </p>
        <h3 className="mt-3 font-apfel_grotezk text-2xl font-semibold tracking-tight text-[#121e37]">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-gray-700">
          We have received your enquiry and will respond as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 font-necto_mono text-sm font-semibold uppercase tracking-[0.14em] text-red-600 transition-colors hover:text-red-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-[#1a1a1a]/10 bg-[#fafafa] p-6 xs:mt-12 xs:p-8 lg:mt-14"
    >
      <div className="mb-6">
        <p className="font-necto_mono text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
          Send a message
        </p>
        <h3 className="mt-2 font-apfel_grotezk text-2xl font-semibold tracking-tight text-[#121e37]">
          Tell us about your enquiry
        </h3>
      </div>

      <div className="space-y-5">
        <Field
          id="fullName"
          label="Full name"
          required
          error={errors.fullName}
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={fieldClass(Boolean(errors.fullName))}
            placeholder="Your full name"
          />
        </Field>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="email" label="Email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClass(Boolean(errors.email))}
              placeholder="you@company.com"
            />
          </Field>

          <Field id="phone" label="Phone" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClass(Boolean(errors.phone))}
              placeholder="+964 770 000 0000"
            />
          </Field>
        </div>

        <Field id="message" label="Message" required error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass(Boolean(errors.message))} min-h-[140px] resize-y`}
            placeholder="How can we help you?"
          />
        </Field>
      </div>

      <div className="mt-8">
        <Button type="submit" fullWidth>
          Send message
        </Button>
      </div>
    </form>
  );
};
