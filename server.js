const http = require('http');
const fs = require('fs');
const path = require('path');

const START_PORT = 3001;
const PUBLIC_DIR = __dirname;
const filesDir = path.join(PUBLIC_DIR, 'files');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon'
};

// Map to store filename -> relativePath
const fileMap = new Map();

function buildFileMap(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      buildFileMap(name);
    } else {
      const filename = path.basename(name);
      const relativePath = path.relative(filesDir, name).replace(/\\/g, '/');
      if (!fileMap.has(filename)) {
        fileMap.set(filename, relativePath);
      }
    }
  }
}

// Build the file map on startup
buildFileMap(filesDir);
console.log(`Map built: ${fileMap.size} files indexed for path redirection fallback.`);

function resolveFilePath(urlPath) {
  // 1. Try literal path matching under PUBLIC_DIR
  const literalPath = path.join(PUBLIC_DIR, urlPath);
  if (fs.existsSync(literalPath) && fs.statSync(literalPath).isFile()) {
    return literalPath;
  }
  
  // 2. Try filename-based fallback lookup
  const filename = path.basename(urlPath);
  if (filename && fileMap.has(filename)) {
    const resolvedRelative = fileMap.get(filename);
    const resolvedPath = path.join(filesDir, resolvedRelative);
    if (fs.existsSync(resolvedPath)) {
      return resolvedPath;
    }
  }
  
  return null;
}

function serveFile(req, res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File Not Found');
      return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  // Normalize URL path to prevent directory traversal
  let safeUrl = req.url.split('?')[0];
  if (safeUrl === '/') {
    safeUrl = '/index.html';
  }
  
  // Resolve path
  let filePath = resolveFilePath(safeUrl);
  
  // SPA Fallback: If not found and no extension, serve index.html
  if (!filePath) {
    const ext = path.extname(safeUrl);
    if (!ext) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
  }
  
  if (filePath && filePath.startsWith(PUBLIC_DIR)) {
    serveFile(req, res, filePath);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

function startServer(port) {
  server.listen(port, () => {
    const url = `http://localhost:${port}/`;
    console.log(`==================================================`);
    console.log(` Servidor local iniciado correctamente!`);
    console.log(` URL: ${url}`);
    console.log(`==================================================`);
    console.log(`Presiona Ctrl+C para detener el servidor.`);
    
    // Attempt to open the page automatically in the browser
    try {
      const { exec } = require('child_process');
      const startCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
      exec(`${startCmd} ${url}`);
    } catch (e) {
      // Ignore open errors
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Puerto ${port} ocupado, intentando con el puerto ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Error en el servidor:', err);
    }
  });
}

startServer(START_PORT);
