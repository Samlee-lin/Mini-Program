# Mini-Program
基于微信程序技术开发的哔哩哔哩小程序

使用到的接口：

获取B站视频信息  https://www.bilibili.com/index/ding.json

获取当前视频的视频信息 https://api.bilibili.com/x/web-interface/view?bvid=视频bvid

获取热门的视频  https://www.bilibili.com/index/catalogy/5-3day.json

获取相关推荐视频  http://api.bilibili.com/x/web-interface/archive/related?aid=视频aid

获取视频的评论数据  http://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=视频aid

视频详情页面因为mock不到播放视频的数据，所以做不了video标签，改成用image代替，点击后跳转到另一个页面，在这个页面使用web-view调用B站播放界面进行播放
