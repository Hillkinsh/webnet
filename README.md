## 1. commit 提交规范检测 + 自动生成提交日志

(vue-cli-plugin-commitlint)[https://www.npmjs.com/package/vue-cli-plugin-commitlint]

本来想钻研一下，现在只有赞叹的分了

## 2. 钻研 webpack 去

1. 问题：如果我有一个 index.js 还有一个 index.css 如何在 js 中引入 css
2. 问题：如果我希望引用 less 如何操作
3. 问题：如何使用 babel
4. 问题：如何给 css 自动添加前缀
5. webpack 性能优化怎么做
   (分离 Manifest,
   Code Splitting（代码分割
   Bundle Splitting（打包分割）
   Tree Shaking（删除死代码）
   开启 gzip
   dll (就是外部依赖库的缓存，从而减少打包时间，但效果一般)
   参考文章 <https://segmentfault.com/a/1190000020485804>
   )
