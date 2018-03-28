import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.css';


function Header({ location }) {
  return (
    <div className={styles.header}>
          <div className={styles['header-icon-logo']}>
            <img src={require('../assets/01logo.png')} alt="" />
          </div>
          <div className={styles['header-nav-right']}>
            <div data-key="1" className={styles['header-nav-item']} >
              <span className={styles["login"]}>登录</span>
              <span style={{fontSize:"16px"}}>|</span>
              <span className={styles['sign']}>注册</span> 
            </div>
          </div>
        </div>
  );
}

export default Header;