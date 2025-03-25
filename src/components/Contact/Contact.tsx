import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./Contact.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface IContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormInputs>({
    mode: "onTouched", // Validate fields when they lose focus
  });

  const onSubmit: SubmitHandler<IContactFormInputs> = async (_data) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and show success message
    reset();
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Let's work together on your next project
          </p>

          <div className="contact__methods">
            <div className="contact__method">
              <div className="contact__method-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact__method-text">
                <h3>Email</h3>
                <p>
                  <a
                    href="mailto:samuele.villa@outlook.com"
                    className="contact__link"
                  >
                    samuele.villa@outlook.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__method">
              <div className="contact__method-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact__method-text">
                <h3>Location</h3>
                <p>Milan, Italy</p>
              </div>
            </div>

            <div className="contact__social">
              <a
                href="https://github.com"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://twitter.com"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__form-container">
          {isSubmitted ? (
            <div className="contact__success" role="alert">
              <div className="contact__success-icon" aria-hidden="true">
                ✓
              </div>
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Your name"
                  className={`contact__input ${errors.name ? "contact__input--error" : ""}`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="contact__error" id="name-error" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`contact__input ${errors.email ? "contact__input--error" : ""}`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="contact__error" id="email-error" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`contact__textarea ${errors.message ? "contact__textarea--error" : ""}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="contact__error" id="message-error" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`button button--primary contact__submit ${isSubmitting ? "contact__submit--loading" : ""}`}
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
