---
title: 前言
editLink: true
---

<script setup>
import { useData } from 'vitepress';
const { isDark } = useData();
</script>

# 所以... 启航吧 {#getting-started}

<DocProp>
  <template #last-edit>2025.11.20</template>
  <template #est-time>3 分钟</template>
  <template #difficulty>入门</template>
</DocProp>

<img :src="isDark ? '/static/img/userGuide/introduction/Banner_Transparent.png' : '/static/img/userGuide/introduction/Banner.jpeg'" />

## 写在前面 {#before-all}

厌倦了每次重启后都被还原如初的桌面? 苦恼于连个课表软件都没有办法持久化安装? 感叹于身为 "电教委" 却毫无实权?

自从希沃官方的设备集控平台「[希沃集控](/misc/seewo-hugo-intro-video)」在全国各校推广以来, 学生们对班内大屏的自由正一点一滴地被剥削:

- **冰点还原** | 软件安装再也无法被持久化, 即使把应用安装到未冻结盘符, 依然无法调整开机自启等。设备磁盘的写入寿命也被显著损耗。
- **设备巡视** | 「教室是公共空间, 在这里你没有隐私!」, 班主任、任课老师想随时随地偷窥都不会有任何限制, 1984 的时代已然到来。
- **弹窗拦截** | 流氓软件并没有被得到根治, 正常软件却被频频误杀。想放个音乐? 客户端的窗口给你拦截。想装个批注软件? 悬浮窗也给你拦了。
- **网址拦截** | 私自在设备上安装自签 CA, 上报所有访问的网址到集控服务器。堪比企业网络 AC 的监控程度, 附带着自签 CA 被用作 MITM 的风险。

不可否认, 一些同学随意在大屏上刷短视频、下载游戏, 这类行为的确应当谴责。但真的有必要通过上述这些形式来实现「管理」吗?

这不是我想象中, 教育信息化应有的样子。

**那就让我们来打破它。**

## HugoAura 是什么? {#whats-this}

**HugoAura** (中文名: `雨光之环`), 全称 **Project HugoAura**, 是一个专门寻找各类技术方案与希沃集控进行对抗的组织。
