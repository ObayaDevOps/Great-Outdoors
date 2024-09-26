import { PackageIcon } from '@sanity/icons'
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
  name: 'landingPage',
  title: 'Landing Page',
  icon: PackageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    //About Us
    defineField({
      name: 'aboutUsTitle',
      title: 'About Us Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutUsParagraph1',
      title: 'About Us Paragraph 1',
      type: 'string',
    }),
    defineField({
      name: 'aboutUsParagraph2',
      title: 'About Us Paragraph 2',
      type: 'string',
    }),
    defineField({
        name: 'aboutUsButtonText',
        title: 'About Us Button Text',
        type: 'string',
      }),      
    defineField({
        name: 'aboutUsBackgroundImage',
        title: 'About Us Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

    //EatAndDrink
    defineField({
      name: 'eatAndDrinkTitle',
      title: 'EatAndDrink Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eatAndDrinkParagraph1',
      title: 'EatAndDrink Paragraph 1',
      type: 'string',
    }),
    defineField({
      name: 'eatAndDrinkParagraph2',
      title: 'EatAndDrink Paragraph 2',
      type: 'string',
    }),
    defineField({
        name: 'eatAndDrinkButtonText',
        title: 'EatAndDrink Button Text',
        type: 'string',
      }),      
    defineField({
        name: 'eatAndDrinkBackgroundImage',
        title: 'EatAndDrink Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

      //Amenities
    defineField({
      name: 'amenitiesTitle',
      title: 'Amenities Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

//TheForest
defineField({
  name: 'forestTitle',
  title: 'Forest Title',
  type: 'string',
  validation: (rule) => rule.required(),
}),
defineField({
  name: 'forestParagraph1',
  title: 'Forest Paragraph 1',
  type: 'string',
}),
defineField({
  name: 'forestParagraph2',
  title: 'Forest Paragraph 2',
  type: 'string',
}),
defineField({
    name: 'forestButtonText',
    title: 'Forest Button Text',
    type: 'string',
  }),      
defineField({
    name: 'forestBackgroundImage',
    title: 'Forest Background Image',
    type: 'image',
    options: {
      hotspot: true,
    },
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
