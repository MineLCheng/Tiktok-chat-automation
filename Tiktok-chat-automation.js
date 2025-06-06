// 启动抖音
auto.waitFor();


const TARGET_ACCOUNT = "nmaru"; 
const MESSAGE_CONTENT = "你好，我看了你的作品觉得非常喜欢，可以交个朋友吗";

// 启动抖音
launchApp("抖音");
console.log("已启动抖音");
sleep(1000); // 等待应用加载

// 进入添加好友页面
clickBottomTab(4); // 点击"我"选项卡
sleep(1000);

clickAddFriendButton(); // 点击添加好友按钮
sleep(1000);
//clickTopTab(1); // 点击"搜索"选项卡

// 搜索并添加指定账号
searchAndAddAccount(TARGET_ACCOUNT);
sleep(1000);



// 发送私信
sendPrivateMessage(MESSAGE_CONTENT);
sleep(1000);
function clickTopTab(index) {
// 尝试查找搜索按钮

const searchButton = id("z2u").className("android.widget.Button").findOne().parent().parent();
if (searchButton) {
    // 若找到搜索按钮，则点击
    searchButton.click();
    console.log("成功点击搜索按钮");
} else {
    // 若未找到搜索按钮，输出错误信息
    console.error("未找到搜索按钮，无法执行点击操作");
}
}

// 函数：点击底部标签栏
function clickBottomTab(index) {
 

        const tab = id("0vk")
        .className("android.widget.TextView")
        .text("我")
        .findOne(1000); 
    
      if(tab) {
        tab.parent().parent().parent().parent().parent().click(); // 保持原有层级逻辑
        console.log("成功点击我的选项卡");
      } else {
        console.error("找不到我的按钮");
        back();
        exit();
      }
  }
        
  function clickAddFriendButton() {

    const addFriendBtn = id("tv_desc").className("android.widget.TextView").findOne(1000);
    if (addFriendBtn) {
      addFriendBtn.parent().parent().parent().click();
      console.log("已进入添加好友页面");
      sleep(3000);
    } else {
      console.error("未找到添加好友按钮");
      exit();
    }
  }

// 函数：搜索并添加账号
// function searchAndAddAccount(account) {
//   // 点击搜索框
//   const searchInput = id("et_search_kw").findOne();
//   if (searchInput) {
//     searchInput.click();
//     sleep(3500);
//     // 输入账号
//     searchInput.setText(account);
//     console.log("已输入搜索账号: " + account);
//     sleep(2000);

//     // 点击搜索按钮
//     // className("android.widget.TextView").desc().findOne()
//     const searchBtn = id("dhg").findOne();
//     if (searchBtn) {
//       searchBtn.click();
//       sleep(3000);

//       // 点击用户结果
     
        

//       const userResult = className('com.lynx.tasm.behavior.ui.LynxFlattenUI')
//         .textContains(TARGET_ACCOUNT)
//         .findOnce(0); 
//         console.log(userResult.clickable())
      
//       if (userResult) {
    
//   // log("找到用户元素：" + userResult.depth() + "层结构");
//   // log(userResult.parent().children().map(c => c.id() || c.text()).join(" | "));

//   //       console.log("元素坐标范围：", 
//   //         `X:${userResult.bounds().left}-${userResult.bounds().right}`, 
//   //         `Y:${userResult.bounds().top}-${userResult.bounds().bottom}`);
   
//           // 直接点击找到的元素
//           userResult.click();
//           console.log("已选择用户结果");
//           sleep(2500);
          
//           // 添加重试机制
//           let retry = 3;
//           while(retry-- > 0) {
//             const followBtn = text("关注").findOne(1000);
//             if(followBtn && followBtn.click()) {
//               console.log("已发送关注请求");
//               break;
//             }
//             sleep(1000);
//           }
//         } else {
//           console.error("用户结果元素不可见");
//         }
//       } else {
//         console.error("未找到用户结果");
//         exit();
//       }

//     }
//   }




function searchAndAddAccount(account) {
  // 点击搜索框
  const searchInput = id("fpm").findOne(1000);

  console.log("已点击搜索框");
  if (searchInput) {
    searchInput.focus();
    click(searchInput.bounds().centerX(), searchInput.bounds().centerY());
    sleep(5000);
    // 输入账号
    auto.waitFor();
    searchInput.setText(account);
    console.log("已输入搜索账号: " + account);
    sleep(3000);
    
    // 点击搜索按钮
    
    const searchBtn = id("1-2").findOne(2000);
    if (searchBtn) {
      searchBtn.click();
      sleep(3000);
    
      // 点击用户结果
      const userResult = id('i9k').findOne(1000);
      if (userResult) {
        userResult.click();
        console.log("已选择用户结果");
        sleep(3000);

        // 点击关注按钮
        const followBtn = id("t48").findOne(1000);
        if (followBtn) {
          followBtn.click();
          console.log("已发送关注请求");
        } else {
          console.log("已关注该用户");
        }
      }else{
        console.log("未找到用户结果");
        exit();
      }
    }
  }else{
    console.log("未找到搜索框");
    exit();
  }
}

// 函数：发送私信
function sendPrivateMessage(msg) {
  // 点击私信按钮
  const messageBtn = id("wzl").findOne(3000);
  if (messageBtn) {
    messageBtn.click();
    console.log("已打开私信窗口");
    sleep(3000);

    // 输入消息内容
    const input = id("msg_et").findOne();
    if (input) {
      input.setText(msg);
      console.log("已输入消息内容");
      sleep(3000);

      // 点击发送按钮
      const sendBtn = id("jc2").findOne();
      if (sendBtn) {
        sendBtn.click();
        console.log("消息已发送");
        sleep(3000);
      }
    }
  }

  // 返回主页
  back();
  back();
  back();
  sleep(1000);
}

console.log("脚本执行完成");
