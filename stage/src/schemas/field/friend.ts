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
      name: 'friendGift',
      title: 'Who is becoming a friend',
      type: 'string',
      options: {
        list: [
          'I would like to become a friend',
          'I would like to give as a gift'
        ],
        layout: 'radio',
        direction: 'vertical'
      }
    },
    {
      name: 'honorificPrefix',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'givenName',
      title: 'First name',
      type: 'string'
    },
    {
      name: 'familyName',
      title: 'Surname',
      type: 'string'
    },
    {
      name: 'friend',
      title: 'Joint friend\'s name',
      type: 'string'
    },
    {
      name: 'addressLine1',
      title: 'Address line 1',
      type: 'string'
    },
    {
      name: 'addressLine2',
      title: 'Address line 2',
      type: 'string'
    },
    {
      name: 'addressLine3',
      title: 'Address line 3',
      type: 'string'
    },
    {
      name: 'postalCode',
      title: 'Post code',
      type: 'string'
    },
    {
      name: 'tel',
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
      name: 'otherReason',
      title: 'Other reason',
      type: 'string'
    },
    {
      name: 'giftAid',
      title: 'Gift Aid',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      email: 'email',
      name: 'givenName',
      surname: 'familyName'
    },
    prepare: ({ email, name, surname }) => {
      return {
        title: `${name} ${surname}`,
        subtitle: email
      }
    }
  }
}
