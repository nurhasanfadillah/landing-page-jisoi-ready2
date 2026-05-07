export function trackConversion() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: 'AW-18080053795/bp1bCNH745kcEKP0nq1D',
    value: 1.0,
    currency: 'IDR',
  })
}
