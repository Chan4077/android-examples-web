# Background
[Skip to main](#main)

> Today is your first day at your job as an Android developer. You sit down on your office chair, a cup of coffee in your hand and your laptop opened up, turned on. Just then, your boss comes by and requests you to make an app for the company, showcasing all the company's work, about the company etc. You reluctantly agree and set to work to code.

> However, you realise that you've never actually coded Android or even Java before. What am I going to do? You wonder. You start looking for help from StackOverflow when someone refers you to this docs.

<a name="main"></a>

# Getting started with Android
Hey there! Welcome to an (unofficial) guide on developing your first app. This tutorial aims to show you on how to start off with Android development, getting used to Android Studio, the official IDE by Google for developing Android apps and (maybe) a bit of Java!

# 1. Prerequsites
You will need:
- A computer
- At least 2GB of storage available on your computer
- A reliable and fast internet connection
- A phone running Android (optional)
- Some knowledge of Java
- Some knowledge of XML
- Some knowledge of [Kotlin][kotlin] (if you want to use Kotlin, that is)

# 2. Download & Install Android Studio
To download Android Studio, visit [this website][android-studio-download] and click on the big green `Download Android Studio` button. A dialog will be shown with the terms and conditions. Click on the `I have read and agree with the above terms and conditions` checkbox and click on the `Download` button.

| ![Android Developers - Download Android Studio (macOS)](/src/assets/android-studio/android-studio-download-mac.jpg) |
|-|
| macOS Version of the Android Studio website |

(P.S. You should probably actually read the terms and conditions..)

Save the file anywhere you want it to be, just ensure that you know where it is found.

Once the download has finished, open the downloaded file.

## Windows
This should open an executable installer. Follow the steps to install Android Studio in the installer.

## MacOS
This should be a disk image file. When opened, drag and drop `Android Studio` to the `Applications` folder in the disk image file. Once you're done, you can open Android Studio by going to `/Applications` and double-click on `Android Studio`.

## Linux
(Guide coming soon)

# 3. Create your first Android project
Once you've first loaded up/opened Android Studio, you'll be greeted with a Quick Start dialog. Something similar to this:

![Android Studio - Quick Start dialog](/src/assets/android-studio/android-studio-quickstart.jpg)

Click on `Start a new Android Studio project`. Another dialog will appear.

![Android Studio - Create Android Project dialog](/src/assets/android-studio/android-studio-create-project.jpg)

- For the application name, replace it with `Hello World Application` (or anything you want your app's name to be)
- Your company's name can be anything - from `com.mycompany.helloworld` to `io.test`
- You can choose any project location. By default, it'll be `~/AndroidStudioProjects` on macOS <!-- TODO: Add Windows location -->
- The package name should be automatically generated
- Optionally, you can include [Kotlin support][kotlin]

Once you are done customizing, click on `Next`.

## 3.1. Select minimum SDK level
![Android Studio - Minimum SDK Dialog](/src/assets/android-studio/android-studio-min-sdk.jpg)
In this example, we'll keep the default to `API 21: Lollipop 5.0`. This dialog will be discussed in a future article.

Click the `Next` button to continue.

# 4. Adding an activity
![Android Studio - Add activity dialog](/src/assets/android-studio/android-studio-add-activity.jpg)
In this example, we'll use an `Empty Activity`, which should already be pre-selected.

Click `Next` and leave the configuration as is:
![Android Studio - Configure activity dialog](/src/assets/android-studio/android-studio-configure-activity.jpg)
Click `Finish` to create the project.

# 5. Take a look!
Once Android Studio is done syncing Gradle dependencies, indexing, etc., you should be able to interact with the code. Take a look around and see how the code works.

# 6. Run the app on a physical device/emulator
You should be able to run the app by clicking on the play button. It is located on the right of the toolbar:
![Toolbar](/src/assets/android-studio/android-studio-toolbar-play.jpg)
Clicking on the play button should open a 
dialog asking you for a "Deployment target". 
![Android Studio - Select Deployment Target dialog](/src/assets/android-studio/android-studio-select-deployment-target.jpg)
You can insert an Android device with a USB wire plugged in to your computer or create a new virtual device by clicking on the (surprise surprise) `Create New Virtual Device` button.

Clicking on the `Create New Virtual Device` button opens yet another dialog:
![Android Studio - Virtual Device Config dialog](/src/assets/android-studio/android-studio-virtual-device-config.jpg)

Choose the device and press Run. You should get something similar to this:
![Hello World App](/src/assets/hello-world-app/hello-world-app-initial.png)

# 7. Modifying the text of the `TextView`
Once you are done aweing at the wonders of your new app, you should experiment around and make some changes to the code. Here, we'll be modifying the text of the `TextView`.

In `app/src/main/res/layout/activity_main.xml`, change the `android:text` attribute of `TextView` to `Hello Android!` instead of `Hello World!`. This should be easy to do. If you can't work it out, click on the answer arrow below:

<details>
<summary>Answer</summary>

```xml
<!-- Copy and paste this code -->
<TextView
	android:layout_width="wrap_content"
	android:layout_height="wrap_content"
	android:text="Hello Android!"
	app:layout_constraintBottom_toBottomf="parent"
	app:layout_constraintLeft_toLeftOf="parent"
	app:layout_constraintRight_toRightOf="parent"
	app:layout_constraintTop_toTopOf="parent" />
```
</details>

Once you're done editing, run the app again. (Android Studio should automatically save the file when it's been modified. You can also ) You should see that the app now says `Hello Android!` instead of `Hello World!`:
![Hello World App (Modified)](/src/assets/hello-world-app/hello-world-app-android.png)
Amazing, right?

[android-studio-download]: https://developer.android.com/studio/index.html
[kotlin]: https://kotlinlang.org