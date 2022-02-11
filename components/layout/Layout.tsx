import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'


/**
 * Layout
 */
const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout
