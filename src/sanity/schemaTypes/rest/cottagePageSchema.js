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
  name: 'cottagePage',
  title: 'Cottage Page',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
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
