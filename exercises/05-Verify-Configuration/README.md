# `05` Validate your installation

We have developed two scripts to help you measure your success during this project. 

Two scripts within the ./.learn/assets folder are responsible for sending information from VirtualBox back to LearnPack for validation.

- `report_linux.sh` will be automatically executed by LearnPack.
- `report_windows.bat` must be copied and pasted to the Desktop of your host machine, executed, and then you need to copy the generated "windows_report.txt" file and paste it into the root of these LearnPack exercises for validation.

## 1. Add the VBoxManage command to the PATH of your host machine

To ensure the success of the `report_windows.bat` script, you may need to add **VBoxManage** to the PATH of your Windows host machine. Here’s how to do it:

- **Find the location of VBoxManage.** Normally, VBoxManage.exe is located in the VirtualBox installation directory, which is usually C:\Program Files\Oracle\VirtualBox. Copy this path.

- **Access the environment variables settings and modify the Path variable:**

    - Right-click the Windows Start button and select `System`.
    - In System, select ``Advanced system settings`.
    - In System Properties, click `Environment Variables....`
    - In the `System variables` section, find and select the `Path` variable, and then click Edit...
    - In the Edit Environment Variable window, click New and insert the path you copied `C:\Program Files\Oracle\VirtualBox`.
    - Finally, click OK to close all windows.
    - To verify that we have successfully completed these steps, open the command line and type `VBoxManage --version`.


## 2. Run the `report_windows.bat` file

If you pasted the `report_windows.bat` file on the Desktop of your host machine, execute it, then copy the generated `windows_report.txt` file and paste it into the root of these exercises for validation.

> ⚠ The `windows_report.txt` file must be at the same level as the `learn.json` file.


## 3. Running the test

Once you have pasted the windows_report.txt into the root of the LearnPack exercises, you can run the test to validate your Linux and Windows installation in VirtualBox.

![Script Windows](https://raw.githubusercontent.com/breatheco-de/networks-on-virtualbox/master/.learn/assets/script-test.png)

## 4. Done!

If you passed the tests, you have already installed a virtual machine with Windows. This will be your safe place to do experiments and tests during the course.

If you have any problems, do not hesitate to contact a mentor or the other support channels offered by 4Geeks.

