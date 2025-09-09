---
title: 🧩 linux
summary: linux常用命令
date: 2025-08-05
authors:
  - admin
tags:
  - linux
  - 命令
---
# 常用命令

## 系统监控

---
查看cpu，内存
`top`

查看内存
`free -h`

查看磁盘
`df -h`

查看磁盘
`du -h`
`du -ah`

查看磁盘io
`vmstat -d 1`

查看进程中包含java关键字
`ps -ef | grep java`

查看定时任务
`crontab -l`

定时删除日志
`0 0 */1 * * /usr/bin/find /home/project/provincial-iot/iot-plugin/analysis/logs -ctime +1 -exec rm -rf {} \;`

定时执行脚本
`*/5 * * * * sh /home/project/provincial/storage_monitor.sh`
分钟 小时 日 月 星期

查看一天前移动或创建的文件
`-ctime +1`

将之前的字符串执行
`-exec rm -rf {} \;`

---
## 网络


查看ip端口是否可用
`telent ip port`

查看tcp端口监听
`netstat -tulnp`

启动防火墙
`systemctl start firewalld`

查看防火墙
`systemctl status firewalld`

关闭防火墙
`systemctl stop firewalld`

开放端口
`firewall-cmd --add-port=18087/tcp --permanent`
`firewall-cmd --reload`

移除开放端口
`firewall-cmd --permanent --remove-port=7000/tcp`

重新加载防火墙配置
`firewall-cmd --reload`

查看开放端口
`firewall-cmd --zone=public --list-ports`

查看监听端口
`lsof -i:18087`
`lsof -nP -iTCP -sTCP:LISTEN`

网络工具包
`yum -y install net-tools`

查看监听端口
`ss -nltp`

生成sshkey
`ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa`

将sshkey公钥放入其他服务器
`ssh-copy-id root@192.168.10.200`

使用sshkey登录其他服务器
`ssh -i /home/chaoying/.ssh/id_rsa root@192.168.10.200`

---
## 文件管理

进入根目录
`cd /`

创建文件夹
`mkdir xxx`

强制删除文件
`rm -rf xxx`

解压
`tar -zxvf xxx.tar.gz`
`gzip -d xxx.gz`
`unzip xxx.zip`

复制
`cp origin remote`

移动
`mv origin remote`

创建或编辑文件
`vim xx`

vim一共三种模式
默认模式
命令行模式 :进入命令行模式，Esc进入默认模式
编辑模式 按i进入编辑模式，Esc进入默认模式

安装xxxx应用
`yum install xxxx`

执行shell脚本
`sh ./xxx.sh`

使用sshkey复制文件到其他服务器
`scp -i /home/chaoying/.ssh/id_rsa ./target/compressor.jar root@192.168.10.200:/home/compressor/test.jar`

---
## 数据查看

查找文件
`find | grep java`

管道过滤，将前一个命令的回响结果进行过滤展示
`xxx | grep`

过滤查看第row行，第col个字符串
`xxx | awk 'NR==row{print$col}'`

查看文件搜索search_name上下10行
`cat file | grep -10 'search_name'`


将文件移动到xxxx目录并使用new_name
`mv old_name xxxx/new_name`

将文件复制到another目录下
`cp name another`

显示路径
`pwd`

---
# shell脚本

输出至空设备
`>/dev/null 2>&1`

启动命令文件名，第一，第二参数
`$0,$1,$2`

执行后续字符，
`eval ""`

switch语句
```bash
case "$1" in
"debug")
    debug
    ;;
"start")
    start
    ;;
"stop")
    stop
    ;;
"status")
    status
    ;;
"restart")
    restart
    ;;
*)
    echo "sh run.sh [debug | start | stop | status]"
    ;;
esac
```