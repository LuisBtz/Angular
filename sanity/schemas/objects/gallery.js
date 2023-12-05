export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'object',
    fields: [
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    },
                  ],
                },
              ],
              options: {
                layout: 'grid',
              },
        }
    ]
    
    
  }