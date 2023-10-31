#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm vpb

# 进入生成的文件夹
cd docs/.vuepress/dist
tag=$(date "+%Y%m%d_%H%M%S")
git init
git add .
git commit -m p$tag

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jesseice/DDesign.git master:gh-pages

cd -