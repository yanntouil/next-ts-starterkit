import type { FC } from 'react'
import Link from 'next/link'
import config from 'app/config'
import { useTranslation } from 'app/hooks'
import styles from './Footer.module.scss'

/**
 * Footer
 */
const Footer: FC = () => {
    // Translation
    const { __ } = useTranslation('layoutFront.footer')
    
    // Render
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-wrapper']}>
                {/* Footer Content */}
            </div>
            {/* Footer bottom links */}
            {config.copyright && config.bottomLinks && (
                <div className={styles['footer-bottom']}>
                    {config.copyright && (
                        <Link href={config.copyright.link}>
                            <a className={styles['footer-bottom-copyright']}>
                                {__('bottom.copyright', { author: config.copyright.author, year: config.copyright.year})}
                            </a>
                        </Link>
                    )}
                    {config.bottomLinks  && (
                        <ul className={styles['footer-bottom-menu']}>
                            {config.bottomLinks.map((link, index) => (
                                <li 
                                    key={`footer-bottom-menu-item-${index}`} 
                                    className={styles['footer-bottom-menu-item']}
                                >
                                    <Link href={link.pathname}>
                                        <a className={styles['footer-bottom-menu-item-link']}>
                                            {__('bottom.' + link.name)}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </footer>
    )
}

export default Footer