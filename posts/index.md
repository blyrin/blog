---
title: '文章 🤤'
---

<script setup>
import { links } from '../.vitepress/links.js'
</script>

<ul>
  <li v-for="{ link, text } of links.posts">
    <a :href="link">{{ text }}</a>
  </li>
</ul>
