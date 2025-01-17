import landingPage from './landingPageSchema'
import retreatPage from './retreatPageSchema'
import galleryPage from './galleryPageSchema'


import cabinPage from './rest/cabinPageSchema'
import deluxeRoomPage from './rest/deluxeRoomPageSchema'
import deluxeTwin from './rest/deluxeTwinRoomPageSchema'
import cottagePage from './rest/cottagePageSchema'
import doubleCottagePage from './rest/doubleCottagePageSchema'

import rejuvenatePage from './rejuvenate/rejuvenatePageSchema'
import foodPage from './rejuvenate/foodPageSchema'



export const schema = {
  types: [landingPage, retreatPage,galleryPage, doubleCottagePage, 
          deluxeRoomPage, cottagePage, cabinPage,deluxeTwin, rejuvenatePage, foodPage
         ],
}
