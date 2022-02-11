import Link from 'next/link'
import config from 'app/config'
import * as React from 'react'
import { useTranslation } from 'app/hooks'
import { selectLayout, setMenu } from 'app/reducers/layout/reducer'
import { useDispatch, useSelector } from 'react-redux'


/**
 * Footer
 */
const Menu: React.FC = () => {
    const { __ } = useTranslation('layout')
    const dispatch = useDispatch()
    const { menu } = useSelector(selectLayout)

    const closeMenu = () => {
        dispatch(setMenu(false))
    }
    return menu ? (
        <div className="menu" onClick={closeMenu}>

        </div>
    ) : (<></>)
}

export default Menu