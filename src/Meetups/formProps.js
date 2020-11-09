const validators = ['is-not-empty'];

export default [
  {
    label: 'Title',
    id: 'title',
    validators
  },
  {
    label: 'Subtitle',
    id: 'subtitle',
    validators
  },
  {
    label: 'Description',
    id: 'description',
    validators,
    type: 'textarea'
  },
  {
    label: 'Image Url',
    id: 'imageUrl',
    validators
  },
  {
    label: 'Address',
    id: 'address',
    validators
  },
  {
    label: 'Contact Email',
    id: 'contactEmail',
    validators: ['is-valid-email'],
    type: 'email'
  }
];