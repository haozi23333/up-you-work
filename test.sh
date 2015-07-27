#!/bin/bash

#第一个是UID
#第二个是压缩包的文件�?
#第三个是首页的地址
#return 的是实际文件的位�?
#return 的是实际的网址
unzip -o -q -d public/wz/$1 $2
a=`sudo find public/wz/$1/ -name $3`
sudo rm $2 
echo -n $a
