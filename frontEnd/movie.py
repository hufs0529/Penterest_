from moviepy.editor import *
import s3
import boto3
import io
import base64
import cv2
import os
from PIL import Image

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
  
def s3_get_gif_video(filename):
  return f"https://penterest.s3.ap-northeast-2.amazonaws.com/videos/{filename}"

video_path = "https://penterest.s3.ap-northeast-2.amazonaws.com/videos/"
gif_path = "https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/"
s3 = s3_connection()


def make(title, speed=1):
  clip = VideoFileClip(f"https://penterest.s3.ap-northeast-2.amazonaws.com/videos/{title}", audio=False).subclip(0,1)
  clip.speedx(speed).write_gif(f'{title}'.replace('mp4','gif'), fps=50, fuzz=1)
  filename=f'C:/Users/hufs0/OneDrive/바탕 화면/moviepy/frontEnd/{title}'.replace("mp4","gif")
  data = open(filename,'rb')
  #s3_put_gif(s3, 'penterest',filename ,'sample.gif')

  s3.put_object(
      Body=data,
      Bucket='penterest',
      Key=f'gifs/{title}'.replace("mp4","gif"),
      ContentType='image/gif',
      ACL='public-read',
    )
  
  
#make('video.mp4')