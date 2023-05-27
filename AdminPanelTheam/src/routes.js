import { element } from 'prop-types';
import React from 'react';
import UpdateDisputeManager from './views/base/System_Roles/UpdateDisputeManager';






const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))
const Charts = React.lazy(() => import('./views/charts/Charts'))


//************************System Settings*********************//
const BusinessCountry = React.lazy(() => import('./views/base/System_Setting/BusinessCoun'))
const AddBusinessCountry = React.lazy(() => import('./views/base/System_Setting/AddBusinessCountry'))
const AddBusinessState = React.lazy(() => import('./views/base/System_Setting/AddBusinessState'))
const BusinessState = React.lazy(() => import('./views/base/System_Setting/BusinessState'))
const GlobalSetup = React.lazy(() => import('./views/base/System_Setting/GlobalSetup'))
const Tax = React.lazy(() => import('./views/base/System_Setting/Tax'))
const AddCountryTax = React.lazy(() => import('./views/base/System_Setting/AddCountryTax'))

//***********************************SystemSetting 2 ************///
const General = React.lazy(() => import('./views/base/System_Setting/General'))
const CompanyProfileLink= React.lazy(() => import('./views/base/System_Setting/CompanyProfileLink'))
const SocialLinkConfig= React.lazy(() => import('./views/base/System_Setting/SocialLinkConfig'))
const MapAndSmsConfig= React.lazy(() => import('./views/base/System_Setting/MapAndSmsConfig'))
const MailConfig= React.lazy(() => import('./views/base/System_Setting/MailConfig'))
const PushNotificationConfig= React.lazy(() => import('./views/base/System_Setting/PushNotificationConfig'))
const PaymentSetting= React.lazy(() => import('./views/base/System_Setting/PaymentSetting'))

//******************************System Reference************************//

const Customer = React.lazy(()=> import('./views/base/SystemReference/Customer'))
const CreateCustomer = React.lazy(()=> import('./views/base/SystemReference/CreateCustomer'))
const AffiliatedPartners = React.lazy(()=> import('./views/base/SystemReference/AffiliatedPartners'))
const CreateAffiliatedPartners = React.lazy(()=> import('./views/base/SystemReference/CreateAffiliatedPartners'))
const Updatepartners  = React.lazy(()=>import('./views/base/SystemReference/Updatepartners'))
const UpdatePromoCode  = React.lazy(()=>import('./views/base/SystemReference/UpdatePromoCode'))
const UpdateItemCategory  = React.lazy(()=>import('./views/base/SystemReference/UpdateItemCategory'))
const UpdateCustomer  = React.lazy(()=>import('./views/base/SystemReference/UpdateCustomer'))
const UpdateMerchants  = React.lazy(()=>import('./views/base/SystemReference/UpdateMerchants'))
const UpdateCreateCategory  = React.lazy(()=>import('./views/base/SystemReference/UpdateCreateCategory'))
const UpdateItemCatalogue  = React.lazy(()=>import('./views/base/SystemReference/UpdateItemCatalogue'))
const UpdateSubsPlan  = React.lazy(()=>import('./views/base/SystemReference/UpdateSubsPlan'))
const DisputeReasons = React.lazy(()=>import('./views/base/SystemReference/DisputeReasons'))
const DisputeCategory = React.lazy(()=>import('./views/base/SystemReference/DisputeCategory'))
const InventoryManagment = React.lazy(()=>import('./views/base/SystemReference/InventoryManagment'))
const ItemCategory = React.lazy(() => import('./views/base/SystemReference/ItemCategory'))
const CreateItemCategory = React.lazy(() => import('./views/base/SystemReference/CreateItemCategory'))
const ItemCatalogue = React.lazy(() => import('./views/base/SystemReference/ItemCatalogue'))
const CatalogueCategory = React.lazy(() => import('./views/base/SystemReference/CatalogueCategory'))
const Merchants = React.lazy(() => import('./views/base/SystemReference/Merchants'))
const CreateMerchants = React.lazy(() => import('./views/base/SystemReference/CreateMerchants'))
const MerchantCategory = React.lazy(() => import('./views/base/SystemReference/MerchantCategory'))
const CreateCategory = React.lazy(() => import('./views/base/SystemReference/CreateCategory'))
const Notification = React.lazy(() => import('./views/base/SystemReference/Notification'))
const CreateNotification = React.lazy(() => import('./views/base/SystemReference/CreateNotification'))
const PromoCodes = React.lazy(() => import('./views/base/SystemReference/PromoCodes'))
const CreatePromoCode = React.lazy(() => import('./views/base/SystemReference/CreatePromoCode'))
const Subscription_Plans = React.lazy(() => import('./views/base/SystemReference/Subscription_Plans'))
const CreateSubscriptionCategory= React.lazy(() => import('./views/base/SystemReference/CreateSubscriptionCategory'))
const Ticket = React.lazy(() => import('./views/base/SystemReference/Ticket'))
const CreateTicket = React.lazy(() => import('./views/base/SystemReference/CreateTicket'))

//******************System_ROlls****************/
const UpdateAccountManager = React.lazy(()=>import('./views/base/System_Roles/UpdateAccountManager'))
const UpdateAffil  = React.lazy(()=>import('./views/base/System_Roles/UpdateAffil'))
const AccountManager = React.lazy(()=>import('./views/base/System_Roles/AccountManager'))
const AffiliatedPartner = React.lazy(()=>import('./views/base/System_Roles/AffiliatedPartner'))
const DisputeManager = React.lazy(()=>import('./views/base/System_Roles/DisputeManager'))
const OperationManager = React.lazy(()=>import('./views/base/System_Roles/OperationManager'))
const CreateAffiliatedPartner  = React.lazy(()=> import('./views/base/System_Roles/CreateAffiliatedPartner'))
const CreateOperationManager  = React.lazy(()=> import('./views/base/System_Roles/CreateOperationManager'))
const CreateAccountManager  = React.lazy(()=> import('./views/base/System_Roles/CreateAccountManager'))
const CreateDisputeManager  = React.lazy(()=> import('./views/base/System_Roles/CreateDisputeManager'))
const UpdateOperationManager  = React.lazy(()=> import('./views/base/System_Roles/UpdateOperationManager'))

//**************************E-wallet-Managment********************************/
const CreateAffiliated_Partner = React.lazy(()=> import('./views/base/E-wallet-Managment/CreateAffiliated_Partner'))
const CreateCustomers = React.lazy(()=> import('./views/base/E-wallet-Managment/CreateCustomers'))
const Customers = React.lazy(()=> import('./views/base/E-wallet-Managment/Customers'))
const Affiliated_Partners = React.lazy(()=> import('./views/base/E-wallet-Managment/Affiliated_Partners'))
const Merchant = React.lazy(()=> import('./views/base/E-wallet-Managment/Merchant'))
const CreateMerchant = React.lazy(()=> import('./views/base/E-wallet-Managment/CreateMerchant'))
const UpdateAffiliated_Partner = React.lazy(()=> import('./views/base/E-wallet-Managment/UpdateAffiliated_Partner'))
const UpdateCustomers = React.lazy(()=> import('./views/base/E-wallet-Managment/UpdateCustomers'))
const UpdateMerchant = React.lazy(()=> import('./views/base/E-wallet-Managment/UpdateMerchant'))

//**************************Order-History********************************/
const Order = React.lazy(()=> import('./views/base/Order_History/Order'))

//***********************Payout*****************************************/

const Payout = React.lazy(()=>import('./views/base/Payout/Payout'))

//*******************************Reports******************************/

const Client = React.lazy(()=>import('./views/base/Reports/Client'))
const Tradesman = React.lazy(()=>import('./views/base/Reports/Tradesman'))
const Subscription_Plan = React.lazy(()=>import('./views/base/Reports/Subscription_Plan'))
const Inventory = React.lazy(()=>import('./views/base/Reports/Inventory'))
const Orders = React.lazy(()=>import('./views/base/Reports/Orders'))
const Affiliated_Partner_Commission = React.lazy(()=>import('./views/base/Reports/Affiliated_Partner_Commission'))
const Loyalty_Program = React.lazy(()=>import('./views/base/Reports/Loyalty_Program'))
const Notifications = React.lazy(()=>import('./views/base/Reports/Notifications'))
const Dispute_Reason = React.lazy(()=>import('./views/base/Reports/Dispute_Reason'))
const Tickets = React.lazy(()=>import('./views/base/Reports/Tickets'))

// Icons

const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  //******************************system_Setting path****************************/
  { path: '/base/System_Setting/GlobalSetup', name: 'Global Setup', element: GlobalSetup },
  { path: '/base/System_Setting/BusinessCoun', name: 'Business Country', element: BusinessCountry },
  { path: '/base/System_Setting/AddBusinessCountry', name: 'Add Business Country', element: AddBusinessCountry },
  { path: '/base/System_Setting/AddBusinessState', name: 'Add-Business-States', element: AddBusinessState },
  { path: '/base/System_Setting/AddCountryTax', name: 'Add Country Tax', element: AddCountryTax },
  { path: '/base/System_Setting/BusinessState', name: 'Business State', element: BusinessState },
  { path: '/base/System_Setting/Tax', name: 'Tax', element: Tax },

  //************************************SystemSetting******************************/
  { path: '/base/System_Setting/General', name: 'General', element: General },
  { path: '/base/System_Setting/CompanyProfileLink', name: 'Company Profile Link', element: CompanyProfileLink },
  { path: '/base/System_Setting/SocialLinkConfig', name: 'Social Link Config', element: SocialLinkConfig },
  { path: '/base/System_Setting/MapAndSmsConfig', name: 'Map And Sms Config', element: MapAndSmsConfig },
  { path: '/base/System_Setting/MailConfig', name: 'Mail Config', element: MailConfig },
  { path: '/base/System_Setting/PushNotificationConfig', name: 'Push Notification Config', element: PushNotificationConfig },
  { path: '/base/System_Setting/PaymentSetting', name: 'Payment Setting', element: PaymentSetting },

  // //**********************************/ System_Reference//**************************** */
  { path:'/base/SystemReference/Customer', name :'Customer', element: Customer },
  {path:'/base/SystemReference/Updatepartners/:id', name:'Update' ,element : Updatepartners},
  {path:'/base/SystemReference/UpdateSubsPlan/:id', name:'Update' ,element : UpdateSubsPlan},
  {path:'/base/SystemReference/UpdatePromoCode/:id', name:'Update' ,element : UpdatePromoCode},
  {path:'/base/SystemReference/UpdateItemCategory/:id', name:'Update' ,element : UpdateItemCategory},
  {path:'/base/SystemReference/UpdateCustomer/:id', name:'Update' ,element : UpdateCustomer},
  {path:'/base/SystemReference/UpdateMerchants/:id', name:'Update' ,element : UpdateMerchants},
  {path:'/base/SystemReference/UpdateItemCatalogue/:id', name:'Update' ,element : UpdateItemCatalogue},
  {path:'/base/SystemReference/UpdateCreateCategory/:id', name:'Update' ,element : UpdateCreateCategory},
  { path:'/base/SystemReference/CreateCustomer', name :'Create Customer', element: CreateCustomer },
  { path:'/base/SystemReference/AffiliatedPartners', name :'Affiliated Partners', element: AffiliatedPartners },
  { path:'/base/SystemReference/CreateAffiliatedPartners', name :'Create Affiliated Partners', element: CreateAffiliatedPartners },
  { path:'/base/SystemReference/DisputeReasons', name : 'Dispute Reasons', element: DisputeReasons},
  { path:'/base/SystemReference/DisputeCategory', name : 'Create Category', element: DisputeCategory},
  { path:'/base/SystemReference/InventoryManagment', name : 'Inventory Managment', element : InventoryManagment},
  { path:'/base/SystemReference/ItemCategory', name: 'Item Category', element: ItemCategory },
  { path:'/base/SystemReference/CreateItemCategory', name: 'Create Item Category', element: CreateItemCategory },
  { path:'/base/SystemReference/ItemCatalogue', name: 'Item Catalogue', element: ItemCatalogue },
  { path:'/base/SystemReference/CatalogueCategory', name: 'Create Category', element: CatalogueCategory },
  { path:'/base/SystemReference/Merchants', name: 'Merchants', element: Merchants },
  { path:'/base/SystemReference/CreateMerchants', name: 'Create Merchants', element: CreateMerchants },
  { path:'/base/SystemReference/MerchantCategory', name: 'Merchant Category', element: MerchantCategory },
  { path:'/base/SystemReference/CreateCategory', name: 'Create Category ', element: CreateCategory  },
  { path:'/base/SystemReference/Notification', name: 'Notification', element: Notification },
  { path:'/base/SystemReference/CreateNotification', name: 'Create Notification', element: CreateNotification },
  { path:'/base/SystemReference/PromoCodes', name: 'Promo Codes', element: PromoCodes },
  { path:'/base/SystemReference/CreatePromoCode', name: 'Create Promo Code', element:CreatePromoCode },
  { path:'/base/SystemReference/Subscription_Plans', name: 'Subscription Plans', element:  Subscription_Plans },
  { path:'/base/SystemReference/CreateSubscriptionCategory', name: 'Create Category', element:  CreateSubscriptionCategory },
  { path:'/base/SystemReference/Ticket', name: 'Ticket', element: Ticket },
  { path:'/base/SystemReference/CreateTicket', name: 'Create Ticket', element: CreateTicket},

  //******************************System_Roless*************************************/
  { path:'/base/System_Roles/CreateOperationManager', name: 'Account Manager', element:CreateOperationManager},
  { path:'/base/System_Roles/CreateDisputeManager', name: 'Account Manager', element:CreateDisputeManager}, 
  { path:'/base/System_Roles/CreateAccountManager', name: 'Account Manager', element:CreateAccountManager},
  { path:'/base/System_Roles/AccountManager', name: 'Account Manager', element:AccountManager},
  { path:'/base/System_Roles/AffiliatedPartner', name: 'Affiliated Partner', element:AffiliatedPartner},
  { path:'/base/System_Roles/CreateAffiliatedPartner', name: 'Affiliated Partner', element:CreateAffiliatedPartner},
  { path:'/base/System_Roles/OperationManager', name: 'Operation Manager', element:OperationManager},
  { path:'/base/System_Roles/DisputeManager', name: 'Dispute Manager', element:DisputeManager},
  {path:'/base/System_Roles/UpdateAffil/:id', name:'Update' ,element : UpdateAffil},
  {path:'/base/System_Roles/UpdateAccountManager/:id', name:'Update' ,element : UpdateAccountManager},
  {path:'/base/System_Roles/UpdateDisputeManager/:id', name:'Update' ,element : UpdateDisputeManager},
  {path:'/base/System_Roles/UpdateOperationManager/:id', name:'Update' ,element : UpdateOperationManager},

//******************************E-wallet_Management*************************/
{path:'/base/E-wallet-Managment/CreateAffiliated_Partner', name:'Affiliated Partners' ,element : CreateAffiliated_Partner},
{path:'/base/E-wallet-Managment/CreateCustomers', name:'Affiliated Partners' ,element : CreateCustomers},
{path:'/base/E-wallet-Managment/CreateMerchant', name:'Affiliated Partners' ,element : CreateMerchant},
  { path:'/base/E-wallet-Managment/Customers', name: 'Customers', element: Customers},
  { path:'/base/E-wallet-Managment/Affiliated_Partners', name: 'Affiliated Partners', element: Affiliated_Partners},
  { path:'/base/E-wallet-Managment/Merchant', name: 'Merchant', element: Merchant},
  {path:'/base/E-wallet-Managment/UpdateAffiliated_Partner/:id', name:'Update' ,element : UpdateAffiliated_Partner},
  {path:'/base/E-wallet-Managment/UpdateCustomers/:id', name:'Update' ,element : UpdateCustomers},
  {path:'/base/E-wallet-Managment/UpdateMerchant/:id', name:'Update' ,element : UpdateMerchant},
  //******************************Ordere_HIstory**************************/

  { path:'/base/Order_History/Order', name:'Order', element: Order},

  //*****************************PayOut***************************/
  { path:'/base/Payout/Payout', name:'Payout', element: Payout},

  //*****************************Reports***************************/
  { path:'/base/Reports/Client', name:'Client', element: Client},
  { path:'/base/Reports/Tradesman', name:'Marchants', element: Tradesman},
  { path:'/base/Reports/Subscription_Plan', name:'Subscription Plan', element: Subscription_Plan},
  { path:'/base/Reports/Inventory', name:'Inventory', element: Inventory},
  { path:'/base/Reports/Orders', name:'Orders', element: Orders},
  { path:'/base/Reports/Affiliated_Partner_Commission', name:'Affiliated Partner Commission', element: Affiliated_Partner_Commission},
  { path:'/base/Reports/Loyalty_Program', name:'Loyalty Program', element: Loyalty_Program},
  { path:'/base/Reports/Notifications', name:'Notifications', element: Notifications},
  { path:'/base/Reports/Dispute_Reason', name:'Dispute Reason', element: Dispute_Reason},
  { path:'/base/Reports/Tickets', name:'Tickets', element: Tickets},
 
]

export default routes
