export default {
    //
    name: 'aboutPage',
    title: 'About page',
    type: 'document',
    icon: () => '🏡',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'mainText',
            title: 'Main text',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
                {
                    name: 'service',
                    title: 'Services',
                    type: 'service'
                }
            ]
        },
        {
            name: 'ourServicesDescription',
            title: 'Our Services Description',
            type: 'text'
        },
        {
            name: 'ourApproach',
            title: 'Our Approach',
            type: 'array',
            of: [
                {
                    name: 'aproachItem',
                    title: 'Approach Item',
                    type: 'aproachItem'
                }
            ]
        },
        {
            name: 'teamDescription',
            title: 'Team description',
            type: 'text'
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    name: 'member',
                    title: 'Member',
                    type: 'member'
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}