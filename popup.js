// 创建并插入样式
const style = document.createElement('style');
style.innerHTML = `
  /* 电梯菜单悬浮样式 */
  .elevator_item {
      position: fixed;
      bottom: 150px;
      z-index: 11;
  }

  .elevator_item .feedback {
      width: auto;
      min-width: 36px;
      height: auto;
      background-color: #fff;
      color: #fa3c64;
      font-size: 15px;
      padding: 9px 12px;
      display: block;
      border-radius: 5px;
      text-align: center;
      margin-top: 10px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .35);
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  /* PC端居中样式 */
  @media screen and (min-width: 768px) {
      .elevator_item {
          right: 50%;
          transform: translateX(585px);
      }
  }

  /* 移动端右侧靠边样式 */
  @media screen and (max-width: 767px) {
      .elevator_item {
          right: 0px;
          bottom: 150px;
      }

      .elevator_item .feedback {
          margin-top: 5px;
      }
  }
`;
document.head.appendChild(style);

// 创建电梯菜单
const elevatorItem = document.createElement('div');
elevatorItem.className = 'elevator_item';
elevatorItem.id = 'elevator_item';

// 链接数组
const links = [
    { href: "https://www.xuezha.cc/", text: "影视资源", bgColor: "#1e6be3", color: "#fff" },
    { href: "https://www.xu555.top/", text: "手机软件", bgColor: "#ffd900", color: "#383838" },
	{ href: "https://www.kdocs.cn/l/cceB2V9vEZQt?R=L1MvMQ==", text: "短剧搜索", bgColor: "#1e6be3", color: "#fff" }
];

// 为每个链接创建按钮
links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = "_blank";
    a.className = 'feedback graHover';
    a.style.backgroundColor = link.bgColor;
    a.style.color = link.color;
    a.rel = 'nofollow';
    a.textContent = link.text;
    elevatorItem.appendChild(a);
});

document.body.appendChild(elevatorItem);

// 第二部分：公告弹窗代码
(function () {
    // 添加样式
    const announcementStyle = document.createElement('style');
    announcementStyle.innerHTML = `
      #announcement-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, #ffffff, #f9f9f9); /* 背景渐变 */
          border-radius: 12px; /* 圆角 */
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* 阴影 */
          z-index: 10000;
          display: none;
          width: 90%; /* 宽度自适应 */
          max-width: 400px; /* 最大宽度 */
          text-align: center; /* 内容居中 */
          font-family: 'Segoe UI', Arial, sans-serif; /* 字体 */
          color: #444; /* 字体颜色 */
      }
      #announcement-popup h1 {
          font-size: 18px;
          margin-bottom: 15px;
          color: #222;
      }
      #announcement-popup p {
          font-size: 14px;
          line-height: 1.6;
          margin: 10px 0;
      }
      #announcement-popup a {
          color: #4CAF50;
          text-decoration: none;
          font-weight: bold;
      }
      #announcement-popup a:hover {
          text-decoration: underline;
      }
      #announcement-popup button {
          background-color: #4CAF50; /* 按钮背景颜色 */
          color: white; /* 按钮文字颜色 */
          border: none; /* 移除边框 */
          padding: 10px 20px;
          margin-top: 20px;
          border-radius: 5px; /* 按钮圆角 */
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease; /* 动画过渡 */
      }
      #announcement-popup button:hover {
          background-color: #45a049; /* 按钮悬停颜色 */
      }
      #minimized-popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: linear-gradient(135deg, #ffffff, #f9f9f9); /* 背景渐变 */
          border: 1px solid #ccc;
          border-radius: 50%; /* 圆形 */
          width: 60px; /* 按钮宽度 */
          height: 60px; /* 按钮高度 */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 阴影 */
          z-index: 10000;
          display: none;
          cursor: pointer;
          font-family: 'Segoe UI', Arial, sans-serif; /* 字体 */
          color: #444; /* 文字颜色 */
          font-size: 14px;
          text-align: center; /* 文字居中 */
          line-height: 60px; /* 文字垂直居中 */
          font-weight: bold;
      }
      #minimized-popup:hover {
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* 悬停阴影 */
          background: #f0f0f0;
      }
    `;
    document.head.appendChild(announcementStyle);

    // 添加弹窗HTML
    const announcementHTML = `
      <div id="announcement-popup">
        <h1>🌟 欢迎访问本站！🌟</h1>
        <p>1. 本站永久免费，公益分享</p>
        <p>2. 所有软件均测试可安装</p>
        <p>3. 如果本站帮助到了您，请多多分享！</p>
        <br>
		<p>永久发布页<a href="https://xu-5.com" target="_blank">点击前往</a></p>
        <button id="close-popup">关闭</button>
      </div>
      <div id="minimized-popup">
        公告
      </div>
    `;

    const div = document.createElement('div');
    div.id = 'announcement-container';
    div.innerHTML = announcementHTML;
    document.body.appendChild(div);

    // 获取弹窗和按钮元素
    const popup = document.getElementById('announcement-popup');
    const minimizedPopup = document.getElementById('minimized-popup');
    const closeButton = document.getElementById('close-popup');

    // 检查是否已显示过弹窗
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
        popup.style.display = 'block';
    } else {
        minimizedPopup.style.display = 'block';
    }

    // 关闭按钮事件
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
        minimizedPopup.style.display = 'block';
        localStorage.setItem('hasSeenPopup', 'true');
    });

    // 最小化按钮事件
    minimizedPopup.addEventListener('click', () => {
        popup.style.display = 'block';
        minimizedPopup.style.display = 'none';
    });
})();



