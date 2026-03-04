import { EarthGlobeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Great Outdoors Site Settings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryLogo',
      title: 'Primary Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'lightLogo',
      title: 'Light/White Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'legacyAssetMappings',
      title: 'Legacy Asset Mappings',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'legacyUrl',
              title: 'Legacy Cloudinary URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'publicId',
              title: 'Cloudinary Public ID',
              type: 'string',
            }),
            defineField({
              name: 'mappedAsset',
              title: 'Mapped Sanity Asset',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'routeOrComponent',
              title: 'Route/Component',
              type: 'string',
            }),
            defineField({
              name: 'targetDocumentType',
              title: 'Target Document Type',
              type: 'string',
            }),
            defineField({
              name: 'targetDocumentId',
              title: 'Target Document ID',
              type: 'string',
            }),
            defineField({
              name: 'targetFieldPath',
              title: 'Target Field Path',
              type: 'string',
            }),
            defineField({
              name: 'sourceFile',
              title: 'Source File',
              type: 'string',
            }),
            defineField({
              name: 'sourceLine',
              title: 'Source Line',
              type: 'number',
            }),
            defineField({
              name: 'notes',
              title: 'Notes',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'publicId',
              subtitle: 'legacyUrl',
              media: 'mappedAsset',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'primaryLogo',
    },
  },
})
