// Minimaler statischer Dev-Server (nur fuer die lokale Vorschau).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = new URL( '.', import.meta.url ).pathname;
const PORT = 8123;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
};

createServer( async ( req, res ) => {
  try {
    let p = decodeURIComponent( new URL( req.url, 'http://x' ).pathname );
    if ( p === '/' ) p = '/becoming-many-making-of/p/duftfahne/index.html';
    const file = normalize( join( ROOT, p ) );
    if ( ! file.startsWith( ROOT ) ) { res.writeHead( 403 ).end(); return; }
    const data = await readFile( file );
    res.writeHead( 200, { 'content-type': TYPES[ extname( file ) ] || 'application/octet-stream' } );
    res.end( data );
  } catch {
    res.writeHead( 404 ).end( 'Not found' );
  }
} ).listen( PORT, () => console.log( `serving on http://localhost:${PORT}` ) );
