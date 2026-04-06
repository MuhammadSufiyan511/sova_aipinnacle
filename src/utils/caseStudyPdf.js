function escapePdfText(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/[^\x20-\x7E]/g, '')
}

function wrapText(text, maxChars = 78) {
  const words = String(text || '').split(/\s+/).filter(Boolean)
  const lines = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxChars) {
      if (current) lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines
}

function addRect(commands, x, y, width, height, fillColor, strokeColor = null, lineWidth = 1, radius = 0) {
  const topY = y - height
  const rect = radius > 0
    ? `${x + radius} ${topY} m ${x + width - radius} ${topY} l ${x + width} ${topY} ${x + width} ${topY} ${x + width} ${topY + radius} c ${x + width} ${y - radius} l ${x + width} ${y} ${x + width} ${y} ${x + width - radius} ${y} c ${x + radius} ${y} l ${x} ${y} ${x} ${y} ${x} ${y - radius} c ${x} ${topY + radius} l ${x} ${topY} ${x} ${topY} ${x + radius} ${topY} c`
    : `${x} ${topY} ${width} ${height} re`

  if (fillColor) {
    commands.push(`${fillColor} rg`)
  }
  if (strokeColor) {
    commands.push(`${strokeColor} RG`)
    commands.push(`${lineWidth} w`)
  }
  commands.push(`${rect} ${fillColor && strokeColor ? 'B' : fillColor ? 'f' : 'S'}`)
}

function addText(commands, text, x, y, font = 'F1', size = 12, color = '0 0 0') {
  commands.push(`${color} rg`)
  commands.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdfText(text)}) Tj ET`)
}

function addWrappedText(commands, text, x, y, maxChars, font, size, color, lineGap = 6) {
  let currentY = y
  wrapText(text, maxChars).forEach((line) => {
    addText(commands, line, x, currentY, font, size, color)
    currentY -= size + lineGap
  })
  return currentY
}

export function downloadCaseStudyPdf({
  fileName,
  title,
  eyebrow,
  subtitle,
  category,
  businessType,
  headline,
  highlights = [],
  sections,
}) {
  const pageWidth = 595
  const pageHeight = 842
  const marginX = 52
  let currentY = 790
  const commands = []
  const contentWidth = pageWidth - marginX - 42

  // 1. Page Background & Sidebar Accent
  addRect(commands, 0, pageHeight, pageWidth, pageHeight, '1 1 1')
  addRect(commands, 0, pageHeight, 14, pageHeight, '0.06 0.66 0.51')

  // 2. Header Section
  addRect(commands, marginX, currentY, contentWidth, 80, '0.06 0.66 0.51', null, 1, 20)
  addText(commands, eyebrow || 'SOVA CASE STUDY', marginX + 24, currentY - 30, 'F2', 10, '1 1 1')
  addText(commands, title, marginX + 24, currentY - 54, 'F2', 24, '1 1 1')
  currentY -= 104

  // 3. Metadata Row
  addText(commands, (category || 'Industry').toUpperCase(), marginX, currentY, 'F2', 9, '0.06 0.66 0.51')
  addText(commands, `|  ${businessType || 'Business Solution'}`, marginX + (category?.length * 5 || 60), currentY, 'F1', 9, '0.4 0.44 0.5')
  currentY -= 32

  // 4. Headline & Intention
  // if (headline) {
  //   currentY = addWrappedText(commands, headline, marginX, currentY, 58, 'F2', 20, '0.1 0.15 0.2', 6)
  //   currentY -= 8
  // }

  if (subtitle) {
    currentY = addWrappedText(commands, subtitle, marginX, currentY, 82, 'F1', 12, '0.4 0.44 0.5', 6)
    currentY -= 24
  }

  // 5. Highlights (Impact Metrics)
  if (highlights.length) {
    const cardGap = 16
    const cardWidth = (contentWidth - cardGap) / 2
    highlights.slice(0, 2).forEach((item, index) => {
      const cardX = marginX + index * (cardWidth + cardGap)
      const fill = index === 0 ? '0.94 0.99 0.97' : '0.96 0.96 1'
      addRect(commands, cardX, currentY, cardWidth, 72, fill, '0.88 0.94 0.91', 0.5, 18)
      addText(commands, item.value, cardX + 20, currentY - 28, 'F2', 22, '0.06 0.66 0.51')
      addWrappedText(commands, item.label, cardX + 20, currentY - 48, 28, 'F1', 10, '0.3 0.35 0.4', 4)
    })
    currentY -= 100
  }

  // 6. Detailed Analysis Sections
  sections.forEach((section) => {
    // Section Header
    if (section.heading) {
      addText(commands, section.heading.toUpperCase(), marginX, currentY, 'F2', 9, '0.06 0.66 0.51')
      currentY -= 16
    }
    
    // Section Body Card
    const bodyLines = wrapText(section.body, 82).length
    const cardHeight = (bodyLines * 16) + 30
    
    if (currentY - cardHeight < 60) {
      // Very basic page overflow handling (not full pagination but a safety gap)
      currentY = 700 
    }

    addRect(commands, marginX, currentY, contentWidth, cardHeight, '1 1 1', '0.92 0.94 0.95', 0.5, 14)
    currentY = addWrappedText(commands, section.body, marginX + 18, currentY - 22, 80, 'F1', 11, '0.2 0.25 0.3', 5)
    currentY -= 18
  })

  // 7. Footer
  const footerY = 50
  addRect(commands, marginX, footerY + 12, contentWidth, 0.5, '0.9 0.92 0.95')
  addText(commands, 'SOVA AI - THE FUTURE OF CUSTOMER ENGAGEMENT', marginX, footerY, 'F2', 8, '0.6 0.64 0.7')
  addText(commands, 'WWW.SOVA.AI', marginX + contentWidth - 60, footerY, 'F2', 8, '0.06 0.66 0.51')

  const stream = commands.join('\n')
  const objects = [
    '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
    '2 0 obj << /Type /Pages /Count 1 /Kids [3 0 R] >> endobj',
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj`,
    '4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj',
    '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj',
    `6 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj`,
  ]

  let pdf = '%PDF-1.4\n'
  const offsets = [0]

  for (const object of objects) {
    offsets.push(pdf.length)
    pdf += `${object}\n`
  }

  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`
  }

  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

  const blob = new Blob([pdf], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
