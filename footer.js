/* 可直接修改部分参数 */
live2d_settings['modelId'] = 0; // 默认模型 ID
live2d_settings['modelTexturesId'] = 87; // 默认材质 ID
live2d_settings['modelStorage'] = false; // 不储存模型 ID
// live2d_settings['canCloseLive2d'] = false; // 隐藏 关闭看板娘 按钮
live2d_settings['canTurnToHomePage'] = false; // 隐藏 返回首页 按钮
live2d_settings['waifuSize'] = '300x267.5'; // 看板娘大小
live2d_settings['waifuTipsSize'] = '285x75'; // 提示框大小
live2d_settings['waifuFontSize'] = '15px'; // 提示框字体
live2d_settings['waifuToolFont'] = '18px'; // 工具栏字体
live2d_settings['waifuToolLine'] = '25px'; // 工具栏行高
live2d_settings['waifuToolTop'] = '-30px'; // 工具栏顶部边距
live2d_settings['waifuDraggable'] = 'axis-x'; // 拖拽样式
/* 在 initModel 前添加 */
initModel("https://cdn.jsdelivr.net/gh/mrliangtec/static_live2d_api/assets/waifu-tips.json?v=1.4.2")