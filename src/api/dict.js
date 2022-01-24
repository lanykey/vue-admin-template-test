import request from '@/utils/request'

export default {
  //数据字典列表
  dictList(id) {
    return request ({
      // 这个请求的路径要跟后端的cmn控制器中的路径保持一致
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  }
}
