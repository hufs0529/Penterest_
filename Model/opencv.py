import cv2

def cut_video(startFrame=0, endFrame=150):
  iCurrentFrame =0
  
  video_file = 'https://penterest.s3.ap-northeast-2.amazonaws.com/videos/sample.mp4'
  cap = cv2.VideoCapture(video_file)
  #fps = cap.get(cv2.CV_CAP_PROP_FPS)
  w = round(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
  h = round(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
  fourcc = cv2.VideoWriter_fourcc(*'DIVX')
  out = cv2.VideoWriter('output.avi', fourcc, 50, (w, h))

  #cap.set(cv2.CV_CAP_PROP_POS_FRAMES, startFrame)
  while True:
    if(iCurrentFrame > (endFrame - startFrame)):
      break
    iCurrentFrame += 1
    
    ret, img = cap.read()
    out.write(img)
    
    
cut_video()