import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
         
        </a>
        
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by VehiClean</span>
       
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
