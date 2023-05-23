import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

import styles from './../../styles/Header.module.css';
// import AVATAR from '../../images/avatar.jpg ';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='Stuff' />
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.user}>
					<div className={styles.avatar}
                    //  style={{backgroundImage: `url(${AVATAR})`}} 
                    />
                    <div className={styles.username}>Guest</div>
				</div>
                <form className={styles.form}>
                <div className={styles.icon}>
                    <svg>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/splite.svg#search`} />
                    </svg>
                </div>
                <div className={styles.input}>
                    <input type="search" name="search" placeholder="Search for anything..." />
                </div>
                </form>
			</div>
		</div>
	);
};

export default Header;
