import request from '@/utils/request'

export default {
  //医院设置列表
  getHospSetList(current,limit,searchObj) {
    return request ({//使用request。//此处跟导入的名字保持一致！！
      //此处使用es6中的模板字符串进行取值，而没有使用字符串的拼接，是为了防止SQL的注入！
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,//此处的路径要跟后端控制器的路径要保持一致的名称路径！！
      method: 'post',
      data: searchObj  //使用json
    })
  },
  //删除医院设置
  deleteHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  //批量删除
  batchRemoveHospSet(idList) {
    return request ({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定和取消锁定
  lockHospSet(id,status) {
    return request ({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  //院设置id查询
  getHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
