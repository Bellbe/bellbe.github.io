def getNumber(string):
  for i in range (0,len(string)):
    if string[i].isdigit()==True or string[i]=='.':
      for j in range (i,len(string)+1):
        if j>len(string)-1:
          val=string[i:j+1]
          return float(val)
        if string[j].isdigit()==True or string[j]=='.':
          j+=1
        else:
          val=sphere[i:j]
          return float(val)
      break
import math
print('A sphere has a cylinder inscribed within it. For a given radius or height of the cylinder, find the greatest possible volume.')
restart=True
while restart:
  restart=False
  print('What is the radius of the sphere (in cm)?')
  sphere=input()
  if len(sphere)!=0:
    if sphere[0].isdigit==False:
      print("Put the value of the sphere radius at the beginning of your input.")
      restart=True
    if restart==False:
      sphere=getNumber(sphere)
      if sphere==None:
        print("Specify the radius with digits")
        restart=True
  else: restart=True
restart=True
while restart:
 while restart:
  restart=False
  print('For a sphere with a radius of '+str(sphere)+'cm, input either a radius or height value in cm:')
  first=input()
  if len(first)==0:
    restart=True
  if restart==False:
    if first[0]=='r' or first[0]=='R':
      typ='radius'
    elif first[0]=='h' or first[0]=='H':
      typ='height'
    else:
      restart=True
      print("Sorry about this, I can't tell if that was a radius or a height. Try again specifying the type at the beginning of your input.")
 value=getNumber(first)

 if value==None:
   print("Specify the radius/height with digits")
   restart=True
 else:
   restart=False
if typ=='radius':
  print('I don\'t actually know what the volume is, as I left the sheet of paper with the formula on it at home. You inputted a radius: '+str(value))
  #print the volume
if typ=='height':
  print('I don\'t actually know what the volume is, as I left the sheet of paper with the formula on it at home. You inputted a height: '+str(value))
  #print the volume
