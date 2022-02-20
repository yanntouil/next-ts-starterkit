import type { FC } from 'react'
import Link from 'next/link'
import config from 'app/config'
import { useTranslation } from 'app/hooks'
import styles from './Footer.module.scss'

/**
 * Footer
 */
const Footer: FC = () => {
    const { __ } = useTranslation('layout.footer')
    const menu = config.bottomLinks || []
    return (
        <footer className={styles.footer}>
            Footer
            <div className={styles['footer-bottom']}>
                {config.copyright && (
                    <Link href={config.copyright.link}>
                        <a className="footer-bottom-copyright">
                            {__('bottom.copyright', { author: config.copyright.author, year: config.copyright.year})}
                        </a>
                    </Link>
                )}
                {config.bottomLinks  && (
                    <ul className="footer-bottom-menu">
                        {config.bottomLinks.map((link, index) => (
                            <li 
                                key={`Footer-bottomLinks-${index}`} 
                                className="footer-bottom-menu"
                            >
                                <Link href={link.pathname}>
                                    <a className="footer-bottom-menu-link">
                                        {__('bottom.' + link.name)}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </footer>
    )
}

export default Footer