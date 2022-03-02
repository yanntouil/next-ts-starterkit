import { FC } from 'react'
import Link from 'next/link'
import config from 'app/config'
import { useTranslation } from 'app/hooks'
import { selectLayout, setMenu } from 'app/reducers/layout/reducer'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Menu.module.scss'
import { setLanguage } from 'app/reducers/translation/reducer'
import Image from 'next/image'


/**
 * Footer
 */
const Menu: FC = () => {
    // Translation
    const { __ } = useTranslation('layoutFront')
    // Redux dispatch
    const dispatch = useDispatch()
    // Menu redux state
    const { menu } = useSelector(selectLayout)
    // Close menu
    const closeMenu = () => dispatch(setMenu(false))
    // Update language
    const changeLanguage = (newLanguage: string): void => {
        dispatch(setLanguage(newLanguage))
    }

    // Render
    return menu ? (
        <div className={styles['menu']}>
            {/* Menu close */}
            <button 
                className={styles['menu-close']}
                onClick={closeMenu} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
            </button>
            {/* Menu Languages */}
            <ul className={styles['menu-languages']}>
                {config.translation.languages.map((item, index) => (
                    <li 
                        key={`menu-languages-${index}`} 
                        className={styles['menu-languages-item']}
                    >
                        <button 
                            className={styles['menu-languages-item-button']}
                            onClick={_ => changeLanguage(item)}
                        >
                            <Image
                                src={config.translation.flags[item]}
                                layout="fill" 
                                objectFit="cover" 
                                alt={__('language.' + item)} 
                            />
                            <span className='sr-only'>
                                {__('language.' + item)}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            {/* Menu links */}
            <ul className={styles['menu-list']}>
                {config.menu.map((link, index) => (
                    <li 
                        key={`menu-list-${index}`} 
                        className={styles['menu-list-item']}
                    >
                        <Link href={link.pathname}>
                            <a 
                                className={styles['menu-list-item-link']} 
                                onClick={closeMenu}
                            >
                                {__('menu.' + link.name)}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ) : (<></>)
}

export default Menu