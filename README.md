# NativeScript Versus Hybrid

This repo contains examples to show the performance advantage of building native user interfaces with NativeScript versus hybrid applications based on Apache Cordova.

The purpose of these examples is not to single out a specific hybrid framework, but rather to show the benefits inherent to building with iOS and Android user interface components.

## Example #1: List views

NativeScript is able to offer extremely performant list views by delegating to iOS’s [`UITableView`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) and Android’s [`ListView`](https://developer.android.com/reference/android/widget/ListView.html) controls.

The web struggles to keep up with even small data sets because the DOM has no built-in way to recycle memory usage. Hybrid frameworks attempt to compensate for this by implementing “virtual DOM” techniques, where a limited number of DOM nodes are reused as the user scrolls, but even with these techniques the performances pales in comparison to what native can offer.

![](assets/nativescript-list.png)
![](assets/hybrid-list.png)

## More examples

Coming soon 😀

## Running the apps

The hybrid app is built with Ionic. After [installing Ionic](http://ionicframework.com/docs/v2/getting-started/installation/), you can use the `ionic emulate ios` command to see this app on the iOS simulator.

```
ionic emulate ios
```

To run the NativeScript app you must first [install the NativeScript CLI and its system requirements](http://docs.nativescript.org/angular/tutorial/ng-chapter-1.html#11-install-nativescript-and-configure-your-environment), and then use the `tns run` command to run the app on the iOS simulator.

```
tns run ios --emulator
```

