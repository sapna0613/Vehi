import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilLineStyle,cilAssistiveListeningSystem,
  cilGlobeAlt,cilControl,cilLifeRing,
  cilDescription,cilMoney,cilSpeedometer,
  cilStar,cilUser,cilSitemap,cilContact,
  cilBalanceScale,cilGroup,cilStorage,
  cilFeaturedPlaylist,cibCashapp,cilGift,
  cilMouthSlash,cilFile,
  cilSpeaker,cilSnowflake,
  cilFax,cilUserFemale,cilWallet,cilPeople,
  cilSpreadsheet,cilDollar,cilNotes,
  cilCreditCard,cilListRich,cilList,
  cibBitcoin,cibGovUk,cilBellExclamation,
  cilMoodVeryBad,cilAudioDescription, 

} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  //*******************************System Settings********************/
  {
    component: CNavGroup,
    name: 'System Setting',
    icon: <CIcon icon={cilLineStyle} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Global Setup',
        to:'/base/System_Setting/GlobalSetup',
        icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Business Country',
        to:'/base/System_Setting/BusinessCoun',
        icon:<CIcon icon={cilControl} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Business State',
        to:'/base/System_Setting/BusinessState',
        icon:<CIcon icon={cilLifeRing} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Tax',
        to:'/base/System_Setting/Tax',
        icon:<CIcon icon={cilMoney} customClassName="nav-icon" />
      },
    ],
  },
  
  /************************System Reference*****************/
  {
    component: CNavGroup,
    name: 'System Reference',
    icon: <CIcon icon={cilAssistiveListeningSystem} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Customer',
        to:'/base/SystemReference/Customer',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'AddLead',
        to:'/base/SystemReference/AddLead',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'KYC',
        to:'/base/SystemReference/KYC',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Register',
        to:'/base/SystemReference/Register',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Affiliated Partners',
        to:'/base/SystemReference/AffiliatedPartners',
        icon:<CIcon icon={cilSitemap} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Merchants',
        to:'/base/SystemReference/Merchants',
        icon:<CIcon icon={cilContact} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Inventory Managment',
        to:'/base/SystemReference/InventoryManagment',
        icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Merchant Category',
        to:'/base/SystemReference/MerchantCategory',
        icon:<CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Item Category',
        to:'/base/SystemReference/ItemCategory',
        icon:<CIcon icon={cilStorage} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Item Catalogue',
        to:'/base/SystemReference/ItemCatalogue',
        icon:<CIcon icon={cilFeaturedPlaylist} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Subscription Plans',
        to:'/base/SystemReference/Subscription_Plans',
        icon:<CIcon icon={cibCashapp} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Notification',
        to:'/base/SystemReference/Notification',
        icon:<CIcon icon={cilBellExclamation} customClassName="nav-icon"/>
      },
      {
        component:CNavItem,
        name:'Promo Codes',
        to:'/base/SystemReference/PromoCodes',
        icon:<CIcon icon={cilGift} customClassName="nav-icon"/>
      },
      {
        component:CNavItem,
        name:'Dispute Reasons',
        to:'/base/SystemReference/DisputeReasons',
        icon:<CIcon icon={cilMouthSlash} customClassName="nav-icon"/>
      },
      {
        component:CNavItem,
        name:'Ticket',
        to:'/base/SystemReference/Ticket',
        icon:<CIcon icon={cilFile} customClassName="nav-icon" />
      },
    ],
  },
  //***************************System ROlls******************/
  {
    component:CNavGroup,
    name:'System Roles',
    icon:<CIcon icon={cilSpeaker} customClassName="nav-icon" />,
    items: [
      
      {
        component:CNavItem,
        name:'Affiliated Partner',
        to:'/base/System_Roles/AffiliatedPartner',
        icon:<CIcon icon={cilSnowflake} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Operation Manager',
        to:'/base/System_Roles/OperationManager',
        icon:<CIcon icon={cilFax} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Account Manager',
        to:'/base/System_Roles/AccountManager',
        icon:<CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name:'Dispute Manager',
        to:'/base/System_Roles/DisputeManager',
        icon:<CIcon icon={cilUserFemale} customClassName="nav-icon" />
      },
    ],
  },      
  {
    component:CNavGroup,
    name:'E-wallet Managment',
    to: '/base/E-wallet-Managment',
    icon:<CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Customers',
        to:'/base/E-wallet-Managment/Customers',
        icon:<CIcon icon={cilPeople} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Merchants',
        to:'/base/E-wallet-Managment/Merchant',
        icon:<CIcon icon={cilContact} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Affiliated Partners',
        to:'/base/E-wallet-Managment/Affiliated_Partners',
        icon:<CIcon icon={cilSnowflake} customClassName="nav-icon" />
      },
    ],
  }, 
  {
    component:CNavGroup,
    name:'Order History',
    to: '/base/Order_History',
    icon:<CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Order',
        to:'/base/Order_History/Order',
        icon:<CIcon icon={cilStorage} customClassName="nav-icon" />
      },
    ],
  },
  {
    component:CNavGroup,
    name:'Payout',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name:'Payout',
        to: '/base/Payout/Payout',
        icon:<CIcon icon={cilWallet} customClassName="nav-icon" />
      },
    ],
  },
  {
    component:CNavGroup,
    name:'Reports',
    to:'/base/Reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Customers',
        to:'/base/Reports/Client',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
      },  
      {
        component:CNavItem,
        name:'Merchants',
        to:'/base/Reports/Tradesman',
        icon: <CIcon icon={cilContact} customClassName="nav-icon" />
      },  
      {
        component:CNavItem,
        name:'Subscription Plan',
        to:'/base/Reports/Subscription_Plan',
        icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />
      }, 
      {
        component:CNavItem,
        name:'Inventory',
        to:'/base/Reports/Inventory',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />
      },  
      {
        component:CNavItem,
        name:'Orders',
        to:'/base/Reports/Orders',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />
      },  
      {
        component:CNavItem,
        name:'Affiliated Partner Commission',
        to:'/base/Reports/Affiliated_Partner_Commission',
        icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />
      }, 
      {
        component: CNavItem,
        name:'Loyalty Program',
        to :'/base/Reports/Loyalty_Program',
        icon:<CIcon icon={cibGovUk} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Notifications',
        to :'/base/Reports/Notifications',
        icon:<CIcon icon={cilBellExclamation} customClassName="nav-icon" />
      },   
      {
        component:CNavItem,
        name: 'Dispute Reason',
        to :'/base/Reports/Dispute_Reason',
        icon:<CIcon icon={cilMoodVeryBad} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Tickets',
        to :'/base/Reports/Tickets',
        icon:<CIcon icon={cilAudioDescription} customClassName="nav-icon" />
      }, 
    ],
  },
       
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />
  }
]
 export default nav
