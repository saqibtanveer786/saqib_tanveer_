import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API,
  server: process.env.SERVER_PREFIX, // e.g., 'us7' from 'us7.api.mailchimp.com'
});
export default mailchimp;
