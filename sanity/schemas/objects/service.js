export default {
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
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
            subtitle: 'description'
        }
    }
}