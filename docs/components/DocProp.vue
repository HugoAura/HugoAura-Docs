<script setup lang="ts">
import {
  Time as IconTime,
  Calendar as IconCalendar,
  ChartStepper as IconChartStepper,
} from "@vicons/carbon";
</script>

<template>
  <div class="doc-props-area">
    <div class="sub-prop">
      <IconCalendar class="doc-props-icon" />
      <span
        ><span class="doc-props-desc">最后编辑 | </span
        ><slot name="last-edit"></slot
      ></span>
    </div>
    <div class="sub-prop">
      <IconTime class="doc-props-icon" />
      <span
        ><span class="doc-props-desc">预估时间 | </span
        ><slot name="est-time"></slot
      ></span>
    </div>
    <div class="sub-prop">
      <IconChartStepper class="doc-props-icon" />
      <span
        ><span class="doc-props-desc">阅读难度 | </span
        ><slot name="difficulty"></slot
      ></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.doc-props-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  opacity: 0.6;
}

.doc-props-area .sub-prop {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.doc-props-area span {
  font-size: 14px;
}

.doc-props-icon {
  height: 16px;
  width: 16px;
  margin-right: 0.375rem;
}

@media (max-width: 768px) {
  .doc-props-area .doc-props-desc {
    display: none;
  }
}
</style>
