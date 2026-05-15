import currencyCsv from '../assets/currency.csv?raw'

/**
 * Parses the embedded CSV file and returns a deduplicated, sorted list
 * of formatted currency strings, e.g., "United States (USD)".
 */
export function getAvailableCurrencies() {
  if (!currencyCsv) return []

  const lines = currencyCsv.split('\n')
  if (lines.length < 2) return []

  // Extract indices from header
  const headerLine = lines[0]
  // simple split by comma, works as long as headers don't have commas inside quotes
  const headers = headerLine.split(',').map(h => h.replace(/^"|"$/g, '').trim())
  
  const titleIdx = headers.indexOf('title')
  const currencyIdx = headers.indexOf('currency')

  if (titleIdx === -1 || currencyIdx === -1) {
    console.error('currency.csv is missing required columns')
    return []
  }

  const uniqueCurrencies = new Set()

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // Simple CSV parser for this specific format
    // Matches fields separated by comma, respecting double quotes
    const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g
    const matches = []
    let match
    
    // We can also just split by '","' since the format is very strict
    // Let's use the simpler approach:
    const columns = line.split('","').map(col => col.replace(/^"|"$/g, ''))
    
    if (columns.length > Math.max(titleIdx, currencyIdx)) {
      const title = columns[titleIdx]?.trim()
      const currency = columns[currencyIdx]?.trim()

      if (title && currency && currency !== 'NULL') {
        uniqueCurrencies.add(`${title} (${currency})`)
      }
    }
  }

  return Array.from(uniqueCurrencies).sort((a, b) => a.localeCompare(b))
}
