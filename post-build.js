#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copiar index.html de dist a dist/client
const source = path.join(__dirname, 'dist', 'index.html');
const dest = path.join(__dirname, 'dist', 'client', 'index.html');

try {
  const content = fs.readFileSync(source);
  fs.writeFileSync(dest, content);
  console.log('✓ index.html copiado a dist/client/');
} catch (error) {
  console.error('Error copiando index.html:', error.message);
  process.exit(1);
}
