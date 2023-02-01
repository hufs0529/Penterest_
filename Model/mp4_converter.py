import boto3, cv2
from PIL import Image
import io, base64

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
  
  seconds = 12
  fps = videoObj.get(cv2.CAP_PROP_FPS)
  multiplier = fps * seconds
  
  frameCount = 0
  ret = 1
  
  while ret:
    frameId = int(round(videoObj.get(1)))
    ret, frame = videoObj.read()
    
    if frameId % multiplier < 1:
      resizeImage = cv2.resize(frame, (320, 320))
      img = Image.fromarray(resizeImage).convert('RGB')
      out_img = io.BytesIO()
      img.save(out_img, format='png')
      out_img.seek(0)
      #imgBase64 = base64.b64encode(out_img.getvalue())
      #cv2.imwrite("./jpgs/frame%d.jpg" % frameCount, imgBase64)
      s3.put_object(
        Body=out_img,
        Bucket='penterest',
        Key='images/frame%d.png' % frameCount,
        ContentType='image/png',
        ACL='public-read',
      )
      
      frameCount += 1
      
makeStillCutImage("https://penterest.s3.ap-northeast-2.amazonaws.com/videos/sample.mp4")