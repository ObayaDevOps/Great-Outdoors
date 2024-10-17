import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType, defineConfig } from 'sanity'
// import { muxInput } from 'sanity-plugin-mux-input'

/**
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */



export default defineType({
  name: 'cabinPage',
  title: 'Cabin Page',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    //Top Section
    defineField({
      name: 'roomTitle1',
      title: 'Room Title1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roomSubTitle1',
      title: 'Room SubTitle1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    //Images
    defineField({
      name: 'images',
      title: 'Cabin Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'roomTitle2',
      title: 'Room Title2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceSubtitle',
      title: 'Price Subtitle',
      type: 'string',
    }),


    defineField({
      name: 'paragraph1',
      title: 'SummaryParagraph 1',
      type: 'text',
    }),
    defineField({
      name: 'paragraph2',
      title: 'SummaryParagraph 2',
      type: 'text',
    }),
    defineField({
      name: 'paragraph3',
      title: 'SummaryParagraph 3',
      type: 'text',
    }),


    //Amenities
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Balcony or Terrace', value: 'balcony' },
          { title: 'Evening Tea Service', value: 'tea' },
          { title: 'Shower', value: 'shower' },
          { title: 'King Size Bed', value: 'kingBed' },
          { title: 'Wifi', value: 'wifi' },
        ],
      },
    }),
      

    defineField({
        name: 'houseRules',
        title: 'House Rules',
        type: 'object',
        fields: [
          {
            name: 'checkIn',
            title: 'Check-in Times',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'checkOut',
            title: 'Check-out Times',
            type: 'array',
            of: [{ type: 'string' }],
          },
        ],
      }),

    defineField({
      name: 'specialInstructions',
      title: 'Special Check-in Instructions',
      type: 'text',
    }),
    defineField({
      name: 'childrenAndExtraBeds',
      title: 'Children and Extra Beds Policy',
      type: 'text',
    }),
    defineField({
      name: 'petPolicy',
      title: 'Pet Policy',
      type: 'string',
    }),
    defineField({
      name: 'cancellationPolicy',
      title: 'Cancellation Policy',
      type: 'text',
    }),


  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
