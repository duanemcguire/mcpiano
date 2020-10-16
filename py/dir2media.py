from os import listdir
from os.path import isfile, join
import json
mypath = raw_input("Directory: ")
sourcedir = "../static/images/" + mypath
onlyfiles = [f for f in listdir(sourcedir) if isfile(join(sourcedir, f))]
onlyfiles = sorted(onlyfiles)
media = []
for f in onlyfiles:
    thing = {}
    thing["src"] = "/images/" + mypath + "/" + f
    print f
    thing["caption"] = raw_input("Caption: ")
    media.append(thing)
print json.dumps(media, indent=2)
