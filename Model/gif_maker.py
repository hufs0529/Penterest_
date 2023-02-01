import glob, imageio, os, boto3, io
from PIL import Image

def make_gif(frame_folder):
    # images = glob.glob(f"{frame_folder}/*.jpg")
    # images.sort()
    # frames = [Image.open(image) for image in images]
    # frame_one = frames[0]
    # frame_one.save("flask_demo.gif", format="GIF", append_images=frames,
    #                save_all=True, duration=200, loop=0)
  
  s3 = boto3.client(
      service_name="s3",
      region_name="ap-northeast-2",
      aws_access_key_id='AKIA5F2LLCTUXLU3FZ7Q',
      aws_secret_access_key='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'
    )
  
  # obj_list = s3.list_objects(Bucket='penterest', Prefix='images')
  # contents_list = obj_list['Contents']
  
  # file_list = []
  # for content in contents_list:
  #   key = content['Key']
  #   file_list.append(key)
  
  # del file_list[0]  

    
  # #path = [f"https://penterest.s3.ap-northeast-2.amazonaws.com/images/{i}" for i in os.listdir("https://penterest.s3.ap-northeast-2.amazonaws.com/images/")]
  # img_link = []
  # for i in range(len(file_list)):
  #   img_link.append('https://penterest.s3.ap-northeast-2.amazonaws.com/' + file_list[i])
  
  # for i in img_link:
  #   print(i)
  # imgs = [ Image.open(i) for i in img_link]

  # imageio.mimsave('C:/Users/hufs0/OneDrive/바탕 화면/moviepy/test.gif', imgs, fps=8)
  # #https://penterest.s3.ap-northeast-2.amazonaws.com/images/frame1.png  
  
  s3 = boto3.resource('s3')
  bucket = s3.Bucket('penterest')
  object = bucket.Object('images/frame1.png')
  
  response = object.get()
  file_stream = response['Body']
  img = Image.open(file_stream)
  imageio.mimsave('C:/Users/hufs0/OneDrive/바탕 화면/moviepy/test.gif', img, fps=8)

    
if __name__ == "__main__":
    make_gif("https://penterest.s3.ap-northeast-2.amazonaws.com/images/")