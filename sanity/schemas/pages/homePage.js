export default {
    //
    name: 'homePage',
    title: 'Home page',
    type: 'document',
    icon: () => '🏡',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}