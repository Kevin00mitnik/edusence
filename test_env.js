import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const envPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'server', '.env');
console.log('Loading env from:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading env:', result.error);
} else {
  console.log('CLOUDINARY_CLOUD_NAME:', `[${process.env.CLOUDINARY_CLOUD_NAME}]`);
  console.log('CLOUDINARY_API_KEY configured:', Boolean(process.env.CLOUDINARY_API_KEY));
  console.log('CLOUDINARY_API_SECRET configured:', Boolean(process.env.CLOUDINARY_API_SECRET));
}
