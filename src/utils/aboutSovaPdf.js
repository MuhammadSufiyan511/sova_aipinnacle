import i18n from '../i18n'
import { aboutSovaPdf } from '../data/aboutSovaPdf'
import { aboutSovaPdfLocales } from '../data/aboutSovaPdfLocales'

function normalizeLanguage(language) {
  return String(language || 'en').toLowerCase().split('-')[0]
}

function isRtlLanguage(language) {
  return ['ur', 'ar', 'bn', 'hi'].includes(normalizeLanguage(language))
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getLocalizedAboutSovaDocument() {
  const language = normalizeLanguage(i18n.resolvedLanguage || i18n.language)
  return {
    language,
    dir: isRtlLanguage(language) ? 'rtl' : 'ltr',
    document: aboutSovaPdfLocales[language] || aboutSovaPdf,
  }
}

function buildAboutSovaDocumentHtml({ document, dir, language }) {
  const highlightCards = (document.highlights || [])
    .map(
      (item) => `
        <div class="highlight-card">
          <div class="highlight-value">${escapeHtml(item.value)}</div>
          <div class="highlight-label">${escapeHtml(item.label)}</div>
        </div>
      `
    )
    .join('')

  const sections = (document.sections || [])
    .map(
      (section) => `
        <section class="content-section">
          <h2>${escapeHtml(section.heading)}</h2>
          ${(section.paragraphs || [])
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join('')}
        </section>
      `
    )
    .join('')

  return `<!doctype html>
<html lang="${escapeHtml(language)}" dir="${escapeHtml(dir)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(document.title)}</title>
    <style>
      :root {
        color-scheme: light;
        --page-bg: #f5fbf8;
        --card-bg: #ffffff;
        --primary: #10b981;
        --primary-dark: #0f8f72;
        --text: #17324a;
        --muted: #5d7a83;
        --line: #d5ebe4;
        --soft: #eef9f4;
        --soft-alt: #eef4ff;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        background:
          radial-gradient(circle at top left, rgba(16, 185, 129, 0.1), transparent 32%),
          radial-gradient(circle at top right, rgba(6, 182, 212, 0.08), transparent 30%),
          var(--page-bg);
        color: var(--text);
        font-family: Inter, "Segoe UI", Tahoma, Arial, "Noto Nastaliq Urdu", "Noto Sans Arabic", "Noto Sans Bengali", "Noto Sans Devanagari", sans-serif;
        line-height: 1.7;
      }

      .page {
        max-width: 920px;
        margin: 0 auto;
        padding: 48px 24px 56px;
      }

      .hero {
        background: linear-gradient(135deg, #10b981 0%, #0f8f72 100%);
        color: #fff;
        border-radius: 30px;
        padding: 34px 36px;
        box-shadow: 0 24px 60px rgba(16, 185, 129, 0.18);
      }

      .eyebrow {
        margin: 0 0 12px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        opacity: 0.92;
      }

      h1 {
        margin: 0;
        font-size: clamp(2.2rem, 4vw, 3.4rem);
        line-height: 1.04;
        letter-spacing: -0.04em;
      }

      .subtitle {
        margin: 18px 0 0;
        max-width: 680px;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.92);
      }

      .highlights {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 24px;
      }

      .highlight-card {
        border: 1px solid var(--line);
        border-radius: 22px;
        background: var(--card-bg);
        padding: 18px 18px 16px;
        min-height: 112px;
      }

      .highlight-card:nth-child(2) {
        background: var(--soft-alt);
      }

      .highlight-value {
        color: var(--primary);
        font-size: 1.8rem;
        font-weight: 800;
        line-height: 1.05;
        letter-spacing: -0.03em;
        margin-bottom: 8px;
      }

      .highlight-label {
        color: var(--text);
        font-size: 0.98rem;
        line-height: 1.45;
      }

      .content {
        margin-top: 22px;
        background: var(--card-bg);
        border: 1px solid var(--line);
        border-radius: 28px;
        padding: 18px 24px 24px;
        box-shadow: 0 18px 50px rgba(15, 35, 42, 0.08);
      }

      .content-section {
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
      }

      .content-section:last-child {
        border-bottom: none;
        padding-bottom: 4px;
      }

      h2 {
        margin: 0 0 10px;
        font-size: 1.2rem;
        line-height: 1.35;
        color: var(--primary);
        letter-spacing: -0.02em;
      }

      p {
        margin: 0 0 12px;
        font-size: 1rem;
        color: var(--text);
      }

      p:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 760px) {
        .page {
          padding: 24px 16px 32px;
        }

        .hero {
          border-radius: 24px;
          padding: 26px 22px;
        }

        .highlights {
          grid-template-columns: 1fr;
        }

        .content {
          border-radius: 22px;
          padding: 14px 18px 18px;
        }
      }

      @media print {
        body {
          background: #fff;
        }

        .page {
          max-width: none;
          padding: 0;
        }

        .hero,
        .content {
          box-shadow: none;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="eyebrow">${escapeHtml(document.eyebrow)}</p>
        <h1>${escapeHtml(document.title)}</h1>
        <p class="subtitle">${escapeHtml(document.subtitle)}</p>
      </section>

      <section class="highlights">${highlightCards}</section>

      <section class="content">${sections}</section>
    </main>
  </body>
</html>`
}

function openHtmlDocument(html, title) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const popup = window.open(url, '_blank', 'noopener,noreferrer')

  if (popup) {
    popup.document.title = title
  }

  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

export function viewAboutSovaPdf() {
  const localized = getLocalizedAboutSovaDocument()
  openHtmlDocument(buildAboutSovaDocumentHtml(localized), localized.document.title)
}

export function downloadAboutSovaPdf() {
  viewAboutSovaPdf()
}
