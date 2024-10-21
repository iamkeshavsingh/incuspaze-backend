import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTitle extends Schema.Component {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SharedSocialMedia extends Schema.Component {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Media';
    description: '';
  };
  attributes: {
    media: Attribute.Component<'shared.icon-title', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedImageTitle extends Schema.Component {
  collectionName: 'components_shared_image_titles';
  info: {
    displayName: 'ImageTitle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_url: Attribute.Text;
  };
}

export interface SharedIconTitle extends Schema.Component {
  collectionName: 'components_shared_icon_titles';
  info: {
    displayName: 'IconTitle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link_url: Attribute.String;
    image_url: Attribute.Text;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedContent extends Schema.Component {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    cta_text: Attribute.String;
    cta_url: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'shared.content'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    buttons: Attribute.Component<'shared.button', true>;
    image_url: Attribute.Text;
  };
}

export interface SectionsRepetableCards extends Schema.Component {
  collectionName: 'components_sections_repetable_cards';
  info: {
    displayName: 'Repetable Cards';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'shared.content'>;
    cards: Attribute.Component<'sections.basic-card', true>;
  };
}

export interface SectionsLists extends Schema.Component {
  collectionName: 'components_sections_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    list: Attribute.Component<'shared.title', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'shared.content'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'shared.button', true>;
    image_url: Attribute.Text;
  };
}

export interface SectionsGallery extends Schema.Component {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    content: Attribute.Component<'shared.content'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SectionsFaQs extends Schema.Component {
  collectionName: 'components_sections_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    content: Attribute.Component<'shared.content'>;
    faqs: Attribute.Component<'shared.faq', true>;
  };
}

export interface SectionsCertifications extends Schema.Component {
  collectionName: 'components_sections_certifications';
  info: {
    displayName: 'Certifications';
  };
  attributes: {
    certificate: Attribute.Component<'shared.image-title', true>;
  };
}

export interface SectionsBasicCard extends Schema.Component {
  collectionName: 'components_sections_basic_cards';
  info: {
    displayName: 'Basic Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    activeImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    content: Attribute.Text;
    cta_text: Attribute.String;
    cta_url: Attribute.String;
    image_url: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.title': SharedTitle;
      'shared.social-media': SharedSocialMedia;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'shared.image-title': SharedImageTitle;
      'shared.icon-title': SharedIconTitle;
      'shared.faq': SharedFaq;
      'shared.content': SharedContent;
      'shared.button': SharedButton;
      'sections.section': SectionsSection;
      'sections.repetable-cards': SectionsRepetableCards;
      'sections.lists': SectionsLists;
      'sections.hero': SectionsHero;
      'sections.gallery': SectionsGallery;
      'sections.fa-qs': SectionsFaQs;
      'sections.certifications': SectionsCertifications;
      'sections.basic-card': SectionsBasicCard;
    }
  }
}
