module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
      red500: '#F56565',
      orange400: '#f6ad55',
      gray400: '#cbd5e0',
      blue400: '#63B3ED',
      blue500: '#4299E1',
    }

  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    
  ],
}
