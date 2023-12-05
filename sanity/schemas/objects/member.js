export default {
    name: 'member',
    title: 'Member',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'empty',
            title: 'Empty',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'position',
            media: 'image'
        }
    }
}