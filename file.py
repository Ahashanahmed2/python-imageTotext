

from PIL import Image
import pytesseract as tss
import os
import sys
pc = sys.argv
import re

def covert(upload,download):
    upload_a = upload
    download_a = download
    image_name = os.listdir(upload_a)
    for image in image_name:
         image_read = Image.open(os.path.join(upload_a,image))
         image_string = tss.image_to_string(image_read,lang="ben+ara")

         text_file = re.sub(r'\.png', '.text', image)
         string_file = open(os.path.join(download_a,text_file),'w')
         string_file.write(image_string);
         string_file.close()
        
         print(text_file)







covert(pc[1],pc[2])