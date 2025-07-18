---
title: 关于我
lastUpdated: false
---

<script setup>
const friends = [
  {
    title: `HAUE_LYS' Blog`,
    avatar: `https://avatars.githubusercontent.com/u/91442300`,
    url: 'https://lys2021.com/',
  },
  {
    title: `秋萤blog-秋秋的点心铺`,
    avatar: `https://oss.itbaima.cn/hub/273/image-20241101kqbxrg9mz.jpeg`,
    url: `https://www.qiuyingtyan.top/`,
  },
  {
    title: `赤城的部落格`,
    avatar: `https://avatars.githubusercontent.com/u/39934721`,
    url: `https://akagiyui.com/`,
  },
  {
    title: `Arnoya's Blog`,
    avatar: `https://avatars.githubusercontent.com/u/111434851`,
    url: `https://arnoya.vercel.app/`,
  },
  {
    title: `終わり群星`,
    avatar: `https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg`,
    url: `https://stazxr.cn/`,
  },
  {
    title: `Jinze 's Blog`,
    avatar: `https://oss.itbaima.cn/hub/38/image-20241122rka3vk1hp.jpeg`,
    url: `https://jinze.me0w00f.tech/`,
  },
  {
    title: `Chains Space`,
    avatar: `https://avatars.githubusercontent.com/u/57125016`,
    url: `https://dropthechains.github.io/Chains-Space/`,
  },
  {
    title: `Zwanan's Blog`,
    avatar: `https://avatars.githubusercontent.com/u/92927055`,
    url: `https://blog.zwanan.top`,
  }
]
</script>


## 好朋友们

<div :class="$style.friends">
<div v-for="friend in friends" :class="$style.friend" :key="friend.title">
<a :href="friend.url" target="_blank"><img :src="friend.avatar" alt="" /></a>
<a :href="friend.url" target="_blank">{{ friend.title }}</a>
</div>
</div>

## Genshin

[![genshin-card](https://ys.himiku.com/64/75432741.png)](https://www.miyoushe.com/ys/accountCenter/postList?id=75432741)

<style module>
.friends {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 2fr));
  gap: 1rem;
  padding: 1rem 0;
  .friend {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    word-break: break-word;
    text-wrap: balance;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
  }
}
</style>
