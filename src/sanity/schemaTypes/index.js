import landingPage from './landingPageSchema'
import retreatPage from './retreatPageSchema'
import galleryPage from './galleryPageSchema'

import doubleCottagePage from './rest/doubleCottagePageSchema'

import deluxeRoomPage from './rest/deluxeRoomPageSchema'
import cottagePage from './rest/cottagePageSchema'
import cabinPage from './rest/cabinPageSchema'

import rejuvenatePage from './rejuvenate/rejuvenatePageSchema'
import foodPage from './rejuvenate/foodPageSchema'



export const schema = {
  types: [landingPage, retreatPage,galleryPage, doubleCottagePage, 
          deluxeRoomPage, cottagePage, cabinPage, rejuvenatePage, foodPage
         ],
}
