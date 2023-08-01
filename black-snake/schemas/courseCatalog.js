export default {
  name: 'course',
  title: 'Course Catalog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Unified Course', value: 'Unified Course'},
          {title: 'Essential Course', value: 'Essential Course'},
        ],
      },
    },
    {
      name: 'domainName',
      title: 'Domain Name',
      type: 'string',
    },
    {
      name: 'domainDescription',
      title: 'Domain Description',
      type: 'text',
    },

    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          {title: 'On Campus', value: 'On Campus'},
          {title: 'Online', value: 'Online'},
          // add more locations here...
        ],
      },
    },
    {
      name: 'includedCourses',
      title: 'Included Courses',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
    },
    {
      name: 'whatYouLearn',
      title: 'What You Learn',
      type: 'text',
    },
    {
      name: 'coreConcepts',
      title: 'Core Concepts',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'whatYouBecome',
      title: 'What You Become',
      type: 'text',
    },
    {
      name: 'jobTitles',
      title: 'Job Titles',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
