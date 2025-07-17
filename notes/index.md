---
title: '笔记 🤓'
---

<script setup>
import { links } from '../.vitepress/links.js'
</script>

<ul>
  <li v-for="{ link, text } of links.notes">
    <a :href="link">{{ text }}</a>
  </li>
</ul>
