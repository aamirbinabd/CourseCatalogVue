export default {
  name: 'courseCatalog',
  title: 'Course Catalog',
  type: 'document',
  fields: [
    {name: 'domain', type: 'string', title: 'Domain Name'},
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) =>
        Rule.max(500).warning('A description should not be more than 500 characters.'),
    },
    {
      name: 'courses',
      type: 'array',
      title: 'Courses',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Unified Course', value: 'Unified Course'},
                  {title: 'Essential Course', value: 'Essential Course'},
                  {title: 'Specialist Course', value: 'Specialist Course'},
                  {title: 'Master Course', value: 'Master Course'},
                ],
                layout: 'dropdown',
              },
            },
            {name: 'title', type: 'string'},
            {name: 'duration', type: 'string'},
            {
              name: 'location',
              type: 'string',
              options: {
                list: [
                  {title: 'Online', value: 'Online'},
                  {title: 'On Campus', value: 'On Campus'},
                  {title: 'Hybrid', value: 'Hybrid'},
                ],
                layout: 'dropdown',
              },
            },

            {name: 'includedCourses', type: 'array', of: [{type: 'string'}]},
            {name: 'description', type: 'text', title: 'Course Description'},
            {
              name: 'popularity',
              type: 'number',
              title: 'Popularity Rating',
              options: {
                list: [
                  {title: '1', value: 1},
                  {title: '2', value: 2},
                  {title: '3', value: 3},
                  {title: '4', value: 4},
                  {title: '5', value: 5},
                ],
                layout: 'radio',
              },
            },
            {
              name: 'whatYouLearn',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'description', type: 'string'},
                    {name: 'coreConcepts', type: 'array', of: [{type: 'string'}]},
                  ],
                },
              ],
            },
            {
              name: 'whatYouBecome',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'description', type: 'string'},
                    {name: 'jobTitles', type: 'array', of: [{type: 'string'}]},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
