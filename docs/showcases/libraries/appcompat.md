# About `AppCompat`
`AppCompat` aims to:
- add support for the Action Bar user interface design pattern
- include support for Material Design implementations

For more info, see [Android Developers - Libraries][android-dev-libs].

## How to install `AppCompat`?
To install `AppCompat`, in your app's `build.gradle` (`app/build.gradle`/wherever your `build.gradle` is located), add the following line to your `dependencies`:

```gradle
dependencies {
	implementation 'com.android.support:appcompat-v7:27.1.1`
}
```
Before actually installing `AppCompat`, you'll need an additional library: the v4 Support library. In this case, just add the following line:
```gradle
dependencies {
	implementation 'com.android.support:support-compat:27.1.1'
}
```

## Result
Here's the result:

```gradle
dependencies {
	implementation 'com.android.support:support-compat:27.1.1'
	implementation 'com.android.support:appcompat-v7:27.1.1'
}
```

[android-dev-libs]: https://developer.android.com/topic/libraries/support-library/packages.html#v7-appcompat