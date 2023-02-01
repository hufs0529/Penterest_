import numpy as np
import cv2
from PIL import Image
import imageio
import io
import os
import s3
import base64
import boto3
from io import BytesIO
def s3_connection():
  try:
    s3 = boto3.client(
      service_name="s3",
      region_name="ap-northeast-2",
      aws_access_key_id='AKIA5F2LLCTUXLU3FZ7Q',
      aws_secret_access_key='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'
    )
  except Exception as e:
    print(e)
  else:
    print("s3 bucket connected!")
    return s3

s3 = s3_connection()
filename='hello.gif'
path='gifs/'
s3.upload_file(filename,"penterest",path+filename)

def s3_put_image(s3, bucket, file, filename):
  try:
    s3.put_object(
      Body=file,
      Bucket=bucket,
      Key=f'images/{filename}',
      ContentType=file.content_type,
      ACL='public-read',
    )
  except Exception as e:
    return False
  return True

def makeStillCutImage(path, onlyMainStillCut=False):
  videoObj = cv2.VideoCapture(path)
  
  seconds = 1
  fps = videoObj.get(cv2.CAP_PROP_FPS)
  multiplier = fps * seconds
  
  frameCount = 0
  ret = 1
  
  while ret:
    frameId = int(round(videoObj.get(1)))
    ret, frame = videoObj.read()
    
    if frameId % multiplier < 1:
      #s3.upload_file('./frontEnd/frame0.jpg', 'penterest', 'frame%d.jpg' % frameCount)
      #s3_put_image(s3, 'penterest', resizeImage, "frame%d.jpg" % frameCount)
      #data_serial = cv2.imencode('.jpg', resizeImage)
      # img= Image.fromarray(resizeImage).convert('RGB')
      # out_img = io.BytesIO()
      # img.save(out_img, format='png')
      # out_img.seek(0)

      # resizeImage = cv2.resize(frame, (320, 320))
      # img = Image.fromarray(resizeImage).convert('RGB')
      # buffer = BytesIO()
      # #img.save(buffer, format='jpg')
      # imgBase64 = base64.b64encode(buffer.getvalue())
      #cv2.imwrite("./jpgs/frame%d.jpg" % frameCount, resizeImage)

      #s3_put_image(s3, 'penterest', img_2, "frame%d.jpg" % frameCount)
    #   s3.put_object(
    #   Body=base64.b64decode(imgBase64),
    #   Bucket='penterest',
    #   Key='images/frame%d.jpeg' % frameCount,
    #   ContentType='image/jpeg',
    #   ACL='public-read',
    # )
      # img = Image.fromarray(resizeImage).convert('RGB')
      # out_img = io.BytesIO()
      # img.save(out_img, format='png')
      # out_img.seek(0)
      #img_2 = Image.fromarray(resizeImage)
      

      #put_object(Key='cluster.png',Body=out_img,ContentType='image/png',ACL='public-read')

      frameCount += 1

    if onlyMainStillCut:
      break
    
    # path = [f"C:/Users/hufs0/OneDrive/바탕 화면/moviepy/jpgs/{i}" for i in os.listdir("C:/Users/hufs0/OneDrive/바탕 화면/moviepy/jpgs")]
    # imgs = [ Image.open(i) for i in path]
    # imageio.mimsave('C:/Users/hufs0/OneDrive/바탕 화면/moviepy/test.gif', imgs, fps=8)
 


#makeStillCutImage("https://penterest.s3.ap-northeast-2.amazonaws.com/videos/sample.mp4")