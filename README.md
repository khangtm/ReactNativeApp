# ReactNativeApp
#Install React Native for Android
  1. Install Nodejs + JDK 8
  2. Install React Native CLI  
      npm install -g react-native-cli
  3. Install yarn (option)  
      npm install yarn -g
  4. Install Android Studio  
      SDK Platform : Android 6.0 (Marshmallow)  
          - Google APIs  
          - Android SDK Platform 23  
          - Intel x86 Atom_64 System Image  
          - Google APIs Intel x86 Atom_64 System Image  
      SDK Tools : Android SDK Build-Tools 23.0.1  
      Create AVD : Marshmallow API Level 23, x86_64 ABI image with a Android 6.0 (Google APIs)  
  3. Create new application  
      react-native init MyApp  
  4. Run Android Virtual Devices (AVD)  
      cd {D:}\Android-sdk\tools  
      emulator -avd AVD-name        
  5. Run React Native application  
      cd MyApp  
      react-native run-android  
      
#Install dependencies for my app
  1. react-navigation  
      yarn add react-navigation   
      or npm install --save react-navigation  
  2. react-native-vector-icons  
      yarn add react-native-vector-icons   
      or npm install react-native-vector-icons --save  
      
#Error list
  1. YellowBox Warnings  
      index.js page -> add  
          import { YellowBox } from 'react-native';  
          YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);  
          
  2. The icons show up as a crossed out box on Android using react-native-vector-icons  
      react-native link react-native-vector-icons   
      
      
      
      
      
      
