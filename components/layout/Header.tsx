import React, { useState, FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import config from 'app/config'
import styles from './Header.module.scss'

import { useOnClickOutside, useTranslation } from 'app/hooks'
import { selectTranslation, setLanguage } from 'app/reducers/translation/reducer'
import { toggleMenu } from 'app/reducers/layout/reducer'

/**
 * Header
 */
const Header: FC = () => {
    // Translation
    const { __ } = useTranslation('layoutFront')
    // Redux dispatch
    const dispatch = useDispatch()
    
    /**
     * Menu management
     */
    //const { menu } = useSelector(selectLayout)
    // Show language dropdowm
    const toggleShowMenu = (): void => {
        dispatch(toggleMenu())
    }
    
    /**
     * Language management
     */
    // Current language
    const { language } = useSelector(selectTranslation)
    // Ref for click outside
    const languageRef = useRef(null)
    // Close dropdown on click outside
    useOnClickOutside(languageRef, () => {
        setShowLanguage(false)
    })
    // Dropdown state
    const [ showLanguage, setShowLanguage ] = useState(false)
    // Update language
    const changeLanguage = (newLanguage: string): void => {
        dispatch(setLanguage(newLanguage))
        setShowLanguage(false)
    }
    // Show language dropdowm
    const toggleShowLanguage = (): void => {
        setShowLanguage(!showLanguage)
    }
    // Render
    return (
        <header className={styles['header']}>
            <nav className={styles['header-wrapper']}>
                <div className={styles['header-logo']}>
                    <Link href='/'>
                        <a className={styles['header-logo-link']}>
                            {/* Header Logo */}
                            Logo
                        </a>
                    </Link>
                </div>
                {config.menu && (
                    <ul className={styles['header-menu']}>
                        {/* Header menu link */}
                        {config.menu.map((link, index) => (
                            <li 
                                key={`header-menu-${index}`} 
                                className={styles['header-menu-item']}
                            >
                                <Link href={link.pathname}>
                                    <a className={styles['header-menu-item-link']}>
                                        {__('menu.' + link.name)}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        {/* Header languages button */}
                        <li 
                            className={styles['header-menu-language']} 
                            ref={languageRef}
                        >
                            <button 
                                className={styles['header-menu-language-button']} 
                                onClick={toggleShowLanguage}
                            >
                                <Image 
                                    src={config.translation.flags[language]}
                                    layout="fill" 
                                    objectFit="cover" 
                                    priority={true} 
                                    alt={__('language.' + language)} 
                                />
                            </button>
                            {/* Header languages dropdown */}
                            {showLanguage && (
                                <div className={styles['header-menu-language-select']} >
                                    <h2 className={styles['header-menu-language-select-heading']}>{__('header.change-language')}</h2>
                                    <ul className={styles['header-menu-language-select-list']}>
                                        {config.translation.languages.map((item, index) => (
                                            <li 
                                                key={`header-languages-${index}`} 
                                                className={styles['header-menu-language-select-item']}
                                            >
                                                <button 
                                                    className={styles['header-menu-language-select-button']}
                                                    onClick={_ => changeLanguage(item)}
                                                >
                                                    <span className={styles['header-menu-language-select-button-image']}>
                                                        <Image 
                                                            src={config.translation.flags[item]}
                                                            layout="fill" 
                                                            objectFit="cover" 
                                                            priority={true} 
                                                            alt={__('language.' + item)} 
                                                        />
                                                    </span>
                                                    <span className={styles['header-menu-language-select-button-text']}>
                                                        {__('language.' + item)}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {/* Header phone button */}
                        <li className={styles['header-menu-phone']}>
                            <button 
                                className={styles['header-menu-phone-button']}
                                onClick={toggleShowMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"/></svg>
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header