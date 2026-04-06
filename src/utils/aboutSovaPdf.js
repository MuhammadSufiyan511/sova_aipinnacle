import { aboutSovaPdf } from '../data/aboutSovaPdf'

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

function addRect(commands, x, y, width, height, fillColor, strokeColor = null, lineWidth = 1) {
  const topY = y - height
  if (fillColor) commands.push(`${fillColor} rg`)
  if (strokeColor) {
    commands.push(`${strokeColor} RG`)
    commands.push(`${lineWidth} w`)
  }
  commands.push(`${x} ${topY} ${width} ${height} re ${fillColor && strokeColor ? 'B' : fillColor ? 'f' : 'S'}`)
}

function addText(commands, text, x, y, font = 'F1', size = 12, color = '0 0 0') {
  commands.push(`${color} rg`)
  commands.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdfText(text)}) Tj ET`)
}

function buildAboutSovaPdfBlob() {
  const pageWidth = 595
  const pageHeight = 842
  const marginX = 44
  const topMargin = 64
  const bottomMargin = 54
  const contentWidth = pageWidth - marginX * 2
  const pages = []

  let pageCommands = []
  let currentY = pageHeight - topMargin
  let pageIndex = 0

  const startPage = () => {
    pageCommands = []
    currentY = pageHeight - topMargin
    pageIndex += 1

    addRect(pageCommands, 0, pageHeight, pageWidth, pageHeight, '1 1 1')
    addRect(pageCommands, 0, pageHeight, pageWidth, 24, '0.06 0.66 0.51')
    addText(pageCommands, aboutSovaPdf.eyebrow, marginX, pageHeight - 38, 'F2', 10, '0.06 0.66 0.51')
  }

  const finishPage = () => {
    addText(pageCommands, `Page ${pageIndex}`, pageWidth - 84, 24, 'F1', 9, '0.48 0.55 0.6')
    addText(pageCommands, 'SOVA platform overview', marginX, 24, 'F1', 9, '0.48 0.55 0.6')
    pages.push(pageCommands.join('\n'))
  }

  const ensureSpace = (neededHeight) => {
    if (currentY - neededHeight < bottomMargin) {
      finishPage()
      startPage()
    }
  }

  const addWrappedBlock = (text, x, y, maxChars, font, size, color, lineGap = 5) => {
    let nextY = y
    wrapText(text, maxChars).forEach((line) => {
      addText(pageCommands, line, x, nextY, font, size, color)
      nextY -= size + lineGap
    })
    return nextY
  }

  startPage()

  addRect(pageCommands, marginX, currentY, contentWidth, 110, '0.06 0.66 0.51')
  addText(pageCommands, aboutSovaPdf.title, marginX + 24, currentY - 42, 'F2', 26, '1 1 1')
  currentY = addWrappedBlock(aboutSovaPdf.subtitle, marginX + 24, currentY - 66, 72, 'F1', 11, '1 1 1', 4) - 10

  const highlightGap = 12
  const highlightWidth = (contentWidth - highlightGap * 2) / 3
  aboutSovaPdf.highlights.forEach((item, index) => {
    const x = marginX + index * (highlightWidth + highlightGap)
    addRect(pageCommands, x, currentY, highlightWidth, 78, index === 1 ? '0.95 0.97 1' : '0.93 0.99 0.96', '0.87 0.93 0.9')
    addText(pageCommands, item.value, x + 14, currentY - 24, 'F2', 16, '0.06 0.66 0.51')
    addWrappedBlock(item.label, x + 14, currentY - 44, 16, 'F1', 9, '0.19 0.24 0.31', 2)
  })
  currentY -= 100

  aboutSovaPdf.sections.forEach((section) => {
    const estimatedLines = section.paragraphs.reduce((sum, paragraph) => sum + wrapText(paragraph, 84).length, 0)
    ensureSpace(estimatedLines * 18 + 54)

    addText(pageCommands, section.heading, marginX, currentY, 'F2', 14, '0.06 0.66 0.51')
    currentY -= 22

    section.paragraphs.forEach((paragraph) => {
      currentY = addWrappedBlock(paragraph, marginX, currentY, 84, 'F1', 11, '0.19 0.24 0.31', 5) - 10
    })
    currentY -= 4
  })

  finishPage()

  const fontObjects = [
    '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
    `2 0 obj << /Type /Pages /Count ${pages.length} /Kids [${pages.map((_, index) => `${index * 2 + 3} 0 R`).join(' ')}] >> endobj`,
  ]

  const dynamicObjects = []
  pages.forEach((stream, index) => {
    const pageObjectNumber = index * 2 + 3
    const contentObjectNumber = index * 2 + 4
    dynamicObjects.push(
      `${pageObjectNumber} 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${pages.length * 2 + 3} 0 R /F2 ${pages.length * 2 + 4} 0 R >> >> /Contents ${contentObjectNumber} 0 R >> endobj`,
      `${contentObjectNumber} 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj`
    )
  })

  const fontDefs = [
    `${pages.length * 2 + 3} 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj`,
    `${pages.length * 2 + 4} 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj`,
  ]

  const objects = [...fontObjects, ...dynamicObjects, ...fontDefs]

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

  return new Blob([pdf], { type: 'application/pdf' })
}

function openBlob(blob, download = false) {
  const url = URL.createObjectURL(blob)

  if (download) {
    const link = document.createElement('a')
    link.href = url
    link.download = aboutSovaPdf.fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

export function viewAboutSovaPdf() {
  openBlob(buildAboutSovaPdfBlob(), false)
}

export function downloadAboutSovaPdf() {
  openBlob(buildAboutSovaPdfBlob(), true)
}
