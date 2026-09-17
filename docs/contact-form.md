# Contact form setup (IONOS)

The form posts to /api/contact and sends email through IONOS SMTP. The sender
is the authenticated mailbox; Reply-To is the visitor. No database or automatic
reply is used.

1. Copy .env.example to .env.local. Enter the full IONOS mailbox address in
   SMTP_USER and its mailbox password in SMTP_PASSWORD (not the customer login).
   Quote the password in the env file, especially if it contains # characters.
2. SMTP_HOST defaults to smtp.ionos.de and SMTP_PORT to 465 (implicit TLS).
   Port 587 is also supported and requires STARTTLS. Certificate verification
   remains enabled. CONTACT_EMAIL defaults to info@alltagsteam.com.
3. Configure the same server-only variables in production and restart/redeploy.
   Use a Node.js host that permits outbound SMTP on the configured port. Static
   hosting and Edge runtimes cannot run this endpoint. Never commit credentials
   or prefix these variables with NEXT_PUBLIC_.
4. Confirm the IONOS processing agreement and mailbox retention settings.
   The website hosting provider is still unspecified in the existing privacy
   notice; complete that disclosure with the actual host before publishing.
5. Submit a non-sensitive test and confirm inbox receipt and Reply-To. SMTP
   acceptance alone does not prove inbox delivery.

Missing credentials and delivery failures return 503, even in development.
The handler never logs form contents. Errors preserve input and offer direct
phone and email alternatives. Body size and field lengths are bounded;
cross-origin browser requests and honeypot submissions are rejected.
Configure host-level rate limiting for /api/contact in production; a honeypot
provides only basic spam protection.

Checks: node --test tests/contact-route.test.cjs; npm run lint; npm run build.

Sources checked September 2026:
- https://www.ionos.de/hilfe/e-mail/allgemeine-themen/serverinformationen-fuer-imap-pop3-und-smtp/
- https://www.ionos.de/terms-gtc/datenschutzerklaerung/
- https://nodemailer.com/smtp
