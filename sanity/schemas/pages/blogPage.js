import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

  

export default {
    //
    name: 'blogPage',
    title: 'Blog Posts',
    type: 'document',
    icon: () => '📚',
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
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                {
                    type: 'blogCategories'
                }
            ]
        },

        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [
                {
                    type: 'authorPage'
                }
            ]
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
            name: 'link',
            title: 'Link',
            type: 'url'
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