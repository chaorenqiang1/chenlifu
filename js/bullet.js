// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["古朴典雅，感受民国风", "了解陈立夫传奇人生", "英国乡村式别墅，独具特色", " 建筑风格融合东西方元素", " 感受历史的沧桑与传承", "寓教于乐，增长知识", "古建筑保存完好，值得一看","领略民国时期名流生活","感受灰瓦别墅的韵味","品味陈立夫的传奇故事","故居游览，受益匪浅","感受历史建筑的韵味"," 了解民国历史，增长见识"," 闹中取静，品味历史底蕴","传承中华民族优秀文化","感受陈立夫的跌宕人生"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);