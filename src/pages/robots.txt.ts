import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => new Response(
  site?.hostname === 'example.com'
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', site).href}\n`,
  { headers: { 'Content-Type': 'text/plain' } },
);
