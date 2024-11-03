import path from 'node:path';

export const DEFAULT_PAGE = 1;
export const DEFAULT_PER_PAGE = 5;

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
