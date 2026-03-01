---
title: "系统运维和操作笔记"
date: 2024-11-21
description: "Linux/系统运维学习笔记"
tags: ["Linux", "运维"]
cover:
  image: "cover.png"
---

## Linux 内核网络优化

`/etc/sysctl.conf` 或 `/etc/sysctl.d/` 下新建配置文件：

```ini
# 启用 BBR 拥塞控制
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr

# 复用 TIME_WAIT 连接
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_timestamps = 1

# 增大 TCP 缓冲区
net.core.rmem_max = 33554432
net.core.wmem_max = 33554432
net.ipv4.tcp_rmem = 4096 87380 33554432
net.ipv4.tcp_wmem = 4096 16384 33554432

# 增大连接队列
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
```

应用：`sysctl -p`

## 减少磁盘写入

### journald 日志只存内存

编辑 `/etc/systemd/journald.conf`：

```ini
Storage=volatile
RuntimeMaxUse=50M
```

查看硬盘上日志占用的空间：

```bash
du -sh /var/log/journal/
```

彻底删除硬盘上的日志目录：

```bash
sudo rm -rf /var/log/journal/
```

### fstab 添加 noatime

编辑 `/etc/fstab`，在挂载选项中加入 `noatime`：

```text
UUID=... / ext4 errors=remount-ro,noatime 0 1
```

### 禁用不必要的定时器

```bash
systemctl disable apt-daily.timer
systemctl disable logrotate.timer
```

### rsyslog 日志写到内存

编辑 `/etc/rsyslog.conf`，将日志路径改为 `/run` 下。

编辑 `/etc/logrotate.d/rsyslog`：

```text
rotate 1
    size 10M
    missingok
    notifempty
    compress
    postrotate
        /usr/lib/rsyslog/rsyslog-rotate
    endscript
```

## 解决 TUN 模式代理下无法使用 GitHub SSH

编辑 `~/.ssh/config`，通过 443 端口连接：

```text
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

## Caddy 常用配置文件

[官方文档](https://caddyserver.com/docs/)

[HSTS 参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)

```caddyfile
{
        # 关闭管理面板
        admin off
}

# 通用配置块
(COMMON_CONFIG) {
        # tls 配置
        #tls /etc/caddy/flapypan.cn.pem /etc/caddy/flapypan.cn.key
        # 压缩支持 (br 需要额外插件)
        encode zstd br gzip
        # HSTS 推荐的时间是 2 年
        header Strict-Transport-Security "max-age=63072000; includeSubDomains"
        # 去除响应头
        header -Server
        header -Via
        header -Server
        header -x-powered-by
        # 禁止部分爬虫的ua
        @norobots {
                header_regexp User-Agent "^(|360Spider|JikeSpider|Spider|spider|bot|Bot|2345Explorer|curl|wget|webZIP|qihoobot|Baiduspider|Googlebot(-Mobile|-Image)?|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp( China)?|YoudaoBot|Sosospider|Sogou( spider| web spider)|MSNBot|ia_archiver|Tomato Bot|NSPlayer|bingbot)?$"
        }
        redir @norobots http://localhost/ permanent includeSubDomains"
}

# 站点配置

example.org {
        # 重定向到www
        redir https://www.example.org{uri}
        import COMMON_CONFIG
}

blog.example.org {
        # 重定向到www
        redir https://www.example.org{uri}
        import COMMON_CONFIG
}

www.example.org {
        root * /home/user/blog/dist
        route {
                # handle_path 去除前缀，handle 保留
                handle_path /api/* {
                        # 反向代理
                        reverse_proxy localhost:8080
                }
                # 单页面应用
                try_files {path}.html {path} /
                file_server
        }
        import COMMON_CONFIG
}
```
