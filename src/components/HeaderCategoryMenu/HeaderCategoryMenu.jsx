import React from 'react'
import styles from './headercategorymenu.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import course1 from '../../assets/courses/courses-1.jpg'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const HeaderCategoryMenu = () => {
  return (
    <>
        <div className={`${styles.header_category_menu} d-none d-xl-block`} >
          <a className={styles.header_category_toggle} href="#">
            <div className={styles.header_category_toggle__icon}>
              <AppsIcon />
            </div>
            <div class={styles.header_category_toggle__text}>Explore</div>
          </a>
          <div className={styles.header_category_dropdown_wrap}>
            <ul className={styles.header_category_dropdown}>
              <li>
                  <a href="course-list-page.html"> Design <span className={styles.toggle_sub_menu}><KeyboardArrowRightRoundedIcon/></span></a>
                  <ul className={`${styles.sub_categories} ${styles.children}`}>
                      <li><a href="course-list-page.html">All Business</a></li>
                      <li>
                          <a href="#">Communications<span className={styles.toggle_sub_menu}></span></a>
                          <ul className={`${styles.sub_categories} children`}>
                                <li>
                                  <a className={styles.categories_course} href="course-list-page.html">
                                      <div className={styles.categories_course__thumbnail}>
                                          <img src={course1} alt="Course" width="62" height="50"/>
                                      </div>
                                      <div className={styles.categories_course__caption}>
                                          <h5 className={styles.categories_course__title}>Illustrator 2020 MasterClass</h5>
                                          <div className={styles.categories_course__price}>
                                              <span className={styles.categories_course__sale_price}>$22.00</span>
                                              <span className={styles.categories_course__regular_price}>$30.00</span>
                                          </div>
                                      </div>
                                  </a>
                                </li>
                                <li>
                                  <a className={styles.categories_course} href="course-list-page.html">
                                      <div className={styles.categories_course__thumbnail}>
                                          <img src={course1} alt="Course" width="62" height="50"/>
                                      </div>
                                      <div className={styles.categories_course__caption}>
                                          <h5 className={styles.categories_course__title}>Illustrator 2020 MasterClass</h5>
                                          <div className={styles.categories_course__price}>
                                              <span className={styles.categories_course__sale_price}>$22.00</span>
                                              <span className={styles.categories_course__regular_price}>$30.00</span>
                                          </div>
                                      </div>
                                  </a>
                                </li>
                                <li>
                                  <a className={styles.categories_course} href="course-list-page.html">
                                      <div className={styles.categories_course__thumbnail}>
                                          <img src={course1} alt="Course" width="62" height="50"/>
                                      </div>
                                      <div className={styles.categories_course__caption}>
                                          <h5 className={styles.categories_course__title}>Illustrator 2020 MasterClass</h5>
                                          <div className={styles.categories_course__price}>
                                              <span className={styles.categories_course__sale_price}>$22.00</span>
                                              <span className={styles.categories_course__regular_price}>$30.00</span>
                                          </div>
                                      </div>
                                  </a>
                                </li>
                          </ul>
                      </li>
                      <li><a href="course-list-page.html">Entrepreneurship</a></li>
                  </ul>
              </li>
              <li><a href="course-list-page.html">Business</a></li>
              <li><a href="course-list-page.html">Data Science</a></li>
            </ul>
          </div>
        </div>
    </>
  )
}
 
export default HeaderCategoryMenu;