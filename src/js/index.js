/**
 * info - fonte de dados:
 * url: https://sinesp.contrateumdev.com.br/api 
 * 
 * passo a passo
 * 
 * 1. captura do input e do button                 [ ok ]
 * 2. pegar valor do input                         [ ok ]
 * 3. criar ação de clique por evento              [ ok ]
 * 4. capturar ação de busca com valor do input    [ ok ]
 * 5. entrar no DatoCMS e checar json do array     [ ok ]
 * 
 * 6. criar evento de click para botão             [ ok ]
 * 7. acessar api do banco de dados                [  ]
 * 8. modelar a busca por codigo                   [  ]
 * 9. teste de resposta a busca                    [  ]
 * 10.retornar resposta ao front-end               [  ]
 * 
 * */ 

 const errorCodes = [
    {
        "code": "0x00000001", 
        "name": "APC_INDEX_MISMATCH", 
        "cause": "The most common cause of this bug check is when a file system or driver has a mismatched sequence of calls to disable and re-enable APCs. The key data item is the Thread >CombinedApcDisable field. The CombinedApcDisable field consists of two separate 16-bit fields: SpecialApcDisable and KernelApcDisable. A negative value of either field indicates that a driver has disabled special or normal APCs (respectively) without re-enabling them. A positive value indicates that a driver has enabled special or normal APCs too many times.", 
        "solution": "The !analyze debugger extension displays information about the bug check and can be helpful in determining the root cause. You can use the !apc extension to display the contents of one or more asynchronous procedure calls (APCs). You can also set a breakpoint in the code that precedes this stop code and attempt to single-step forward into the faulting code."

    },

    {
        "code": "0x00000002", 
        "name": "DEVICE_QUEUE_NOT_BUSY", 
        "cause": "Error shows up because of incompatible hardware and software components. However, there are still a host of other reasons why it affects a computer. For one, it is possible that there is a missing .dll file in your system. On the other hand, you may have installed an incorrect driver, or the versions on your PC may be outdated or corrupted. If you recently made software changes, some keys or entries in the registry can be damaged as well.", 
        "solution": "Solution 1: Removing the Program Associated with the Error, Solution 2: Performing a Full Virus Scan, Solution 3: Removing Your Recently Installed Hardware, Solution 4: Using the System File Checker, Solution 5: Using the DISM Command-Line Tool, Solution 6: Running the CHKDSK Utility, Solution 7: Updating your Device Drivers"

    },

    {
        
        "code": "0x00000003", 
        "name": "INVALID_AFFINITY_SET", 
        "cause": "There is not enough free space in the hard disk of your computer/laptop. For Windows 10 to operate correctly you need to have from 2 to 10 Gb of free space in your system disk. An incompatible version of BIOS was installed or the firmware was damaged. Device drivers incompatible with the OS were installed.   Windows registry was damaged or deleted, or cleaning operations accidentally deleted system keys. Antivirus software or viruses may block system files or delete important registry keys. An error occurred in the work of backup software. It can also happen as a result of a Windows update.", 
        "solution": "Start the computer in safe mode to run the Recovery mode at the Settings, section Update & Security"

    },

    {
        
        "code": "0x00000004", 
        "name": "INVALID_DATA_ACCESS_TRAP", 
        "cause": "STOP 0x00000004 errors are likely caused by hardware failure or device driver issues, but could be related to a virus infection. The STOP 0x00000004 error will always appear on a STOP message, more commonly called a Blue Screen of Death (BSOD).", 
        "solution": "The STOP 0x00000004 STOP code is rare so there's little troubleshooting information available that's specific to the error. However, since most STOP errors have similar causes, there are some basic troubleshooting steps to help fix STOP 0x00000004 issues: 1. Restart your computer if you haven't already done so. The STOP 0x00000004 could just be a fluke, and the blue screen error may not occur again after rebooting. 2. Did you just install or make a change to a device? If so, there's a good chance that the change you made caused the STOP 0x00000004 error. Undo the change and test for the 0x4 blue screen error. Depending on what changes were made, some solutions might include: a) Removing or reconfiguring the newly installed device b) Starting up with Last Known Good Configuration to undo related registry and driver changes c) Using System Restore to undo recent changes d) Rolling back the device driver to the version prior to your driver update. 3. Update the drivers for your devices. If the driver to your hard drive or some other device is outdated or corrupted, it could be causing the STOP 0x00000004 error. 4. Scan your computer for viruses that could be causing the STOP 0x00000004 error. 5. Clear the CMOS. Sometimes the STOP 0x00000004 error is caused by a BIOS memory issue, so clearing the CMOS could solve that problem. 6. Test the hard drive for errors. A physical problem with the hard drive could be what's revealing the STOP 0x4 error. 7. Test the system memory for errors. If the hard drive isn't at fault, faulty RAM might be what's causing the STOP 0x00000004 error. 8. Perform basic STOP error troubleshooting. These extensive troubleshooting steps aren't specific to the STOP 0x00000004 error but since most STOP errors are so similar, they should help resolve it."

    },

    {
        
        "code": "0x00000005", 
        "name": "INVALID_PROCESS_ATTACH_ATTEMPT", 
        "cause": "The INVALID_PROCESS_ATTACH_ATTEMPT bug check has a value of 0x00000005. This generally indicates that the thread was attached to a process in a situation where that is not allowed. For example, this bug check could occur if KeAttachProcess was called when the thread was already attached to a process (which is illegal), or if the thread returned from certain function calls in an attached state (which is invalid)", 
        "solution": "Fix 1. Run the BSOD Troubleshooter - The BSOD troubleshooter is a Windows built-in tool that’s often used to cope with BSOD errors. Here it might help you fix the INVALID_PROCESS_ATTACH_ATTEMPT error. For that: Step 1. Press Win + I keys to open the Settings app and select the Update & Security. Step 2. Click on Troubleshoot from the left pane, and then scroll down to find the Blue Screen and click on Run the troubleshooter button. Step 3. Follow the on-screen prompts to complete this troubleshooter. Fix 2. Run the SFC and DISM Scans - The corrupted system files are responsible for the invalid process attach attempt BSOD error. To repair the corrupted system files, you can run the SFC and DISM scans. Here’s how: Step 1. Type command prompt in the search box, and then right-click Command Prompt and select Run as administrator option. Step 2. Type the sfc /scannow command in the elevated command prompt and hit Enter. Then restart your computer and this tool will scan and try to repair the system issues automatically. Step 3. Type dism /Online /Cleanup-Image /RestoreHealth in the elevated command prompt and hit Enter. This operation will reload your system image, which can help fix the potential BSOD errors. Fix 3. Uninstall the Antivirus Software - In some cases, the antivirus software also can cause the invalid process attach attempt Windows 10 error. Users reported that this error disappears after uninstall their currently installed antivirus software. So, you can try uninstalling antivirus software such as Avast and McAfee. Fix 4. Uninstall the Currently Installed Software - If you installed the third-party software currently, you may encounter the INVALID_PROCESS_ATTACH_ATTEMPT error. This is because third-party software may not be fully compatible with your computer. So, you can try uninstalling all the currently installed software from your PC. Fix 5. Uninstall the Faulty Device Driver - A faulty device driver also can lead to INVALID PROCESS ATTACH ATTEMPT BSOD error. To fix this error, you can follow the steps below to remove the bad driver. Step 1. Right-click the Start menu and select Device Manager from the pop-up window. Step 2. Expand the Mice and other pointing devices category, and then right-click the bad driver and select Uninstall device. Step 3. Follow the on-screen instructions to complete the uninstallation. Then you can restart your computer and check if the BSOD error still persists. Tip: If you encounter the touchpad driver issue after the uninstallation, you can update the device driver to the latest version by downloading the driver from its official website. Fix 6. Check Your Hardware - If all the methods fail to work, you need to check if your hardware is faulty. Some users reported that this BSOD issue was caused by a faulty hard drive. So, it’s highly recommended that if there are any bad sectors on your disk. Also, you should check other faulty components of your PC. If it’s indeed that there’s faulty hardware, you should replace it timely."

    },

    {
        
        "code": "0x00000006", 
        "name": "INVALID_PROCESS_DETACH_ATTEMPT", 
        "cause": "This bug check appears very infrequently. This bug check can be caused by calling the KeStackAttachProcess routine and subsequently calling KeUnstackDetachProcess in the driver's implementation of the PLOAD_IMAGE_NOTIFY_ROUTINE callback function. The callback runs in a thread of the process in which the image loaded. Most common causes: 1. First of all, INVALID_PROCESS_DETACH_ATTEMPT error is more likely to occur in a general PC due to a corrupted, old and buggy device driver. 2. Virus once gets inside of the system might delete the necessary system files as well as program files to call up the error 0x00000006. 3. DLL files are deleted, missing or lost by mistake. 4. Corrupted registry entries from a newly installed software. 5. Corruption in the entries due to incomplete uninstallation of a program. 6. Incompatible Drivers with the Operating System. 7. A conflict between a newly installed software and driver with any other previously installed one. 8. Damaged Hard Disk is one of the most venerable things to get affected by Error 0x00000006. 9. Installing a BIOS or Firmware that incompatible or else damaged. 10. A conflict between the drivers while installing a new Hardware. 11. Mistakenly deleting necessary files from the system by mistake or due to the installation of a new program. 12. Corruption in the RAM, USB stick. 13. Various unknown issues coming from software, Hardware, Firmware, Driver can reproduce the INVALID_PROCESS_DETACH_ATTEMPT blue screen errors. 14. Incorrect allocation of Memory in Windows 10.", 
        "solution": "Users are getting INVALID PROCESS DETACH ATTEMPT from long before and so many experts given maximum efforts to resolve the same. Some of them successfully recovered the device from its grasp while few didn’t succeed. We have worked out with a series of these fixes and co-coordinating them, presenting a good number of workarounds that have the potentials to remove the issue completely. We will start from the easiest solution first then move ahead to complex ones. So, let’s begin with the simplest – 1. Disable Automatic Restart: As a regular user, you might expect to Restart the Windows as per you want it but the whole seems messed up once error INVALID PROCESS DETACH ATTEMPT affects the system. We consider this as the first priority and try to disable Automatic Restart of Windows. We cannot really term this as a resolution rather will offer you enough scope to deploy workarounds accordingly. You can proceed with the following steps – Step-1: Do a click on Taskbar Search and write control panel in the text field. Step-2: Once the result shows up, hit Enter. Step-3: Make the applets view either into a small or large icon, locate System and do a click on it. Step-4: When the new window rolls out on screen, select Advanced system settings from the left pane. Step-5: On the System Properties wizard, hit the Advanced tab. Step-6: Moving ahead, click the Settings button located under the Startup and Recovery section. Step-7: On the next wizard, go to System failure and uncheck Automatically restart option. Step-8: Finally, hit the OK button to implement the modifications."

    },

    {
        
        "code": "0x00000007", 
        "name": "INVALID_SOFTWARE_INTERRUPT", 
        "cause": "STOP 0x00000007 errors are likely caused by hardware or device driver issues.", 
        "solution": "The STOP 0x00000007 STOP code is rare so there's little troubleshooting information available that's specific to the error. However, since most STOP errors have similar causes, there are some basic troubleshooting steps to help: 1. Restart your computer if you haven't already done so. The STOP 0x00000007 blue screen error may not occur again after rebooting. 2. Perform basic STOP error troubleshooting, which might include using System Restore, scanning your computer for viruses, updating Windows, and running hardware diagnostic tests."

    },

    {
        
        "code": "0x00000008", 
        "name": "IRQL_NOT_DISPATCH_LEVEL", 
        "cause": "STOP 0x8 is a rare error on computers running Windows. It signifies that hardware or software issues have forced the computer to suffer a fatal shutdown. A Stop error basically prevents the system from working. It literally makes the PC stop whatever it is doing and experience a fatal breakdown. ", 
        "solution": "Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need. If problems continue, disable or remove any newly installed hardware. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to disable or remove components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode."

    },

    {
        
        "code": "0x00000009", 
        "name": "IRQL_NOT_GREATER_OR_EQUAL", 
        "cause": "In most cases, the IRQL_NOT_GREATER_OR_EQUAL error is caused by a graphic card driver that is broken or outdated.", 
        "solution": "1. You can try running Windows 10's built-in troubleshooting tool. It can help you resolve all sorts of issues, including the BSoD problems. 2. Dedicated software for computer errors such as blue screens can also be used. It will repair the registry or damaged files. 3. Update your graphics card driver. If this error appeared after the update, uninstall the update. Also, check the hardware device too."

    },

    {
        
        "code": "0x0000000A", 
        "name": "IRQL_NOT_LESS_OR_EQUAL", 
        "cause": "The IRQL_NOT_LESS_OR_EQUAL bug check has a value of 0x0000000A. This indicates that Microsoft Windows or a kernel-mode driver accessed paged memory at an invalid address while at a raised interrupt request level (IRQL). This is typically the result of either a bad pointer or a pageability problem.", 
        "solution": "The error that generates this bug check usually occurs after the installation of a faulty device driver, system service, or BIOS. If you encounter bug check 0xA while upgrading to a newer version of Windows, the error might be caused by a device driver, a system service, a virus scanner, or a backup tool that is incompatible with the new version. Resolving a faulty hardware problem: If hardware has been added to the system recently, remove it to see if the error recurs. If existing hardware has failed, remove or replace the faulty component. Run hardware diagnostics that are supplied by the system manufacturer. For details on these procedures, see the owner's manual for your computer. Resolving a faulty system service problem: Disable the service and confirm whether doing so resolves the error. If so, contact the manufacturer of the system service about a possible update. If the error occurs during system startup, investigate the Windows repair options. For more information, see Recovery options in Windows 10. Resolving an antivirus software problem: Disable the program and confirm whether doing so resolves the error. If it does, contact the manufacturer of the program about a possible update."

    },

    {
        "code": "0x0000000B", 
        "name": "NO_EXCEPTION_HANDLING_SUPPORT", 
        "cause": "The NO_EXCEPTION_HANDLING_SUPPORT BSoD error is usually caused by a broken hard drive or problematic apps. Also a blue screen error while using the device will not always have an obvious cause; you may be using new hardware or third-party software that is not compatible with your Windows device.", 
        "solution": "Some third-party antivirus software is known to cause blue screen errors. You can temporarily uninstall this software to determine if it is causing your problem and then reinstall the software after the device is running. To do this, you will need to log into Windows using safe mode. Safe mode starts Windows in a basic state, using a limited set of files and drivers, and allows you to perform troubleshooting steps."

    },

    {
        
        "code": "0x0000000C", 
        "name": "MAXIMUM_WAIT_OBJECTS_EXCEEDED", 
        "cause": "This bug check results from the improper use of KeWaitForMultipleObjects or FsRtlCancellableWaitForMultipleObjects. The caller may pass a pointer to a buffer in this routine's WaitBlockArray parameter. The system will use this buffer to keep track of wait objects. If a buffer is supplied, the Count parameter may not exceed MAXIMUM_WAIT_OBJECTS. If no buffer is supplied, the Count parameter may not exceed THREAD_WAIT_OBJECTS. If the value of Count exceeds the allowable value, this bug check is issued.", 
        "solution":"Some third-party antivirus software is known to cause blue screen errors. You can temporarily uninstall this software to determine if it is causing your problem and then reinstall the software after the device is running. To do this, you will need to log into Windows using safe mode. Safe mode starts Windows in a basic state, using a limited set of files and drivers, and allows you to perform troubleshooting steps."

    },

    {
        
        "code": "0x0000000D", 
        "name": "MUTEX_LEVEL_NUMBER_VIOLATION", 
        "cause": "1. There is not enough free space in the hard disk of your computer/laptop. For Windows 10 to operate correctly you need to have from 2 to 10 Gb of free space in your system disk. 2. An incompatible version of BIOS was installed or the firmware was damaged. 3. Device drivers incompatible with the OS were installed. 4. Windows registry was damaged or deleted, or cleaning operations accidentally deleted system keys. 5. Antivirus software or viruses may block system files or delete important registry keys. 6. An error occurred in the work of backup software. 7. It can also happen as a result of a Windows update.", 
        "solution": "1. If the error occurs when loading Windows and blocks any attempts to work with the system, try loading the computer in Safe Mode. This mode is meant for operating system (OS) diagnostics, but OS functions are very limited in this mode. Safe Mode should only be used if the system is blocked otherwise. 2. If you installed your device driver from the disk you have found in the device delivery package or if you are using a driver which was downloaded from a place other than Microsoft official website, this can be the core of the problem. You will have to update the device driver to fix it. 3. Damaged or rewritten system files may cause the error. Use the command sfc finds damaged Windows system files and replaces them. 4. The error may be caused by a file system error or by bad sectors in your disk. The command CHKDSK will check the disk for file system errors and bad sectors. Using the setting /f will make the program to automatically correct the detected errors, and the setting /r allows finding and fixing problem disk sectors."

    },

    {
        
        "code": "0x0000000E", 
        "name": "NO_USER_MODE_CONTEXT", 
        "cause": "FOR DEVELOPERS: In the process of starting a system thread, if control returns from the initial thread procedure, a bug check will occur. FOR USERS: This kind of Blue Screen error can occur when a program is trying to leverage the use of a system driver but fails to do so. Some of the common causes of this BSOD error are incompatible or corrupted drivers, incorrect configuration of entries in the Registry, damaged memory locations, malware infection and many more. In addition, this Stop error does not often occur and indicates that an attempt to enter user mode with no context was made.", 
        "solution": "FOR DEVELOPERS: The !analyze debug extension displays information about the bug check and can be helpful in determining the root cause. FOR USERS: If this is the first time you’ve restarted your computer after you’ve installed additional hardware, you have to remove the hardware and then restart your computer once again and then check the Microsoft Hardware Compatibility List to confirm that the hardware and its drivers are compatible with your operating system."

    },

    {
        
        "code": "0x0000000F", 
        "name": "SPIN_LOCK_ALREADY_OWNED", 
        "cause": "FOR DEVELOPERS: This indicates that a request for a spin lock has been initiated when the spin lock was already owned. Typically this error is caused by a recursive request for a spin lock. It can also occur if something similar to a recursive request for a spin lock has been initiated. For example, when a spin lock has been acquired by a thread, and then that same thread calls a function, which also tries to acquire a spin lock. The second attempt to acquire a spin lock is not blocked in this case because doing so would result in an unrecoverable deadlock. If the calls are made on more than one processor, then one processor will be blocked until the other processor releases the lock. This error can also occur, without explicit recursion, when all threads and all spin locks are assigned an IRQL. Spin lock IRQLs are always greater than or equal to DPC level, but this is not true for threads. However, a thread that is holding a spin lock must maintain an IRQL greater than or equal to that of the spin lock. Decreasing the thread IRQL below the IRQL level of the spin lock that it is holding allows another thread to be scheduled on the processor. This new thread could then attempt to acquire the same spin lock. FOR USERS: BSODs are generally caused either by faulty hardware or software corruption. Hardware failure can be caused by overheating, power supply issues, incompatibilities or bad memory. On the other hand, software related BSODs are results of timing inconsistency, driver incompatibility and operating system corruption. Not all software related BSODs stop you from accessing your desktop. When you receive an update that messes up your computer, you will experience processing failures at different instances while accessing your computer.", 
        "solution": "FOR DEVELOPERS: Ensure that you are not recursively acquiring the lock. And for threads that hold a spin lock ensure that you are not decreasing the thread IRQL to a level below the IRQL of the spin lock that it is holding. FOR USERS: Repairing BSODs can be a bit tricky, as they can be caused by many different reasons, but once you properly identify the problem, the steps are mostly straightforward. Here are known troubleshooting techniques you can try to help get rid of your Blue Screen error. 1. Check for Windows Updates. 2. Reinstall the software that caused the BSOD error. 3. Run System Restore. 4. Scan device performance and health."

    },

    {
        
        "code": "0x00000010", 
        "name": "SPIN_LOCK_NOT_OWNED", 
        "cause": "FOR DEVELOPERS: The error means that a spin lock has requested but something has corrupted the memory where the spin lock is, and when go to release it checked build and the system return that the memmory adress is not holding it. This error could also have been generated when the running software initiated a getMapping() function call with a value of null. This means that the function is trying to find the address of an uninitialized spin lock. FOR USERS: An error occurred when the system tries to reading the memory where the system would be trying to allocate it. This occurs by a file corruption of the program that is trying to run occurs. But it can also occur due to failures in the program's installation process.", 
        "solution": "FOR DEVELOPERS: 1. The !analyze debug extension displays information about the bug check and can be helpful in determining the root cause. FOR USERS: 1. Check for Windows Updates. 2. Reinstall the software that caused the BSOD error. 3. Run System Restore. 4. Scan device performance and health"

    },

    {
        
        "code": "0x00000011", 
        "name": "THREAD_NOT_MUTEX_OWNER", 
        "cause": "FOR DEVELOPERS: An abandoned mutex often indicates a serious error in the code. When a thread exits without releasing the mutex, the data structures protected by the mutex might not be in a consistent state. The next thread to request ownership of the mutex can handle this exception and proceed, if the integrity of the data structures can be verified.", 
        "solution": "FOR DEVELOPERS: When two or more threads need to access a shared resource at the same time, the system needs a synchronization mechanism to ensure that only one thread at a time uses the resource. Mutex is a synchronization primitive that grants exclusive access to the shared resource to only one thread. If a thread acquires a mutex, the second thread that wants to acquire that mutex is suspended until the first thread releases the mutex. This type implements the IDisposable interface. When you have finished using the type, you should dispose of it either directly or indirectly. To dispose of the type directly, call its Dispose method in a try/catch block. To dispose of it indirectly, use a language construct such as using (in C#) or Using (in Visual Basic). For more information, see the Using an Object that Implements IDisposable section in the IDisposable interface topic. The Mutex class enforces thread identity, so a mutex can be released only by the thread that acquired it. By contrast, the Semaphore class does not enforce thread identity. A mutex can also be passed across application domain boundaries. The thread that owns a mutex can request the same mutex in repeated calls to WaitOne without blocking its execution. However, the thread must call the ReleaseMutex method the same number of times to release ownership of the mutex. Because the Mutex class inherits from WaitHandle, you can also call the static WaitHandle.WaitAll and WaitHandle.WaitAny methods to synchronize access to a protected resource. If a thread terminates while owning a mutex, the mutex is said to be abandoned. The state of the mutex is set to signaled, and the next waiting thread gets ownership. Beginning in version 2.0 of the .NET Framework, an AbandonedMutexException is thrown in the next thread that acquires the abandoned mutex. Before version 2.0 of the .NET Framework, no exception was thrown."

    },

    {
        
        "code": "0x00000012", 
        "name": "TRAP_CAUSE_UNKNOWN", 
        "cause": "FOR DEVELOPERS: For some reason the code was interrupt unexpectedly, check the parameter, for 1: Parameter 2 - interrupt vector, for 2: unknown floating point exception, for 3: the enabled and asserted status bits.", 
        "solution": "FOR DEVELOPERS: The !analyze debug extension displays information about the bug check and can be helpful in determining the root cause. To start, examine the stack trace using the k, kb, kc, kd, kp, kP, kv (Display Stack Backtrace) command. You can specify the processor number to examine the stacks on all processors. You can also set a breakpoint in the code leading up to this stop code and attempt to single step forward into the faulting code. The !idt extension can be used to display the interrupt service routines (ISRs) for a specified interrupt dispatch table (IDT). Some of the techniques described in Debugging an Interrupt Storm can be used with the unexpected interrupts. For general information about working with crash dumps, see Crash dump analysis using the Windows debuggers (WinDbg). If you are not equipped to use the Windows debugger to work on this problem, you can use some basic troubleshooting techniques. Check the System Log in Event Viewer for additional error messages that might help identify the device or driver that is causing this bug check. If a driver is identified in the bug check message, disable the driver or check with the manufacturer for driver updates. Confirm that any new hardware that is installed is compatible with the installed version of Windows. For example, you can get information about required hardware at Windows 10 Specifications. For additional general troubleshooting information, see Blue Screen Data. FOR USERS: 1. Check for Windows Updates. 2. Reinstall the software that caused the BSOD error. 3. Run System Restore. 4. Scan device performance and health"

    },

    {
        
        "code": "0x00000013", 
        "name": "EMPTY_THREAD_REAPER_LIST", 
        "cause": "Instances of the Thread class represent either foreground threads or background threads. Background threads are identical to foreground threads with one exception: a background thread does not keep a process running if all foreground threads have terminated. Once all foreground threads have been stopped, the runtime stops all background threads and shuts down.", 
        "solution": "Task-based asynchronous operations automatically execute on thread pool threads. Task-based asynchronous operations use the Task and Task<TResult> classes to implement the task-based asynchronous pattern. You can change a thread to execute in the background by setting the IsBackground property at any time. Background threads are useful for any operation that should continue as long as an application is running but should not prevent the application from terminating, such as monitoring file system changes or incoming socket connections."

    },

    {
        
        "code": "0x00000014", 
        "name": "CREATE_DELETE_LOCK_NOT_LOCKED", 
        "cause": "This error means that the device driver is either incompatible with the computer or that there is something wrong with a hardware device. A newly installed driver is the most likely culprit.", 
        "solution": "You can check to see if all device drivers installed on your computer are functioning correctly with the Device Manager"

    },

    {
        "code": "0x00000015",
        "name": "LAST_CHANCE_CALLED_FROM_KMODE",
        "cause": "LAST_CHANCE_CALLED_FROM_KMODE BSOD errors are caused by a variety of firmware, hardware, driver, or software problems. These could be related to either Windows 10 64-bit software or Microsoft Corporation hardware, but it is not necessarily the case. Precisely, LAST_CHANCE_CALLED_FROM_KMODE errors stem from: Poorly configured, outdated, or corrupted device drivers (LAST_CHANCE_CALLED_FROM_KMODE) Corrupted or invalid LAST_CHANCE_CALLED_FROM_KMODE registry from Windows 10 64-bit or hardware-related change. Virus or malware infection that has corrupted the LAST_CHANCE_CALLED_FROM_KMODE file or related Windows 10 64-bit program files. Hardware conflict involving Microsoft Corporation hardware, affecting LAST_CHANCE_CALLED_FROM_KMODE. Damaged system files (eg. LAST_CHANCE_CALLED_FROM_KMODE) after failed driver or Windows 10 64-bit install. BSOD of LAST_CHANCE_CALLED_FROM_KMODE created by damaged hard drive. LAST_CHANCE_CALLED_FROM_KMODE STOP error due to memory (RAM) corruption.",
        "solution": "FOR USERS: My first tip is to disconnect all computer peripherals such as (Mouse, Keyboard, Printer, among others) and restart the computer. If the computer starts normally it means that one of these peripherals is in conflict so perform the 1 by 1 test to find the hardware causing the error. If you perform the steps above and the difficulty continues, I suggest you follow the guidelines below in the order they are presented. Remember to test the behavior at the end of each step. Try to login in safe mode and see if the error occurs. To access in safe mode follow the steps below: 1. Turn off the computer using the power button; 2. Turn on the computer by constantly pressing the F8 key; 3. In the options that appear, click on Troubleshooting; 4. Now click on Advanced Options; 5. Now click on the Startup Settings option and click on the Restart box; 6. Choose the Safe Mode with Networking option. Starting in Safe Mode proceed with the next steps. 1. Simultaneously press the Windows + X keys; 2. Click on the Device Manager option; 3. On the side of each device there is an arrow, click on them and click with the right mouse button on the devices that are displayed and select Properties; 4. After opening the Properties click on detail to see the driver name. If you find any device with a yellow exclamation point, it means the driver is in conflict in which case you can uninstall it. If the difficulty still persists, go to your equipment manufacturer`s website and by model, download and install all the latest drivers such as video card, network card, USB, chipset, Bios, among others."
    },

    {
        "code": "0x00000016",
        "name": "CID_HANDLE_CREATION",
        "cause": "If you reinstall Windows® or Microsoft® Office 2010 on a computer that was initially activated using proxy activation (MAK, retail, or CSLVK (KMS host)) and have not made significant hardware changes, use this in-place reactivation procedure to reactivate the program on that computer. Local reactivation depends on data that was created during initial proxy activation and stored in the VAMT (Volume Activation Management Tool) database. The database contains the Installation ID (IID) and the Commit ID (CID pending). Local reactivation uses this data to reapply the CID and reactivate these products. Reapplying the same CID preserves the remaining activations in the key. Also, CID_HANDLE error messages often appear as a result of cluttered Windows registry or faulty entries of non-existent programs which are usually due to improper software uninstalls. Other common reasons may include incorrect user input, missing files that were accidentally deleted from the registry and cause system malfunctions. Keeping track of when and where your error has occured is a critical piece of information for troubleshooting the problem.",
        "solution": "FOR DEVELOPERS: The !analyze debug extension displays information about the bug check and can be helpful in determining the root cause. To start, examine the stack trace using the k, kb, kc, kd, kp, kP, kv (Display Stack Backtrace) command. You can specify the processor number to examine the stacks on all processors. You can also set a breakpoint in the code leading up to this stop code and attempt to single step forward into the faulting code. The !idt extension can be used to display the interrupt service routines (ISRs) for a specified interrupt dispatch table (IDT). Some of the techniques described in Debugging an Interrupt Storm can be used with the unexpected interrupts. For general information about working with crash dumps, see Crash dump analysis using the Windows debuggers (WinDbg). If you are not equipped to use the Windows debugger to work on this problem, you can use some basic troubleshooting techniques. Check the System Log in Event Viewer for additional error messages that might help identify the device or driver that is causing this bug check. If a driver is identified in the bug check message, disable the driver or check with the manufacturer for driver updates. Confirm that any new hardware that is installed is compatible with the installed version of Windows. For example, you can get information about required hardware at Windows 10 Specifications. For additional general troubleshooting information, see Blue Screen Data. FOR USERS: 1. Check for Windows Updates. 2. Reinstall the software that caused the BSOD error. 3. Run System Restore. 4. Scan device performance and health"
    },
    {
        "code": "0x00000017",
        "name": "CID_HANDLE_DELETION",
        "cause": "If you reinstall Windows® or Microsoft® Office 2010 on a computer that was initially activated using proxy activation (MAK, retail, or CSLVK (KMS host)) and have not made significant hardware changes, use this in-place reactivation procedure to reactivate the program on that computer. Local reactivation depends on data that was created during initial proxy activation and stored in the VAMT (Volume Activation Management Tool) database. The database contains the Installation ID (IID) and the Commit ID (CID pending). Local reactivation uses this data to reapply the CID and reactivate these products. Reapplying the same CID preserves the remaining activations in the key. Also, CID_HANDLE error messages often appear as a result of cluttered Windows registry or faulty entries of non-existent programs which are usually due to improper software uninstalls. Other common reasons may include incorrect user input, missing files that were accidentally deleted from the registry and cause system malfunctions. Keeping track of when and where your error has occured is a critical piece of information for troubleshooting the problem.",
        "solution": "FOR DEVELOPERS: The !analyze debug extension displays information about the bug check and can be helpful in determining the root cause. To start, examine the stack trace using the k, kb, kc, kd, kp, kP, kv (Display Stack Backtrace) command. You can specify the processor number to examine the stacks on all processors. You can also set a breakpoint in the code leading up to this stop code and attempt to single step forward into the faulting code. The !idt extension can be used to display the interrupt service routines (ISRs) for a specified interrupt dispatch table (IDT). Some of the techniques described in Debugging an Interrupt Storm can be used with the unexpected interrupts. For general information about working with crash dumps, see Crash dump analysis using the Windows debuggers (WinDbg). If you are not equipped to use the Windows debugger to work on this problem, you can use some basic troubleshooting techniques. Check the System Log in Event Viewer for additional error messages that might help identify the device or driver that is causing this bug check. If a driver is identified in the bug check message, disable the driver or check with the manufacturer for driver updates. Confirm that any new hardware that is installed is compatible with the installed version of Windows. For example, you can get information about required hardware at Windows 10 Specifications. For additional general troubleshooting information, see Blue Screen Data. FOR USERS: 1. Check for Windows Updates. 2. Reinstall the software that caused the BSOD error. 3. Run System Restore. 4. Scan device performance and health"
    }
]

console.log(errorCodes)
var errorData = document.querySelector('.errorCode')
var errorName = document.querySelector('.errorName')
var errorCause = document.querySelector('.errorCause')
var errorSolution = document.querySelector('.errorSolution')

console.log(errorData)
console.log(errorName)
console.log(errorCause)
console.log(errorSolution)

var inputError = document.querySelector('#inputSearch')
var btnSearch = document.querySelector('#makeSearch')

btnSearch.addEventListener('click', () => {
    const input = inputError.value
    if (!input) {
        const errorEmptySpace = 'the code does not seem to be listed in our database'
        return errorEmptySpace
    } 
    
    const findError = function(theError){
        const codeReturned = theError.find(
            function(error, index){
                return error.code === input
            })
            return codeReturned
        }
    let showCode = findError(errorCodes, input)

    console.log(input)
    console.log(showCode)

    let templateDiv = `
    
        <ul class="area_showing_results">
            <li class="results_item">
                <h2 class="item-title">Código: </h2>
                <p class="result-of-search">${showCode.code}</p>
            </li>
            <li class="results_item">
                <h2 class="item-title">Nome: </h2>
                <p class="result-of-search">${showCode.name}</p>
            </li>
            <li class="results_item">
                <h2 class="item-title">Causas: </h2>
                <p class="result-of-search">${showCode.cause}</p>
            </li>
            <li class="results_item">
                <h2 class="item-title">Soluções: </h2>
                <p class="result-of-search">${showCode.solution}</p>
            </li>
        </ul>

    `

    const divSearch = document.querySelector('.show_search_results')

    divSearch.innerHTML = templateDiv

    // errorData.innerHTML = `<p id="errorCode" class="result-of-search">${showCode.code}</p>`
    // errorName.innerHTML = `<p id="errorCode" class="result-of-search">${showCode.name}</p>`
    // errorCause.innerHTML = `<p id="errorCode" class="result-of-search">${showCode.cause}</p>`
    // errorSolution.innerHTML = `<p id="errorCode" class="result-of-search">${showCode.solution}</p>`
    
})

