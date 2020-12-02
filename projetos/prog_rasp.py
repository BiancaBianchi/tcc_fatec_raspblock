import RPi.GPIO as GPIO
import sys
from time import sleep
#import requests
from gpiozero import LightSensor, Servo

#############################################Pins####################################
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
bot1 = 27
bot2 = 22
bot3 = 24
motor1 = 17

led1 = 5
led2 = 6
led3 = 13
led4 = 19
led5 = 26

project = 0
projects = []
last_project = 0
x=[]

GPIO.setup(bot1, GPIO.IN, pull_up_down = GPIO.PUD_DOWN)
GPIO.setup(bot2, GPIO.IN, pull_up_down = GPIO.PUD_DOWN)
GPIO.setup(bot3, GPIO.IN, pull_up_down = GPIO.PUD_DOWN)
GPIO.setup(motor1, GPIO.OUT)
GPIO.setup(led1, GPIO.OUT)

GPIO.setup(led2, GPIO.OUT)
GPIO.setup(led3, GPIO.OUT)
GPIO.setup(led4, GPIO.OUT)
GPIO.setup(led5, GPIO.OUT)

ldr = LightSensor(4)
myc=0.45
maxpw=(2.0+myc)/1000
minpw=(1.0-myc)/1000
servo = Servo(18,min_pulse_width=minpw,max_pulse_width=maxpw)


############################################funcoes#############################################
def first_project():
  pass
  
def second_project():
   if GPIO.input(bot1) == 1:
     GPIO.output(motor1, 1)
   if GPIO.input(bot2) == 1:
     GPIO.output(motor1, 0)
   
def third_project():
 if GPIO.input(bot1) == 1 and GPIO.input(bot2) == 0:
   GPIO.output(motor1, 1)
 elif GPIO.input(bot2) == 1 and GPIO.input(bot1) == 0:
   GPIO.output(motor1, 0)

def fourth_project():
 GPIO.output(led5,1)
 GPIO.output(led1,1)
 GPIO.output(led2,0)
 GPIO.output(led3,0)
 GPIO.output(led5,1)
 GPIO.output(led4,0)
 sleep(5)
 GPIO.output(led1,0)
 GPIO.output(led2,1)
 GPIO.output(led4,1)
 GPIO.output(led5,0)
 sleep(5)
 GPIO.output(led2,0)
 GPIO.output(led3,1)
 GPIO.output(led4,1)
 GPIO.output(led5,0)
 sleep(5)
 GPIO.output(led3,0)
 GPIO.output(led1,1)
 
def fifth_project():
 servo.mid()
 if GPIO.input(bot1) ==1:
   print(ldr.value)
   if ldr.value > 0.70:
    #direita
      servo.min()
      sleep(1)
      
   elif ldr.value < 0.6:
    #esquerda
      servo.max()
      sleep(1)
      
      
projectApi = 'http://192.168.15.15:3333/send-projects'

def check_project():
 global last_project
 r = requests.get(projectApi)
 x = r.json()[0]
 if x:
 if last_project != x['id']:
 last_project = x['id']
 return x['project']
 else:
 return False
 else:
 return False

try:
 while True:
 #funcao
 projeto = check_project()
 print(projeto)
 if projeto:
   if projeto == '1':
     print('projeto 1')
     while True:
       first_project()
       if GPIO.input(bot3) == 1:
          break
    elif projeto == '2':
     print('projeto 2')
     while True:
        second_project()
        if GPIO.input(bot3) == 1:
          break
    elif projeto == '3':
     print('projeto 3')
     while True:
       third_project()
       if GPIO.input(bot3) == 1:
         break
    elif projeto == '4':
      print('projeto 4')
      while True:
        forth_project()
        if GPIO.input(bot3) == 1:
          break
    elif projeto == '5':
       print('projeto 5')
       while True:
         fifth_project()
         if GPIO.input(bot3) == 1:
           break
    else:
      print(projeto)
 else:
    pass
    
finally:
 # here you put any code you want to run before the program
 #exists when you press CTEL+C
 print("\n", counter)
# print value of counter
 GPIO.cleanup()
