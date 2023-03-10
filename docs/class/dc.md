---
title: ChatGPT on Discord
sidebar_position: 4
slug: dc
description: ChatGPT 串接 DC
---

:::info
目前開放 API 接入的是 GPT-3(降級版)，
由於 ChatGPT 流量過大，已經全面接入 Cloudflare WAF，  
會強勢檢查任何請求。
:::

## Docker 作為解決方案

:::warning
既然是以 python 作為基底  
python 依賴套件有 import 到任一 docker container 嗎?
:::
[**可以先試試看這個 repo**](https://github.com/Zero6992/chatGPT-discord-bot)
:::note
我在網路上找不到有關於要不要 Expose 端口的參數  
因為大家都本地運行，並非用於生產環境。
:::

### 關於 Docker Expose in dockerfile

[IT 幫忙 介紹 Docker 的 Network (一)](https://ithelp.ithome.com.tw/articles/10193291)

### 關於 Docker Compose yaml 的 port settings

[Docker-compose port 與 expose 差異](https://blog.myctw.cc/post/df5.html)

## node.js 作為解決方案

:::note
可以推送到生產環境進行服務，如  
**Netlify** or **Vercel**
:::

:::caution
node.js 為依賴套件  
npm 也是
:::

### Youtube 影片 1

<iframe width="100%" height="315" src="https://www.youtube.com/embed/roMykVsig-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[使用 Node.js 構建 GPT-3 Discord 聊天機器人](https://www.twilio.com/blog/build-gpt-3-discord-chatbot-node-js)

---

## GPT-3 串接 LINE

<iframe width="100%" height="315" src="https://www.youtube.com/embed/uHsCou1AfEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
