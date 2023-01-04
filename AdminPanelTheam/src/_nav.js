import React from 'react';
import CIcon from '@coreui/icons-react'
import {
  cilBell,cilCalculator,cilChartPie,
  cilCursor,cilDescription,cilDrop,
  cilNotes,cilPuzzle,cilSpeedometer,
  cilStar,cilAppsSettings,cilGlobeAlt,
  cilLibraryBuilding,cilLifeRing,cilMoney,
  cilAssistiveListeningSystem,GiHumanPyramid,
  cilChevronBottom,cilDialpad,cilDollar,
  cilEuro,cilUser,cilSitemap,cilStorage,
  cilFastfood,cilMemory,cilContact,
  ccilInstitution,cilGroup,cibCashapp,
  cibPagekit,cilBalanceScale,cilFile,
  cilSpeaker,cilSnowflake,cilFax,
  cilBellExclamation, cilUserFemale,
  cilAudioDescription,cilWallet,cibBitcoin,
  cibGovUk,cilBuilding,cilFork,cilClipboard,
   cilCreditCard,cilListRich,cilList,
   cilMoodVeryBad,
} from '@coreui/icons'
  import{CNavGroup,CNavItem,CNavTitle}from'@coreui/react'
  // `import·{·CNavGroup,·CNavItem,·CNavTitle·}·from·`
  // import Globalsetting from './views/base/System_Setting/GlobalSetup';
  `import·Globalsetting·from·'./views/base/System_Setting/GlobalSetup'`
  const _nav = [
  {
    component:CNavItem,
    name:'Dashboard',
    to:'/dashboard',
    icon:<CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
    {
    component:CNavTitle,
    name:'Components',
    icon:<CIcon icon={cilMemory} customClassName="nav-icon" />
  },
  {
    component:CNavGroup,
    name:'Setting',
    to:'/Base/System_Setting/SystemSetting',
    icon:<CIcon icon={cilAppsSettings} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Global Setup',
        to:'/Base/System_Setting/GlobalSetup',
        icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Business Country',
        to:'/base/System_Setting/BusinessCoun',
        icon:<CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Business State',
        to:'/base/System_Setting/Business_State',
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
  {
    component:CNavGroup,
    name:'System Ref',
    to:'/base/SystemRefrence/SystemRef',
    icon:<CIcon icon={cilAssistiveListeningSystem} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Customers',
        to:'/base/SystemRefrence/Customers',
        icon:<CIcon icon={cilUser} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Affiliated Partners',
        to:'/base/SystemRefrence/Affiliated_Partners',
        icon:<CIcon icon={cilSitemap} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Marchant',
        to:'/base/SystemRefrence/Marchant',
        icon:<CIcon icon={cilContact} customClassName="nav-icon" />
      }, 
      {
        component:CNavItem,
        name:'Inventory Mangement',
        to:'/base/SystemRefrence/Inventory_Mangement',
        icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Merchant Category',
        to:'/base/SystemRefrence/MerchantCategory',
        icon:<CIcon icon={cilGroup} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Item Category',
        to:'/base/SystemRefrence/Item_Category',
        icon:<CIcon icon={cilStorage} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Item Catoulge',
        to:'/base/SystemRefrence/Item_Catoulge',
        icon:<CIcon icon={cilFastfood} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Subscription Plans',
        to:'/base/SystemRefrence/Subscription_Plans',
        icon:<CIcon icon={cibCashapp} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Promo Codes',
        to:'/base/SystemRefrence/Promo_Codes',
        icon:<CIcon icon={cibPagekit} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Notifications',
        to:'/base/SystemRefrence/Notifications',
        icon:<CIcon icon={cilBell} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Dispute Reasons',
        to:'/base/SystemRefrence/Dispute_Reasons',
        icon:<CIcon icon={cilBell} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Ticket',
        to:'/base/SystemRefrence/Ticket',
        icon:<CIcon icon={cilFile} customClassName="nav-icon" />
      },
    ],
  },
  {
    component:CNavGroup,
    name:'System Roles',
    icon:<CIcon icon={cilSpeaker} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'System Roles',
        to:'/base/System_Rolls/System_Roles',
        icon:<CIcon icon={ManageAccountsIcon} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Roles',
        to:'/base/System_Rolls/Roles',
        icon:<CIcon icon={cilRowing} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Affiliated Partners',
        to:'/base/System_Rolls/Affiliated_Partners',
        icon:<CIcon icon={cilSnowflake} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Operation Manager',
        to:'/base/System_Rolls/Operation_Manager',
        icon:<CIcon icon={cilFax} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name:'Account Manager',
        to:'/base/System_Rolls/Account_Manager',
        icon:<CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name:'Dispute Manager',
        to:'/base/System_Rolls/Dispute_Manager',
        icon:<CIcon icon={cilUserFemale} customClassName="nav-icon" />
      },
    ],
  },
  {
    component:CNavGroup,
    name:'E-wallet',
    icon:<CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'E-wallet',
        to:'/base/E-wallet_Management/E-wallet',
        icon:<CIcon icon={cilWallet} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Customer',
        to:'/base/E-wallet_Management/Customer',
        icon:<CIcon icon={cilUserPlus} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Merchants', 
        to:'/base/E-wallet_Management/Merchants',
        icon:<CIcon icon={cilBuilding} customClassName="nav-icon" />
      },
      {
        component:CNavItem,
        name:'Affiliated Partners',                         
        to:'/base/E-wallet_Management/Affiliated_Partners',
        icon:<CIcon icon={cilFork} customClassName="nav-icon" />
      },
    ],
  },
  {
    component:CNavGroup,
    name:'Order History',
    icon:<CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component:CNavItem,
        name:'Order History',
        to:'/base/Order_History/Order_History',
        icon:<CIcon icon={cilClipboard} customClassName="nav-icon" />
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
      icon:<CIcon icon={cilDollar} customClassName="nav-icon" />
    },
  ],
},
{
  component: CNavGroup,
  name: 'Reports',
  icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  items: [
    {
            component: CNavItem,
            name:'Reports',
            to :'/base/Reports/Reports',
            icon:<CIcon icon={cilStar} customClassName="nav-icon" />
    },
    {
            component: CNavItem,
            name:'Customers',
             to :'/base/Reports/Customers',
             icon:<CIcon icon={cilWc} customClassName="nav-icon" />
   },  
   {
       component: CNavItem,
         name:'Merchants',
          to :'/base/Reports/Merchants',
          icon:<CIcon icon={cilContact} customClassName="nav-icon" />
    },     
    {
            component: CNavItem,
            name:'Subscription Plans',
            to :'/base/Reports/Subscription_Plans',
            icon:<CIcon icon={cilCreditCard} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name:'Inventory',
            to :'/base/Reports/Inventory',
            icon:<CIcon icon={cilListRich} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name:'Orders',
            to :'/base/Reports/Orders',
            icon:<CIcon icon={cilList} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name:'Affiliated Partner Commission',
            to :'/base/Reports/Affiliated Partner Commission',
            icon:<CIcon icon={cibBitcoin} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name:'Loyalty Program',
            to :'/base/Reports/Loyalty Program',
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
            name: 'Dispute reasons',
            to :'/base/Reports/Dispute reasons',
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
    component: CNavTitle,
    name: 'Extras',
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
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav;
