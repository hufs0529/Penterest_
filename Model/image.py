from PIL import Image
import imageio
import os

path = [f"./jpgs/{i}" for i in os.listdir("./jpgs")]
imgs = [ Image.open(i) for i in path]
imageio.mimsave('./jpgs/test.gif', imgs, fps=8)