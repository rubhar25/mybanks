// Base-aware URL helper. GitHub Pages serves the site under /mybanks;
// the real domain will use '/'. Always build internal hrefs through url().
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path) {
  return base + path;
}
