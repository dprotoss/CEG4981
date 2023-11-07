/*

*/

int percent = 0;
int prevPercent = 0;

void setup() {
  
  Serial.begin(9600);
    
}

void loop() {
  //Gets a percentage for the potientiometer 
  percent = round(analogRead(2)/1024.00 * 100);
  
  if(percent != prevPercent){
  
  Serial.println(percent);
  prevPercent = percent;
    
    
   
}
 delay(100);
}