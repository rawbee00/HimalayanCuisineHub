# Deployment Guide for Himalayan Cuisine Hub

## Prerequisites
- Node.js 18 or later
- npm or yarn
- Git
- Netlify account
- Domain name (himalayan-curry.com)

## Local Development

1. Install dependencies:
   ```bash
   cd client
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Deployment to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Log in to [Netlify](https://app.netlify.com/).

3. Click "Add new site" > "Import an existing project".

4. Connect to your Git provider and select your repository.

5. Configure the build settings:
   - Build command: `cd client && npm run build`
   - Publish directory: `dist`
   - Environment variables: Add any required environment variables

6. Click "Deploy site".

## Connecting Custom Domain

1. In Netlify, go to "Site settings" > "Domain management".

2. Click "Add custom domain" and enter `himalayan-curry.com`.

3. Follow Netlify's instructions to verify domain ownership.

4. Update your domain's DNS settings:
   - Log in to your domain registrar
   - Update the nameservers to Netlify's nameservers or add the DNS records provided by Netlify
   
   For Netlify DNS, use these nameservers:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

5. Wait for DNS propagation (can take up to 48 hours, but usually faster).

## Post-Deployment

1. Enable HTTPS in Netlify (should be automatic).
2. Set up any necessary redirects in the `netlify.toml` file.
3. Configure environment variables for production in Netlify's site settings.

## Troubleshooting

- If you get build errors, check the build logs in Netlify
- Ensure all environment variables are set in Netlify
- Clear your browser cache if you don't see updates
- Check DNS propagation using tools like [dnschecker.org](https://dnschecker.org/)
