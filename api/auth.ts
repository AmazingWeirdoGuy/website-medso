import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  
  if (!clientId) {
    return res.status(500).json({ error: 'GitHub OAuth Client ID not configured' });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    redirect_uri: `${req.headers.origin || ''}/api/callback`
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
}