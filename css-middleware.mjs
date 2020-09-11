import fs from 'fs';
import path from 'path';

export function cssMiddleware(ctx, next) {
  if (ctx.path.endsWith('.css')) {
    const filePath = path.join(process.cwd(), ctx.path.split('/').join(path.sep));
    const cssText = fs.readFileSync(filePath, 'utf-8');
    ctx.body = `export default ${JSON.stringify(cssText)}`;
    ctx.status = 200;
    ctx.type = 'js'
    return;
  }
  return next();
}