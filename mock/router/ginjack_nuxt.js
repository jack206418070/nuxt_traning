const express = require('express');
const app = express();
const sleep = require("../utils/sleep"); 

let API = require('../../api');

for(let key in API.member) {
  API.member[key].url = API.member[key].url.replace(":","[:]");// node 路由跳脫字元處理
}

app.get("/", async (req, res, next) => {
  await sleep(0);
  res.json({
    message: "ginjack_nuxt api v1"
  });
});

//會員註冊 with email / password
app.post(API.member.registered.url, async (req, res, next) => {
  await sleep(0);
  console.log(req.body,"req.body");
  console.log(req.params,"req.params");
  
  res.status(200);
  res.json({
    "idToken": "[ID_TOKEN]",
    "email": "[user@example.com]",
    "refreshToken": "[REFRESH_TOKEN]",
    "expiresIn": "3600",
    "localId": "tRcfmLH7..."
  });
});

//會員登入 with email / password
app.post(API.member.login.url, async (req, res, next) => {
  await sleep(0);

  res.status(200);
  res.json({
    "localId": "ZY1rJK0eYLg...",
    "email": "[user@example.com]",
    "displayName": "",
    "idToken": "[ID_TOKEN]",
    "registered": true,
    "refreshToken": "[REFRESH_TOKEN]",
    "expiresIn": "3600"
  });

});

//使用 refresh token 換取 ID token
app.post(API.member.exchangeToken.url, async (req, res, next) => {
  await sleep(0);

  res.status(200);
  res.json({
    "expires_in": "3600",
    "token_type": "Bearer",
    "refresh_token": "[REFRESH_TOKEN]",
    "id_token": "[ID_TOKEN]",
    "user_id": "tRcfmLH7o2XrNELi...",
    "project_id": "1234567890"
  });

});

//取得課程資訊
app.get(API.getProduct.url, async (req, res, next) => {
  await sleep(0);
  console.log(req.params.name,"req.params.name")
  res.status(200);
  res.json({
    "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
    "price": 60,
    "unit": "200g/盒",
    "name": "有機豆腐",
    "order" : 3
  });
});

//取得課程資訊 - 首頁列表
app.get(API.getProducts.url, async (req, res, next) => {
  await sleep(0);
  res.status(200);
  res.json({
      "-M7Ceyp-S3Btf3OSuAc9": {
        "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
        "price": 60,
        "unit": "200g/盒",
        "name": "有機豆腐",
        "order" : 3
      },
      "-M7Ceyp-S3Btf3OSuAc92": {
        "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
        "price": 100,
        "unit": "200g/盒",
        "name": "有機豆腐2",
        "order" : 3
      },
      "-M7CgU5r4tKOoVQXjT4c": {
        "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
        "price": 130,
        "unit": "200g/盒",
        "name": "有機豆腐3",
        "order" : 3
      }
  });
});


app.get(API.getFavorProducts.url, async (req, res) => {
  await sleep(2000)
  res.status(200)
  res.json({
    "-M7Ceyp-S3Btf3OSuAc9": {
      "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
      "price": 60,
      "unit": "200g/盒",
      "name": "有機豆腐4",
      "order" : 3
    },
    "-M7Ceyp-S3Btf3OSuAc92": {
      "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
      "price": 100,
      "unit": "200g/盒",
      "name": "有機豆腐5",
      "order" : 3
    },
    "-M7CgU5r4tKOoVQXjT4c": {
      "img": "https://www.green-n-safe.com/uploads/images/thumbs/0002287_14有機豆腐01.jpeg",
      "price": 130,
      "unit": "200g/盒",
      "name": "有機豆腐6",
      "order" : 3
    }
  })
})
//取得課程內容
// app.get(API.getCoursesItem.url, async (req, res, next) => {
//   await sleep(0);
//   console.log(req.params.id,"req.params.id")
//   res.status(200);
//   res.json({
//     "item": [
//       {
//         "info": "即時資訊1",
//         "name": "課程名稱1",
//         "youtube_id": "09R8_2nJtjg"
//       },
//       {
//         "info": "即時資訊3",
//         "name": "課程名稱2",
//         "youtube_id": "LNxWTS25Tbk"
//       },
//        {
//         "info": "即時資訊3",
//         "name": "課程名稱3",
//         "youtube_id": "09R8_2nJtjg"
//       },
//         {
//         "info": "即時資訊4",
//         "name": "課程名稱4",
//         "youtube_id": "LNxWTS25Tbk"
//       }
//     ]
//   });
// });

module.exports = app
