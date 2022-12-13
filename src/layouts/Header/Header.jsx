import React from 'react'
import styles from './header.module.css';
import clogo from '../../assets/clogo.png'
import HeaderCategoryMenu from '../../components/HeaderCategoryMenu/HeaderCategoryMenu';
import HeaderInnerItems from '../../components/HeaderInnerItems/HeaderInnerItems';

const Header = () => {
  return (
    <>
        <div className={styles.header_section}>
          <div className={styles.header_main}>
            <div className="container">
              <div className={styles.header_main_wrapper}>
                <div className={styles.header_logo}>
                  <a href="#"><img className={styles.header_logo_icon}  src={clogo} alt="" /></a>
                </div>
                <HeaderCategoryMenu />
                <HeaderInnerItems />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header