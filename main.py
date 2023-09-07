from machine import Pin  # Import the Pin class from the 'machine' module for GPIO control.
import network  # Import the 'network' module to connect to a WiFi network.
import urequests
import time


#Initiate Wifi Name and Password
SSID = "WSU_EZ_Connect"  
PASSWORD = ""  

# Initialize WiFi
# Create a WLAN (Wireless LAN) object in station mode
#（ In station mode, the device connects to an existing Wi-Fi network as a client ）
# WLAN provides an interface to configure and connect to Wi-Fi networks
wlan = network.WLAN(network.STA_IF)
wlan.active(True)  
wlan.connect(SSID, PASSWORD)  

#If connect success print "True"
print(wlan.isconnected())

#Show successfully connect to the interview, it will print out all the names data that's pulled from the website
astronauts = urequests.get("http://api.open-notify.org/astros.json").json()
number=astronauts['number']

for i in range(number):
    print(astronauts['people'][i]['name'])



