# PDFView bug inside ListView minimal reproduction

Below the reproduced bug's logs, reproduce it by scrolling up and down inside the app.

JS: onItemLoading 1\
JS: onLoad 1\
JS: onItemLoading 2\
JS: onLoad 2\
JS: onItemLoading 3\
JS: onLoad 3\
JS: onItemLoading 4\
JS: onLoad 4\
JS: onItemLoading 3\
JS: onItemLoading 2\
JS: onLoad 2\
JS: onItemLoading 1\
JS: onLoad 1\
JS: onItemLoading 0\
JS: onLoad 0\
JS: onItemLoading 2\
JS: onLoad 2\
JS: onItemLoading 3\
JS: onLoad 3\
JS: onItemLoading 4\
JS: onLoad 4\
JS: onItemLoading 4\
JS: onItemLoading 3\
JS: onItemLoading 2\
JS: onLoad 2\
JS: onItemLoading 1\
JS: onLoad 1\
JS: onItemLoading 0\
JS: onLoad 0

Whenever there's a `onItemLoading <index>` and there are no `onLoad <index>` preceeding it w/ same index, the PDF won't be visible.

## Android Studio details:

Android Studio Chipmunk | 2021.2.1 Patch 1\
Build #AI-212.5712.43.2112.8609683, built on May 18, 2022\
Runtime version: 11.0.12+7-b1504.28-7817840 amd64\
VM: OpenJDK 64-Bit Server VM by Oracle Corporation\
Windows 10 10.0\
GC: G1 Young Generation, G1 Old Generation\
Memory: 1280M\
Cores: 4\
Registry: external.system.auto.import.disabled=true, ide.balloon.shadow.size=0\
Non-Bundled Plugins: com.intellij.marketplace (212.5712.51), com.chrisrm.idea.MaterialThemeUI (6.9.1)

## Android Virtual Device

Android Version: 11.0 (R) - API 30\
Emulator Version: 31.2.10-8420304

## NS doctor

$ ns doctor\
✔ Getting environment information

No issues were detected.\
✔ Your ANDROID_HOME environment variable is set and points to correct directory.\
✔ Your adb from the Android SDK is correctly installed.\
✔ The Android SDK is installed.\
✔ A compatible Android SDK for compilation is found.\
✔ Javac is installed and is configured properly.\
✔ The Java Development Kit (JDK) is installed and is configured properly.\
✔ Local builds for iOS can be executed only on a macOS system. To build for iOS on a different operating system, you can use the NativeScript cloud infrastructure.\
✔ Getting NativeScript components versions information...\
✔ Component nativescript has 8.2.3 version and is up to date.\
✔ Component @nativescript/core has 8.2.5 version and is up to date.\
✖ Component @nativescript/ios is not installed.\
✔ Component @nativescript/android has 8.2.3 version and is up to date.