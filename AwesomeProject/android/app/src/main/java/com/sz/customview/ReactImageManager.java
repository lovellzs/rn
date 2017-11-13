package com.sz.customview;

import android.support.annotation.Nullable;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.JavaScriptExecutor;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.Arrays;
import java.util.List;

/**
 * Created by apple on 2017/11/3.
 */

public class ReactImageManager extends SimpleViewManager<ReactImageView>{



    public static final String REACT_CLASS = "RCTImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ReactImageView createViewInstance(ThemedReactContext reactContext) {

        //mCallerContext
//        JSBundleLoader
//        JavaScriptExecutor.Factory.class

//        UIManagerModuleConstants.ACTION_DISMISSED;

        return new ReactImageView( reactContext, Fresco.newDraweeControllerBuilder(),  Fresco.newDraweeControllerBuilder().getCallerContext() );
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
    
    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, @Nullable ReadableArray src) {
        view.setSource(src);
    }

//    public void setSource(@Nullable ReadableArray sources) {
//        mSources.clear();
//        if (sources != null && sources.size() != 0) {
//            if (sources.size() == 1) {
//                mSources.add(new ImageSource(getContext(), sources.getMap(0).getString("uri")));
//            } else {
//                for (int idx = 0; idx < sources.size(); idx++) {
//                    ReadableMap source = sources.getMap(idx);
//                    mSources.add(new ImageSource(
//                            getContext(),
//                            source.getString("uri"),
//                            source.getDouble("width"),
//                            source.getDouble("height")));
//                }
//            }
//        }
//        mIsDirty = true;
//    }

}