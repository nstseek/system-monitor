from http.server import SimpleHTTPRequestHandler, HTTPServer
import json
import os
import subprocess

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            # Some example data
            data = {
                'cpuinfo': subprocess.check_output(["cat", "/proc/cpuinfo"]).decode('utf-8'),
                'meminfo': subprocess.check_output(["cat", "/proc/meminfo"]).decode('utf-8'),
                'date': subprocess.check_output(["date"]).decode('utf-8'),
                'uptime': subprocess.check_output(["uptime"]).decode('utf-8'),
                'version': subprocess.check_output(["cat", "/proc/version"]).decode('utf-8'),
                'loadavg': subprocess.check_output(["cat", "/proc/loadavg"]).decode('utf-8'),
                'lsproc': subprocess.check_output(["ls", "/proc"]).decode('utf-8'),
                'modules': subprocess.check_output(["cat", "/proc/modules"]).decode('utf-8'),
            }
            
            # Convert Python dictionary to JSON string
            json_data = json.dumps(data)
            
            self.wfile.write(json_data.encode('utf-8'))
        elif self.path == '/':
            # Redirect the root path to static/index.html
            self.path = '/static/index.html'
            return SimpleHTTPRequestHandler.do_GET(self)
        else:
            # For other paths, attempt to serve files from static directory
            self.path = '/static' + self.path
            return SimpleHTTPRequestHandler.do_GET(self)

PORT = 8000

Handler = MyHandler

with HTTPServer(("", PORT), Handler) as httpd:
    print(f"serving at port {PORT}")
    httpd.serve_forever()
