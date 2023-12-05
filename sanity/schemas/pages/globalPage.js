export default {
    //
    name: 'globalPage',
    title: 'Global page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'logoSVGCode',
            title: 'Logo svg code',
            type: 'text'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string'
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    name: 'social',
                    title: 'Social',
                    type: 'social'
                }
            ]
        },


    ],
}