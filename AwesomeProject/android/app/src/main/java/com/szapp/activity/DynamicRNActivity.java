package com.szapp.activity;

import android.text.TextUtils;

import com.awesomeproject.MainApplication;
import com.baidu.mapapi.map.Text;
import com.facebook.react.ReactActivity;

public class DynamicRNActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {

        String curPage = (String)MainApplication.getMapData().get("gotoSinglePage");
        MainApplication.getMapData().remove("gotoSinglePage");

        if(TextUtils.isEmpty(curPage)){
            curPage = "AwesomeProject";
        }
        return curPage;
    }

}
