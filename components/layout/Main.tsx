import { FC } from 'react'
import styles from './Main.module.scss'

/**
 * Main
 */
const Main: FC = ({ children }) => {
    return (
        <main className={styles['main']}>
            {children}
        </main>
    )
}

export default Main