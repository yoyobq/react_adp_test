export default {
  'GET /api/singleSelection': {
    quest:
      '若有命令 useradd -u 510 -g 500 -d /home/user1 -s /bin/bash -p 123456 -f -1 user1 则下列描述不正确的是（）',
    // 后台应该传来的是已经按 orderedTag 顺序打乱的数组
    options: [
      '用户的密码永不过期',
      '用户的家目录为 /home/user1',
      '用户下次登录无须修改口令',
      '新建了一个名为user1的用户',
    ],
    // 请无视此答案是否合理
    realAnswer: 'D',
    // 打乱后的A,B,C,D顺序
    orderedTag: ['C', 'B', 'D', 'A'],
  },
};
