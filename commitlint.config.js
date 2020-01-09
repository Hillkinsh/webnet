module.exports = Object.assign({}, require('jimi-web-changelog/lib/lint'), {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '新功能',
        'feat',
        '修复',
        'fix',
        '性能优化',
        'perf',
        '代码样式',
        'style',
        '文档',
        'docs',
        '测试',
        'test',
        '重构',
        'refactor',
        '构建',
        'build',
        '持续集成',
        'ci',
        '杂',
        'chore',
        '撤销',
        'revert'
      ]
    ]
  }
})