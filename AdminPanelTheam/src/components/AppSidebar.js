import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {App}from 'src/components/header/App.css'
import { AppSidebarNav } from './AppSidebarNav'

import bubbleeIcon from 'src/assets/brand/bubblee_icon.png';
import { ReactComponent as sygnet } from 'src/assets/brand/sygnet.svg'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  React.useEffect(() => {
    dispatch({ type: 'set', sidebarShow });
  }, [dispatch, sidebarShow]);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ backgroundImage: `url(${bubbleeIcon})` }}>
  <div className="sidebar-brand-full">
    <img src={bubbleeIcon} alt="Bubblee Icon" className="logo-image" />
    
  </div>
  <div className="sidebar-brand-narrow" icon={sygnet} height={10} />
</CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
