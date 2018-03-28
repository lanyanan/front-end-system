import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.css';


function SildBar({ location }) {
    let arr = [{
    navId: 0,
    topNavName: "系统设置",
    childerList: [{
      sildBarName: "系统配置",
      show: true,
      sildBarId: 0,
      sildBarChilder: [{
        secondId: 0,
        secondName: "main",
        secondSildBarName: "后台首页"
      }, {
        secondId: 1,
        secondName: "config",
        secondSildBarName: "网站参数"
      }, {
        secondId: 2,
        secondName: "area",
        secondSildBarName: "地区信息"
      }]
    }, {
      sildBarName: "组织架构",
      id: 1,
      show: false,
      sildBarChilder: [{
        secondId: 3,
        secondName: "organizationlist",
        secondSildBarName: "组织列表"
      }, {
        secondId: 5,
        secondName: "organizationNumber",
        secondSildBarName: "组织员工"
      }, {
        secondId: 6,
        secondName: "organizationPost",
        secondSildBarName: "员工岗位"
      }, {
        secondId: 7,
        secondName: "organizationGroup",
        secondSildBarName: "员工分组"
      }]
    }, {
      sildBarName: "系统权限",
      id: 2,
      show: false,
      sildBarChilder: [{
        secondId: 8,
        secondName: "user",
        secondSildBarName: "系统用户"
      }, {
        secondId: 9,
        secondName: "organizationGroup",
        secondSildBarName: "权限列表"
      }, {
        secondId: 10,
        secondName: "organizationGroup",
        secondSildBarName: "节点管理"
      }]
    }]
  },
  {
    navId: 0,
    topNavName: "招商",
    childerList: [{
      sildBarName: "招商",
      show: false,
      sildBarId: 0,
      sildBarChilder: [{
        secondId: 12,
        secondSildBarName: "1"
      }, {
        secondId: 13,
        secondSildBarName: "1"
      }, {
        secondId: 14,
        secondSildBarName: "1"
      }, {
        secondId: 15,
        secondSildBarName: "1"
      }]
    }, {
      sildBarName: "招商",
      id: 1,
      show: false,
      sildBarChilder: [{
        secondId: 16,
        secondSildBarName: "1"
      }, {
        secondId: 17,
        secondSildBarName: "1"
      }, {
        secondId: 18,
        secondSildBarName: "1"
      }, {
        secondId: 19,
        secondSildBarName: "1"
      }]
    }, {
      sildBarName: "招商",
      id: 2,
      show: false,
      sildBarChilder: [{
        secondId: 20,
        secondSildBarName: "1"
      }, {
        secondId: 21,
        secondSildBarName: "1"
      }, {
        secondId: 22,
        secondSildBarName: "1"
      }, {
        secondId: 23,
        secondSildBarName: "1"
      }]
    }]
  },
  {
    navId: 0,
    topNavName: "合同",
    childerList: [{
      sildBarName: "合同",
      show: false,
      sildBarId: 0,
      sildBarChilder: [{
        secondId: 24,
        secondSildBarName: "1"
      }, {
        secondId: 25,
        secondSildBarName: "1"
      }, {
        secondId: 26,
        secondSildBarName: "1"
      }, {
        secondId: 27,
        secondSildBarName: "1"
      }]
    }, {
      sildBarName: "合同",
      id: 1,
      show: false,
      sildBarChilder: [{
        secondId: 28,
        secondSildBarName: "1"
      }, {
        secondId: 29,
        secondSildBarName: "1"
      }, {
        secondId: 30,
        secondSildBarName: "1"
      }, {
        secondId: 31,
        secondSildBarName: "1"
      }]
    }, {
      sildBarName: "合同",
      id: 2,
      show: false,
      sildBarChilder: [{
        secondId: 32,
        secondSildBarName: "1"
      }, {
        secondId: 33,
        secondSildBarName: "1"
      }, {
        secondId: 34,
        secondSildBarName: "1"
      }, {
        secondId: 35,
        secondSildBarName: "1"
      }]
    }]
  }
  ]
  return  <div className={styles['sildbar']}>
          <div className={styles['sildbar-container']}>
            {arr.map((item, index)=>{
                return <div className={styles['sildbar-container-item']} key={index}>
                      <div className={styles['sildbar-container-item-title']}  data-key={index} >
                        {item.topNavName}</div>
                    </div>
              })}
          </div>
        </div>
}

export default SildBar;

