@echo off 
set /A count=0
set id[count]="hola"

set program_path=%programfiles%\Oracle\VirtualBox\VBoxManage

for /f "tokens=*" %%a in ('"%program_path%" list vms') do (
  set "extracted_value="
  for /f "tokens=2* delims={*}" %%b in ("%%a") do (
    if not "%%b" == "" (
      set "extracted_value=%%b" & setlocal enabledelayedexpansion & (
        set "extracted_value=!extracted_value!" 
      )
    )
  )
  ::echo  %extracted_value%
  set id[%count%]= %extracted_value%
  set count +=1
)


echo --------- > data.txt
for /l %%n in (0,1,count) do ( 
  set data[%%n]=
  for /f "tokens=*" %%a in ('"%program_path%" showvminfo --machinereadable !id[%%n]!') do (
    set data[%%n]=!data[%%n]! %%a __
  )
  echo !data[%%n]! >> data.txt
  echo --------- >> data.txt
)

set /p url=Paste here your learnpack url: 
:: set url=localhost:3001


::echo Sending data to %url%...
curl -X POST -F "file=@data.txt" %url%
del data.txt
::curl --data-urlencode "name=debian" --data-urlencode "cpucores=2" %url%
