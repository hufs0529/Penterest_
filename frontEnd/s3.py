import boto3

# from .m_config import AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY
# from .m_config import AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_REGION

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
  return f"s3://penterest/images/{filename}"

def s3_get_caption_url(filename):
  return f"s3://penterest/captions/{filename}"
 
def s3_get_video_url(filename):
  return f"s3://penterest/videos/{filename}"
   
def s3_get_gif_url(filename):
  return f"s3://penterest/gifs/{filename}"
   