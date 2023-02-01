import cv2
import movie

def makeStillCutImage(title, onlyMainStillCut=True):
	videoObj = cv2.VideoCapture('C:/Users/hufs0/OneDrive/바탕 화면/moviepy/frontEnd/' + title)

	seconds = 1
	fps = videoObj.get(cv2.CAP_PROP_FPS) # Gets the frames per second
	multiplier = fps * seconds

	frameCount = 0
	ret=1

	while ret:
		frameId = int(round(videoObj.get(1))) #current frame number
		ret, frame = videoObj.read()

		if frameId % multiplier < 1:
			# cv2.resize(img, dsize, fx, fy, interpolation)
			#resizeImage = cv2.resize(frame, (320, 320))
			cv2.imwrite("capture.jpg", frame)
			frameCount += 1
			
		if onlyMainStillCut:
			break


# if __name__ == '__main__':
# 	makeStillCutImage('video.mp4')
