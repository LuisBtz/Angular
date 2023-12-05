export default {
    name: 'aproachItem',
    title: 'Approach Item',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'blockModule'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
    
}