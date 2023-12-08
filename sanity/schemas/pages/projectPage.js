import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

  

export default {
    //
    name: 'projectPage',
    title: 'Projects',
    type: 'document',
    icon: () => '📝',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'architecture', hidden: true }),
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'imageType'
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockModule'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{type: 'categoryPage'}]
              }
            ]
          },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'imageType'
                },
                {
                    type: 'textObject'
                }
            ]
        },
        {
            name: 'relatedContent',
            title: 'Related Content',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{type: 'projectPage'}]
              }
            ]
          },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'featuredImage'
        }
    }
}