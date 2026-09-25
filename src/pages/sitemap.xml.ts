import type { APIRoute } from 'astro';
import { publicPages } from '../site';
export const GET: APIRoute = ({ site }) => {
  const pages = publicPages.map(href => '<url><loc>' + new URL(href, site).href + '</loc></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + pages + '</urlset>', { headers: { 'Content-Type': 'application/xml' } });
};
