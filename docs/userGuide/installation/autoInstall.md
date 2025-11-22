---
title: 一键安装
editLink: true
---

<script setup>
import { useData } from 'vitepress';
import { ref } from 'vue';
import { Info24Regular, QuestionCircle24Regular, ErrorCircle24Regular } from '@vicons/fluent';
import { NAlert, NIcon } from 'naive-ui';
const { isDark } = useData();
const imgPathBaseline = ref("/static/img/userGuide/installation/autoInstallation");
</script>

# 一键安装 {#title}

<DocProp>
  <template #last-edit>2025.11.22</template>
  <template #est-time>3 ~ 5 分钟</template>
  <template #difficulty>入门</template>
</DocProp>

<img :src="`${imgPathBaseline}/Banner${isDark ? '_Transparent.png' : '_WithBg.png'}`" />

## 选择网络环境 {#choose-network-env}

- [联网安装](#with-network)
- [离线安装](#without-network)

## 联网安装 {#with-network}

### 网络可访问性检查 {#with-network-accessiblity-check}

<img class="zoomable" :src="`${imgPathBaseline}/CheckYourConnection${isDark ? '_Transparent.png' : '_WithBg.png'}`" />

<NAlert title="请确保您的网络可访问以下站点" type="info">
  <template #icon>
    <NIcon>
      <QuestionCircle24Regular />
    </NIcon>
  </template>
  无需逐一手动测试, 仅当一键安装下载失败时再诊断即可
  <ul>
    <li><a href="https://api.github.com">GitHub API (https://api.github.com)</a>, <b>以及</b></li>
    <li><a href="https://e.seewo.com">希沃易 + 软件下载站 (https://e.seewo.com)</a>, <b>以及</b></li>
    <li>
      以下下载源中的<b>任意一个</b>:
      <ol>
        <li><a href="https://gh.llkk.cc">gh.llkk.cc</a></li>
        <li><a href="https://gitproxy.127731.xyz">gitproxy.127731.xyz</a></li>
        <li><a href="https://bgithub.xyz">bgithub.xyz</a></li>
        <li><a href="https://github.dpik.top">github.dpik.top</a></li>
        <li><a href="https://gh.catmak.name">gh.catmak.name</a></li>
        <li><a href="https://ghfast.top">ghfast.top</a></li>
        <li><a href="https://ghproxy.net">ghproxy.net</a></li>
        <li><a href="https://github.tbedu.top">github.tbedu.top</a></li>
        <li><a href="https://github.com">github.com</a></li>
      </ol>
    </li>
  </ul>
</NAlert>

### 更新至最新版希沃管家 {#with-network-update-to-latest-seewo-services}

请打开 [e.seewo.com](https://e.seewo.com), 接着按下图所示完成管家最新版下载。

<NAlert title="点击可查看大图" type="info">
  <template #icon>
    <NIcon>
      <Info24Regular />
    </NIcon>
  </template>
  单击图片即可放大查看
</NAlert>

<img class="zoomable" :src="`${imgPathBaseline}/DownloadLatestSSA_Transparent${isDark ? '_White.png' : '_Black.png'}`" />

<NAlert title="请务必更新到 e.seewo.com 上的最新管家版本" type="warning">
  <template #icon>
    <NIcon>
      <ErrorCircle24Regular />
    </NIcon>
  </template>
  受注入技术限制, HugoAura-Main 始终仅对最新版本的希沃管家提供支持, 如果您尝试在旧版本管家上安装 HugoAura, 可能会引发崩溃或功能失效等问题。<br />
  我们不受理来自旧版管家的 Issues。
</NAlert>

1. 将鼠标置于顶栏 "软件下载" 处
2. 在展开的软件列表中选择 "希沃管家 (大板端)"
3. 在弹窗中默认的 "Windows" 选项卡中点击 "立即下载"

下载完成后, 运行安装包并根据提示操作即可。此过程可能需要 1 ~ 5 分钟 (取决于您的设备性能)。


### 下载安装器文件 {#with-network-download-installer-package}

如果网络情况允许, 推荐您通过 [GitHub Releases](https://github.com/HugoAura/HugoAura-Install/releases) 下载安装器文件。

一般选择最新的 Release 即可。

<NAlert title="正在使用 Windows 7 ?" type="warning">
  <template #icon>
    <NIcon>
      <QuestionCircle24Regular />
    </NIcon>
  </template>
  在 Windows 7 设备上使用一键安装可能需要特殊处理。接下来的每个步骤底部, 都会提供针对 Windows 7 设备的操作方案。请留意。<br />
  <b>我们强烈建议您尽快更新 Windows 版本, Windows 7 是完全 EOL 的 Windows 发行, HugoAura 不对任何 Win 7 设备上遇到的特化 Bug 进行处理。</b>
  <br />
  <br />
  针对本步骤, 在下载文件时, 请下载带有 <code>py3-8</code> 字样的 EXE 包。Windows 7 无法运行 Python 3.10 的构建产物。
</NAlert>

如果您的网络在访问 GitHub 时存在困难, 也可通过以下渠道下载:

| 下载渠道 | 下载链接 | 最新版本 |
| :-------: | :--------: | :--------: |
| GitHub | [链接](https://github.com/HugoAura/HugoAura-Install/releases) | `始终最新` |
| 123 云盘 | [链接 (提取码: aura)](https://www.123865.com/s/0KJ9jv-7V4Md?pwd=aura#) | `v0.0.3-beta-II` |
| 蓝奏云 | [链接 (提取码: cmba)](https://stdout.lanzout.com/b002vi0ikb) | `v0.0.3-beta-II` |

### 运行安装器 {#with-network-run-installer-package}

如果您的设备开启了 Windows Defender SmartScreen, 可能会在运行时看到类似下图的警告框:

<img class="zoomable" :src="`${imgPathBaseline}/BypassWindowsDefender${isDark ? '_Transparent.png' : '_WithBg.png'}`" />

这是因为安装器没有数字签名所致。如果您是从上方任一来源下载的, 那么可以完全信任此文件。

请:

1. 点击弹框中的 "了解更多信息"
2. 点击弹框底部靠左的 "仍要运行" 按钮

### 使用安装器 {#with-network-using-installer}

如果您是 Windows 10 用户 (下载了 `py3-10`), HugoAura Install 提供了友好的图形化界面供您执行操作。

<img class="zoomable" :src="`${imgPathBaseline}/InstallerUI${isDark ? '_Transparent.png' : '_WithBg.png'}`" />

<p class="opacity-50 align-center" style="font-size: small;">请小心照骗</p>

请按如下步骤完成安装:

1. 选择一个合适的版本类型 (一般推荐使用 CI 版, 与一般软件不同, HugoAura 的稳定版 (发行版) 可能不一定能良好兼容最新版管家, )
