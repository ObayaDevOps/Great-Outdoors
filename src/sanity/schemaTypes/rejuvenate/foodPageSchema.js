import { LemonIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'foodPage',
  title: 'Food Page',
  icon: LemonIcon,
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'FARM TO PLATE'
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Restaurant'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Freshly prepared meals enjoyed in open air spaces.'
        })
      ]
    }),

    // Main Content
    defineField({
      name: 'mainContent',
      title: 'Main Content',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'FARM TO PLATE'
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Freshly prepared meals enjoyed in open air spaces.'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'openingHours',
          title: 'Opening Hours',
          type: 'string'
        }),
        defineField({
          name: 'openingDays',
          title: 'Opening Days',
          type: 'string'
        })
      ]
    }),

    // Food Cards
    defineField({
      name: 'foodCards',
      title: 'Food Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            })
          ]
        }
      ]
    }),

    // Menu Sections
    defineField({
      name: 'menuSections',
      title: 'Menu Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string'
            }),
            defineField({
              name: 'items',
              title: 'Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Item Name',
                      type: 'string'
                    }),
                    defineField({
                      name: 'price',
                      title: 'Price',
                      type: 'string'
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text'
                    })
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),

    // SEO Fields
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Restaurant | Great Outdoors'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Retreat.Rest.Rejuvenate'
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    })
  ],

  preview: {
    select: {
      title: 'heroSection.title'
    },
    prepare({ title }) {
      return {
        title: title || 'Restaurant Page'
      }
    }
  }
})
