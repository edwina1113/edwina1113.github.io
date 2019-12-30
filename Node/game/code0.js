gdjs.GameStrartCode = {};
gdjs.GameStrartCode.GDgamestartObjects1= [];
gdjs.GameStrartCode.GDgamestartObjects2= [];
gdjs.GameStrartCode.GDBGObjects1= [];
gdjs.GameStrartCode.GDBGObjects2= [];
gdjs.GameStrartCode.GDPlayObjects1= [];
gdjs.GameStrartCode.GDPlayObjects2= [];
gdjs.GameStrartCode.GDPlayIconObjects1= [];
gdjs.GameStrartCode.GDPlayIconObjects2= [];
gdjs.GameStrartCode.GDhelpObjects1= [];
gdjs.GameStrartCode.GDhelpObjects2= [];
gdjs.GameStrartCode.GDhelpIconObjects1= [];
gdjs.GameStrartCode.GDhelpIconObjects2= [];
gdjs.GameStrartCode.GDruleObjects1= [];
gdjs.GameStrartCode.GDruleObjects2= [];
gdjs.GameStrartCode.GDSCOREObjects1= [];
gdjs.GameStrartCode.GDSCOREObjects2= [];
gdjs.GameStrartCode.GDnoObjects1= [];
gdjs.GameStrartCode.GDnoObjects2= [];

gdjs.GameStrartCode.conditionTrue_0 = {val:false};
gdjs.GameStrartCode.condition0IsTrue_0 = {val:false};
gdjs.GameStrartCode.condition1IsTrue_0 = {val:false};
gdjs.GameStrartCode.condition2IsTrue_0 = {val:false};


gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDhelpIconObjects1Objects = Hashtable.newFrom({"helpIcon": gdjs.GameStrartCode.GDhelpIconObjects1});gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.GameStrartCode.GDnoObjects1});gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDPlayIconObjects1Objects = Hashtable.newFrom({"PlayIcon": gdjs.GameStrartCode.GDPlayIconObjects1});gdjs.GameStrartCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.GameStrartCode.condition0IsTrue_0.val = false;
{
gdjs.GameStrartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameStrartCode.condition0IsTrue_0.val) {
gdjs.GameStrartCode.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));
gdjs.GameStrartCode.GDruleObjects1.createFrom(runtimeScene.getObjects("rule"));
{for(var i = 0, len = gdjs.GameStrartCode.GDruleObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDruleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameStrartCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDnoObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.storage.readNumberFromJSONFile("save", "highscore", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{

gdjs.GameStrartCode.GDhelpIconObjects1.createFrom(runtimeScene.getObjects("helpIcon"));

gdjs.GameStrartCode.condition0IsTrue_0.val = false;
gdjs.GameStrartCode.condition1IsTrue_0.val = false;
{
gdjs.GameStrartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameStrartCode.condition0IsTrue_0.val ) {
{
gdjs.GameStrartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDhelpIconObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameStrartCode.condition1IsTrue_0.val) {
gdjs.GameStrartCode.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));
gdjs.GameStrartCode.GDruleObjects1.createFrom(runtimeScene.getObjects("rule"));
{for(var i = 0, len = gdjs.GameStrartCode.GDruleObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDruleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameStrartCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDnoObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "select02.mp3", false, 100, 1);
}}

}


{

gdjs.GameStrartCode.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));

gdjs.GameStrartCode.condition0IsTrue_0.val = false;
gdjs.GameStrartCode.condition1IsTrue_0.val = false;
{
gdjs.GameStrartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameStrartCode.condition0IsTrue_0.val ) {
{
gdjs.GameStrartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDnoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameStrartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameStrartCode.GDnoObjects1 */
gdjs.GameStrartCode.GDruleObjects1.createFrom(runtimeScene.getObjects("rule"));
{for(var i = 0, len = gdjs.GameStrartCode.GDruleObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDruleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameStrartCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.GameStrartCode.GDnoObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "select02.mp3", false, 100, 1);
}}

}


{



}


{

gdjs.GameStrartCode.GDPlayIconObjects1.createFrom(runtimeScene.getObjects("PlayIcon"));

gdjs.GameStrartCode.condition0IsTrue_0.val = false;
gdjs.GameStrartCode.condition1IsTrue_0.val = false;
{
gdjs.GameStrartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameStrartCode.condition0IsTrue_0.val ) {
{
gdjs.GameStrartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameStrartCode.mapOfGDgdjs_46GameStrartCode_46GDPlayIconObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameStrartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "select02.mp3", false, 100, 1);
}}

}


{


{
}

}


}; //End of gdjs.GameStrartCode.eventsList0xb5aa0


gdjs.GameStrartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameStrartCode.GDgamestartObjects1.length = 0;
gdjs.GameStrartCode.GDgamestartObjects2.length = 0;
gdjs.GameStrartCode.GDBGObjects1.length = 0;
gdjs.GameStrartCode.GDBGObjects2.length = 0;
gdjs.GameStrartCode.GDPlayObjects1.length = 0;
gdjs.GameStrartCode.GDPlayObjects2.length = 0;
gdjs.GameStrartCode.GDPlayIconObjects1.length = 0;
gdjs.GameStrartCode.GDPlayIconObjects2.length = 0;
gdjs.GameStrartCode.GDhelpObjects1.length = 0;
gdjs.GameStrartCode.GDhelpObjects2.length = 0;
gdjs.GameStrartCode.GDhelpIconObjects1.length = 0;
gdjs.GameStrartCode.GDhelpIconObjects2.length = 0;
gdjs.GameStrartCode.GDruleObjects1.length = 0;
gdjs.GameStrartCode.GDruleObjects2.length = 0;
gdjs.GameStrartCode.GDSCOREObjects1.length = 0;
gdjs.GameStrartCode.GDSCOREObjects2.length = 0;
gdjs.GameStrartCode.GDnoObjects1.length = 0;
gdjs.GameStrartCode.GDnoObjects2.length = 0;

gdjs.GameStrartCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['GameStrartCode'] = gdjs.GameStrartCode;
