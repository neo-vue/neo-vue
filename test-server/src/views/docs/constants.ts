export const defaultProps = [
  { name: 'color', type: ['String'], required: false, default: 'black', description: 'Component color' },
  { name: 'backgroundColor', type: ['String'], required: true, default: 'white', description: 'Component background color' },
  { name: 'rounded', type: ['Boolean', 'String'], required: false, default: 'null', description: 'Component Component radius' },
  { name: 'shadow', type: ['Boolean', 'String'], required: false, default: 'true', description: 'Component shadow' },
  { name: 'border', type: ['String'], required: false, default: 'null', description: 'Component border'},
  { name: 'padding', type: ['String'], required: false, default: 'null', description: 'Component padding' },
  { name: 'width', type: ['String'], required: false, default: 'null', description: 'Component width' },
  { name: 'height', type: ['String'], required: false, default: 'null', description: 'Component height' },
  // { name: 'disabled', type: 'Boolean', required: false, default: 'false', description: 'Button disabled' }
];
