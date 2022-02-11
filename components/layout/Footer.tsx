import Link from 'next/link'
import config from 'app/config'
import * as React from 'react'
import { useTranslation } from 'app/hooks'


/**
 * Footer
 */
const Footer: React.FC = () => {
    const { __ } = useTranslation('layout.footer')
    const menu = config.bottomLinks || []
    return (
        <footer className="footer">
            Footer
            <div className="footer-bottom">
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