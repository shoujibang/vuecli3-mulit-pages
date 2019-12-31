import Mock from 'mockjs';
const Random = Mock.Random;



  Mock.mock('/^ac/g', {
    'name': '@cname',
    'age|1-10': 10
  })

