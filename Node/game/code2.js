gdjs.GameOverCode = {};
gdjs.GameOverCode.GDgameoverObjects1= [];
gdjs.GameOverCode.GDgameoverObjects2= [];
gdjs.GameOverCode.GDBGObjects1= [];
gdjs.GameOverCode.GDBGObjects2= [];
gdjs.GameOverCode.GDRestartObjects1= [];
gdjs.GameOverCode.GDRestartObjects2= [];
gdjs.GameOverCode.GDSCOREObjects1= [];
gdjs.GameOverCode.GDSCOREObjects2= [];
gdjs.GameOverCode.GDHIGHSCOREObjects1= [];
gdjs.GameOverCode.GDHIGHSCOREObjects2= [];
gdjs.GameOverCode.GDRestartIconObjects1= [];
gdjs.GameOverCode.GDRestartIconObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartIconObjects1Objects = Hashtable.newFrom({"RestartIcon": gdjs.GameOverCode.GDRestartIconObjects1});gdjs.GameOverCode.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs.GameOverCode.GDRestartIconObjects1.createFrom(runtimeScene.getObjects("RestartIcon"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartIconObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameStrart", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "select02.mp3", false, 100, 1);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDHIGHSCOREObjects1.createFrom(runtimeScene.getObjects("HIGHSCORE"));
{gdjs.evtTools.sound.playSound(runtimeScene, "falling2.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GameOverCode.GDHIGHSCOREObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHIGHSCOREObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.network.sendHttpRequest("https://edwina1113.github.io/Node/game/index.html", "/save", "{\"name\":\"abc\",\"score\":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Score")) + "}", "POST", "application/json", runtimeScene.getVariables().get("Result"));
}}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.GameOverCode.eventsList0xb5aa0


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDgameoverObjects1.length = 0;
gdjs.GameOverCode.GDgameoverObjects2.length = 0;
gdjs.GameOverCode.GDBGObjects1.length = 0;
gdjs.GameOverCode.GDBGObjects2.length = 0;
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDSCOREObjects1.length = 0;
gdjs.GameOverCode.GDSCOREObjects2.length = 0;
gdjs.GameOverCode.GDHIGHSCOREObjects1.length = 0;
gdjs.GameOverCode.GDHIGHSCOREObjects2.length = 0;
gdjs.GameOverCode.GDRestartIconObjects1.length = 0;
gdjs.GameOverCode.GDRestartIconObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['GameOverCode'] = gdjs.GameOverCode;
