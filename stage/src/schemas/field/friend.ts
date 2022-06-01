import { Dolls } from '../../components/twemoji'

export default {
  name: 'friend',
  title: 'Friend',
  type: 'document',
  icon: Dolls,
  fields: [
    {
      name: 'processed',
      title: 'Applicant contacted',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'person',
      title: 'Who is becoming a friend',
      type: 'string',
      options: {
        list: [
          'I would like to become a friend',
          'I would like to give the perfect gift of becoming a friend on Mid Wales Arts'
        ],
        layout: 'radio',
        direction: 'vertical'
      }
    },
    {
      name: 'name',
      title: 'First name',
      type: 'string'
    },
    {
      name: 'surname',
      title: 'Surname',
      type: 'string'
    },
    {
      name: 'friendName',
      title: 'Joint friend\'s name',
      type: 'string'
    },
    {
      name: 'address1',
      title: 'Address line 1',
      type: 'string'
    },
    {
      name: 'address2',
      title: 'Address line 2',
      type: 'string'
    },
    {
      name: 'county',
      title: 'County',
      type: 'string'
    },
    {
      name: 'postcode',
      title: 'Post code',
      type: 'string'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'email'
    },
    {
      name: 'message',
      title: 'If a gift, message to recipient',
      type: 'text',
      rows: 3
    },
    {
      name: 'reason',
      title: 'Reasons for joining',
      type: 'string',
      options: {
        list: [
          'To support Mid Wales Arts',
          'To be invited to openings',
          'To meet fellow art lovers',
          'To learn more about art',
          'Other, please state...'
        ],
        layout: 'radio',
        direction: 'vertical'
      }
    },
    {
      name: 'other',
      title: 'Other reason',
      type: 'string'
    },
    {
      name: 'giftaid',
      title: 'Gift Aid',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      email: 'email',
      name: 'name',
      surname: 'surname'
    },
    prepare: ({ email, name, surname }) => {
      return {
        title: `${name} ${surname}`,
        subtitle: email
      }
    }
  }
}
