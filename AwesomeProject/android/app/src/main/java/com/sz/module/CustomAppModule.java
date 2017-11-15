package com.sz.module;

import android.content.Intent;

import com.awesomeproject.MainApplication;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.HashMap;
import java.util.Map;

public class CustomAppModule extends ReactContextBaseJavaModule {


    public CustomAppModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomAppModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        return constants;
    }

    @ReactMethod
    public void gotoPage(String from, String to , ReadableMap params ) {

        Intent intent = new Intent();
        try {
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setClass(getReactApplicationContext(),  Class.forName( "com.szapp.activity." + to ) ); //参数一
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        getReactApplicationContext().startActivity( intent );
    }


    @ReactMethod
    public void gotoSinglePage(String from, String to , ReadableMap params ) {

        MainApplication.getMapData().put("gotoSinglePage",to);
        Intent intent = new Intent();
        try {
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setClass(getReactApplicationContext(),  Class.forName( "com.szapp.activity.DynamicRNActivity" ) ); //参数一
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        getReactApplicationContext().startActivity( intent );
    }

    /**
     * 删除缓存
     * @param key
     * @param remove
     */
    @ReactMethod
    public void getTempData( String key,Boolean remove ){
        MainApplication.getMapData().get(key);
        if(remove){
            MainApplication.getMapData().remove(key);
        }
    }

    @ReactMethod
    public void getTempData( String key){
        this.getTempData(key,false);
    }

    @ReactMethod
    public void setTempData( String key,String val){
        MainApplication.getMapData().put(key,val);
    }

//    Boolean -> Bool
//    Integer -> Number
//    Double -> Number
//    Float -> Number
//    String -> String
//    Callback -> function
//    ReadableMap -> Object
//    ReadableArray -> Array
}