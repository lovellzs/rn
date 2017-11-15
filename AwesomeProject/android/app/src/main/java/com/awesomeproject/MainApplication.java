package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.image.ReactImageManager;
import com.facebook.soloader.SoLoader;

import com.sz.customview.ReactImageUIReactpackage;
import com.sz.module.CustomAppModuleReactPackage;
import com.sz.module.ToastModuleReactPackage;
import com.sz.module.UIManagerModuleReactPackage;

import org.lovebing.reactnative.baidumap.BaiduMapPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new BaiduMapPackage(getApplicationContext()),

              new ReactImageUIReactpackage(),

              new UIManagerModuleReactPackage(),
              new CustomAppModuleReactPackage(),
              new ToastModuleReactPackage()); // <-- 添加这一行，类名替换成你的Package类的名字.
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
    public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

}
