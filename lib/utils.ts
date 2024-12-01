import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomColors(count: number) {
  const colors = [];
  const goldenRatio = 0.618033988749895; // Golden ratio conjugate
  let hue = Math.random();

  for (let i = 0; i < count; i++) {
    // Use golden ratio to spread hues evenly
    hue += goldenRatio;
    hue %= 1;

    // Convert to degrees and create HSL
    const hueInDegrees = Math.floor(hue * 360);
    // Keep saturation and lightness in ranges that ensure visibility
    const saturation = Math.floor(65 + Math.random() * 20); // 65-85%
    const lightness = Math.floor(45 + Math.random() * 10); // 45-55%

    colors.push(`hsl(${hueInDegrees}, ${saturation}%, ${lightness}%)`);
  }

  return colors;
}
