---
title: ⛑ Docker 常用命令整理
summary: Docker 常用命令整理
date: 2025-08-05
authors:
  - admin
tags:
  - docker
  - 命令
---
# Docker 常用命令整理

## 镜像相关

- 查看本地镜像  
  `docker images`

- 搜索镜像  
  `docker search 镜像名`

- 拉取镜像  
  `docker pull 镜像名[:tag]`
---

## 容器相关

- 查看正在运行的容器  
  `docker ps`

- 查看所有容器（包括已停止）  
  `docker ps -a`

- 启动容器  
  `docker start 容器ID或名称`

- 停止容器  
  `docker stop 容器ID或名称`

- 删除容器  
  `docker rm 容器ID或名称`

- 运行容器（后台）  
  `docker run -d --name 容器名 镜像名`

- 运行容器（交互式）  
  `docker run -it 镜像名 /bin/bash`

- 进入正在运行的容器  
  `docker exec -it 容器ID或名称 /bin/bash`

---

## 网络与端口

- 映射端口运行容器  
  `docker run -d -p 主机端口:容器端口 镜像名`

- 查看容器端口映射  
  `docker port 容器ID或名称`

---

## 数据卷

- 挂载主机目录到容器  
  `docker run -v 主机目录:容器目录 镜像名`

- 查看所有数据卷  
  `docker volume ls`

---

## 其他常用命令

- 查看容器日志  
  `docker logs 容器ID或名称`

- 查看容器详细信息  
  `docker inspect 容器ID或名称`

- 查看 Docker 版本  
  `docker version`

- 查看 Docker 系统信息  
  `docker info`

  复制文件到 Docker 中
  `docker cp config.json 容器ID或名称:/data/`

---

## 镜像构建

- 构建镜像  
  `docker build -t 镜像名:tag .`

---