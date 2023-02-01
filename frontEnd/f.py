import boto3
import movie, caption
import s3
#from .m_config import AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY
#from .m_config import AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_REGION
from flask import Flask, request, jsonify, send_file, render_template
from werkzeug.utils import secure_filename
from moviepy.editor import *
from flask_cors import CORS
import numpy as np
import cv2
from PIL import Image
import imageio
import os
app = Flask(__name__)
CORS(app, supports_credentials=True)

#s3_connect = s3.s3_connection()

# def make(title):
#   # Load myHolidays.mp4 and select the subclip 00:00:50 - 00:00:60
#   clip = VideoFileClip("C:/Users/hufs0/OneDrive/바탕 화면/moviepy/frontend/" + title).subclip(0,10)
#   # Reduce the audio volume (volume x 0.8)
#   clip = clip.volumex(0.0)
#   # Generate a text clip. You can customize the font, color, etc.
#   # txt_clip = TextClip("My Holidays 2013",fontsize=70,color='white')
#   # # Say that you want it to appear 10s at the center of the screen
#   # txt_clip = txt_clip.set_pos('center').set_duration(3)
#   # Overlay the text clip on the first video clip
#   video = CompositeVideoClip([clip])
#   # Write the result to a file (many options available !)
#   video.write_videofile(title)



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

def s3_put_video(s3, bucket, file, filename):
  try:
    s3.put_object(
      Body=file,
      Bucket=bucket,
      Key=f'videos/{filename}',
      ContentType=file.content_type,
      ACL='public-read',
    )
  except Exception as e:
    return False
  return True

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

def s3_put_gif(s3, bucket, file, filename):
  try:
    s3.put_object(
      Body=file,
      Bucket=bucket,
      Key=f'gifs/{filename}',
      ContentType=file.content_type,
      ACL='public-read',
    )
  except Exception as e:
    return False
  return True

def s3_get_image_url(filename):
  return f"https://penterest.s3.ap-northeast-2.amazonaws.com/images/{filename}"

def s3_get_caption_url(filename):
  return f"https://penterest.s3.ap-northeast-2.amazonaws.com/captions/{filename}"
  
def s3_get_video_url(filename):
  return f"https://penterest.s3.ap-northeast-2.amazonaws.com/videos/{filename}"
  
def s3_get_gif_url(filename):
  return f"https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/{filename}"
  
def makeStillCutImage(path, onlyMainStillCut=False):
  videoObj = cv2.VideoCapture(path)
  
  seconds = 5
  fps = videoObj.get(cv2.CAP_PROP_FPS)
  multiplier = fps * seconds
  
  frameCount = 0
  ret = 1
  
  while ret:
    frameId = int(round(videoObj.get(1)))
    ret, frame = videoObj.read()
    
    if frameId % multiplier < 1:
      resizeImage = cv2.resize(frame, (320, 320))
      #s3.upload_file('./frontEnd/capture.jpg', 'penterest', 'frame%d.jpg' % frameCount)
      s3_put_image(s3, 'penterest', resizeImage, "frame%d.jpg" % frameCount)
      #cv2.imwrite("./jpgs/frame%d.jpg" % frameCount, resizeImage)
      frameCount += 1

    if onlyMainStillCut:
      break
  
  
  
path = 'C:/Users/hufs0/OneDrive/바탕 화면/moviepy/frontEnd/'
@app.route("/upload", methods=['GET', 'POST'])
def upload_file():
  if request.method == 'POST':
    file = request.files['file']
    print(file)
    title = file.filename
    #s3_put_video(s3, 'penterest', file, title)
    #movie.make(title, 1.5)
    #read_video.cut_video()
    #file.save(secure_filename(file.filename))
    #gif.makeStillCutImage(s3_get_video_url(title))
    #gif.makeStillCutImage('C:/Users/hufs0/OneDrive/바탕 화면/moviepy/frontEnd/fish.mp4')
    #capture.makeStillCutImage(title)
    #caption_txt = caption.inference(title, "COCO")
    #print(caption_txt)
    
    #return jsonify([s3_get_gif_url(title.replace('mp4','gif'))])
    #return jsonify([caption_txt, s3_get_gif_url(title.replace("mp4","gif"))])
    return jsonify(['hi', 'hello'])
    
@app.route("/files", methods=['GET', 'POST'])
def practice():
  return 'file uploaded'

    

if __name__ == '__main__':
  app.run(host="0.0.0.0", port="5000", debug=True)

