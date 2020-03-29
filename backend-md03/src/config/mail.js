export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 * Empresas de envio e email
 *
 * - Amazon SES (*)
 * - Mailgun
 * - Sparkpost
 * - Mandril (Mailchimp)
 * - GMAIL (Não recomentado pois com o tempo bloqueia)
 *
 * - Mailtrap (DEV)
 */
