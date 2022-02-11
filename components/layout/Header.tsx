import React, { useState, FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import config from 'app/config'
import { useOnClickOutside, useTranslation } from 'app/hooks'
import { selectTranslation, setLanguage } from 'app/reducers/translation/reducer'
import { selectLayout, toggleMenu } from 'app/reducers/layout/reducer'

/**
 * Header
 */
const Header: FC = () => {
    const { __ } = useTranslation('layout')
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

    return (
        <header className="header">
            <nav className="header-wrapper">
                <div className="header-logo">
                    <Link href='/'>
                        <a className="header-logo-link">
                            Logo
                        </a>
                    </Link>
                </div>
                {config.menu && (
                    <ul className="header-menu">
                        {config.menu.map((link, index) => (
                            <li key={`Header-menu-${index}`} className="header-menu-item">
                                <Link href={link.pathname}>
                                    <a className="header-menu-item-link">
                                        {__('menu.' + link.name)}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li 
                            className="header-menu-language" 
                            ref={languageRef}
                        >
                            <button 
                                className="header-menu-language-button"
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
                            {showLanguage && (
                                <div className="header-menu-language-select">
                                    <h2 className="header-menu-language-select-heading">{__('header.change-language')}</h2>
                                    <ul className="header-menu-language-select-list">
                                        {config.translation.languages.map((item, index) => (
                                            <li 
                                                key={`Header-languages-${index}`} 
                                                className="header-menu-language-select-item"
                                            >
                                                <button 
                                                    className="header-menu-language-select-button"
                                                    onClick={e => changeLanguage(item)}
                                                >
                                                    <span className="header-menu-language-select-button-image">
                                                        <Image 
                                                            src={config.translation.flags[item]}
                                                            layout="fill" 
                                                            objectFit="cover" 
                                                            priority={true} 
                                                            alt={__('language.' + item)} 
                                                        />
                                                    </span>
                                                    <span className="header-menu-language-select-button-text">
                                                        {__('language.' + item)}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="header-menu-phone">
                            <button 
                                className="header-menu-phone-button"
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