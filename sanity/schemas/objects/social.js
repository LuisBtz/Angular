export default {
    name: 'social',
    title: 'Social',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'url'
        }
    }
}