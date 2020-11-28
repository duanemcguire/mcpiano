import os
dir = raw_input("Directory: ")
print(dir)
path = raw_input("Output path: ")
print(dir)

files = os.listdir(dir)
sorted_files = sorted(files)
print '<client-only><div style="max-width: 800px;">'
print 'Swipe to scroll photos'
print '<carousel :per-page="1" :mouse-drag="true" :autoplay="true" :autoplay-timeout="7000" :speed="500" :loop="true" :pagination-enabled="true" :autoplay-hover-pause="false" >'
for file in sorted_files:
    if (os.path.isdir(dir + '/' + file) != True):
        print '<slide>'
        print '<figure><img src="' + path + '/' + file + '">'
        print '<figcaption></figcaption>'
        print '</figure></slide>'
print "</carousel></div></client-only>"
