(function() {
    console.log("Eric · 梦曦");
    console.log("       --------我们都是追逐繁星的孩子");
    document.write('<script src="assets/jquery.min.js?v=3.3.1"></script>');
    document.write('<link rel="stylesheet" href="assets/waifu.css">');
    document.write('<script src="assets/jquery-ui.min.js?v=1.12.1"></script>');
    document.write('<script src="assets/live2d.js?v=1.0.5"></script>');
    document.write('<script src="assets/waifu-tips.js?v=1.4.2"></script>');
    document.write('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span><span class="fui-chat"></span><span class="fui-eye"></span><span class="fui-user"></span><span class="fui-photo"></span><span class="fui-info-circle"></span><span class="fui-cross"></span></div></div>');
}())
setTimeout("/* 可直接修改部分参数 */live2d_settings['modelId'] = 0; // 默认模型 IDlive2d_settings['modelTexturesId'] = 87; // 默认材质 IDlive2d_settings['modelStorage'] = false; // 不储存模型 IDlive2d_settings['canCloseLive2d'] = false; // 隐藏 关闭看板娘 按钮live2d_settings['canTurnToHomePage'] = false; // 隐藏 返回首页 按钮live2d_settings['waifuSize'] = '300x267.5'; // 看板娘大小live2d_settings['waifuTipsSize'] = '285x75'; // 提示框大小live2d_settings['waifuFontSize'] = '15px'; // 提示框字体live2d_settings['waifuToolFont'] = '18px'; // 工具栏字体live2d_settings['waifuToolLine'] = '25px'; // 工具栏行高live2d_settings['waifuToolTop'] = '-30px'; // 工具栏顶部边距live2d_settings['waifuDraggable'] = 'axis-x'; // 拖拽样式/* 在 initModel 前添加 */initModel('assets/waifu-tips.json?v=1.4.2'", 3000);
// setTimeout('console.clear();', 100);