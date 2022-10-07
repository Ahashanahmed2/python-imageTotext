

from PIL import Image
import pytesseract as tss
import os
import sys
pc = sys.argv
import re

def covert(upload,download,lan):
    upload_a = upload
    download_a = download
    image_name = os.listdir(upload_a)
    new_list = [match for match in image_name if "png" in match or  "jpg" in match or "jpeg" in match]
   

    for image in new_list:
         image_read = Image.open(os.path.join(upload_a,image))
         image_string = tss.image_to_string(image_read,lang=lan)

         text_file = re.sub(r'\.png', '.text', image)
         string_file = open(os.path.join(download_a,text_file),'w')
         string_file.write(image_string)
         string_file.close()
        
         print(text_file)

''





covert('/home/ahsan/Documents/python/18','/home/ahsan/Documents','ben+ara')