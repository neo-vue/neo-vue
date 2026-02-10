import { ComponentInternalInstance } from 'vue';

export function getRef(that: ComponentInternalInstance, refName: string): any {
  if (!that) return;
  if (!that.refs) return;
  if (!that.refs[refName]) return;
  return that.refs[refName];
}

export function darkedColor(hex: string | undefined, pourcentage: number) {
  if (!hex) return null;
  if (pourcentage < 0 || pourcentage > 100) throw new Error('Invalid pourcent');

  // Valider l'entrée hexadécimale
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    console.warn('Entrée hexadécimale invalide');
    return null;
  }

  // Obtenir les composants RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Dark every component
  r = Math.floor(r * (1 - pourcentage / 100));
  g = Math.floor(g * (1 - pourcentage / 100));
  b = Math.floor(b * (1 - pourcentage / 100));

  // Convertir les composants RGB en hexadécimal
  const darked = `#${(r * 65536 + g * 256 + b).toString(16).padStart(6, '0')}`;

  return darked;
}
