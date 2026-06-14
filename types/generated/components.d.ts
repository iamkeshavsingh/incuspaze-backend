import type { Schema, Attribute } from '@strapi/strapi';

export interface StaticTermsCondition extends Schema.Component {
  collectionName: 'components_static_terms_conditions';
  info: {
    displayName: 'Terms Condition';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface StaticPrivacy extends Schema.Component {
  collectionName: 'components_static_privacies';
  info: {
    displayName: 'Privacy';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SolutionWorkSpace extends Schema.Component {
  collectionName: 'components_solution_work_spaces';
  info: {
    displayName: 'Work Space';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface SolutionWhyChoose extends Schema.Component {
  collectionName: 'components_solution_why_chooses';
  info: {
    displayName: 'Why Choose';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-sol-why-cho', true>;
  };
}

export interface SolutionStickyTab extends Schema.Component {
  collectionName: 'components_solution_sticky_tabs';
  info: {
    displayName: 'Sticky Tab';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    tabs: Attribute.Component<'partials.cta', true>;
  };
}

export interface SolutionNearOffices extends Schema.Component {
  collectionName: 'components_solution_near_offices';
  info: {
    displayName: 'Near Offices';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    officedata: Attribute.Component<'partials.nearby-card-sol', true>;
  };
}

export interface SolutionMainSection extends Schema.Component {
  collectionName: 'components_solution_main_sections';
  info: {
    displayName: 'Main Section';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'partials.cta'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SolutionEndProcess extends Schema.Component {
  collectionName: 'components_solution_end_processes';
  info: {
    displayName: 'End Process';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    steps: Attribute.Component<'partials.card-sol-endp', true>;
  };
}

export interface SolutionBanner extends Schema.Component {
  collectionName: 'components_solution_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

export interface ResourceBanner extends Schema.Component {
  collectionName: 'components_resource_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    note: Attribute.String;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    insights: Attribute.Relation<
      'resource.banner',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface PropertyDetailProductive extends Schema.Component {
  collectionName: 'components_property_detail_productives';
  info: {
    displayName: 'Productive';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    amenitiesTitle: Attribute.String;
    amenitiesDescription: Attribute.Text;
    amenities: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface PropertyDetailOtherProperty extends Schema.Component {
  collectionName: 'components_property_detail_other_properties';
  info: {
    displayName: 'Other Property';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface PropertyDetailConnected extends Schema.Component {
  collectionName: 'components_property_detail_connecteds';
  info: {
    displayName: 'Connected';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    nearbyTitle: Attribute.String;
    map: Attribute.Text;
    nearbyLocations: Attribute.Component<'partials.card-img-title-des', true>;
  };
}

export interface PropertyDetailBanner extends Schema.Component {
  collectionName: 'components_property_detail_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    rating: Attribute.String;
    review: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface PropertyWorkSpace extends Schema.Component {
  collectionName: 'components_property_work_spaces';
  info: {
    displayName: 'Work Space';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    tabs: Attribute.Component<'partials.card-text', true>;
    property_details: Attribute.Relation<
      'property.work-space',
      'oneToMany',
      'api::property-detail.property-detail'
    >;
    formTitle: Attribute.String;
    formSubtitle: Attribute.String;
  };
}

export interface PropertyWhyChoose extends Schema.Component {
  collectionName: 'components_property_why_chooses';
  info: {
    displayName: 'Why Choose';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-img-title-des', true>;
  };
}

export interface PropertyPartnershipOpportunities extends Schema.Component {
  collectionName: 'components_property_partnership_opportunities';
  info: {
    displayName: 'Partnership opportunities';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    cards: Attribute.Component<'partials.partner-text-li-img', true>;
  };
}

export interface PropertyOtherProperty extends Schema.Component {
  collectionName: 'components_property_other_properties';
  info: {
    displayName: 'Other Property';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    audience: Attribute.Relation<
      'property.other-property',
      'oneToOne',
      'plugin::navigation.audience'
    >;
  };
}

export interface PropertyBanner extends Schema.Component {
  collectionName: 'components_property_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tags: Attribute.Component<'partials.card-text', true>;
  };
}

export interface PartnerWhyPartner extends Schema.Component {
  collectionName: 'components_partner_why_partners';
  info: {
    displayName: 'Why partner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-img-title-des', true>;
  };
}

export interface PartnerWhoShould extends Schema.Component {
  collectionName: 'components_partner_who_shoulds';
  info: {
    displayName: 'Who should';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface PartnerHowItWork extends Schema.Component {
  collectionName: 'components_partner_how_it_works';
  info: {
    displayName: 'How it work';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    cards: Attribute.Component<'partials.partner-icon-text-img', true>;
  };
}

export interface PartnerBanner extends Schema.Component {
  collectionName: 'components_partner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'partials.cta'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartnerAboutPartnership extends Schema.Component {
  collectionName: 'components_partner_about_partnerships';
  info: {
    displayName: 'About partnership';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    points: Attribute.Component<'partials.card-img-text', true>;
    description1: Attribute.Text;
    description2: Attribute.Text;
    cta: Attribute.Component<'partials.cta'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface PartialsTestiLpCard extends Schema.Component {
  collectionName: 'components_partials_testi_lp_cards';
  info: {
    displayName: 'testi.lp.card';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    moreText: Attribute.Text;
    company: Attribute.String;
    name: Attribute.String;
    rating: Attribute.String;
  };
}

export interface PartialsTeamsAbout extends Schema.Component {
  collectionName: 'components_partials_teams_abouts';
  info: {
    displayName: 'teams.about';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    userImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedInUrl: Attribute.String;
  };
}

export interface PartialsStatus extends Schema.Component {
  collectionName: 'components_partials_statuses';
  info: {
    displayName: 'Status';
  };
  attributes: {
    visible: Attribute.Boolean;
  };
}

export interface PartialsPrimeLocCard extends Schema.Component {
  collectionName: 'components_partials_prime_loc_cards';
  info: {
    displayName: 'prime.loc.card';
  };
  attributes: {
    title: Attribute.Text;
    distance: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface PartialsPrimeJaipurCard extends Schema.Component {
  collectionName: 'components_partials_prime_jaipur_cards';
  info: {
    displayName: 'prime.jaipur.card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    distance: Attribute.Component<'shared.title', true>;
    amenities: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface PartialsPartnerTextLiImg extends Schema.Component {
  collectionName: 'components_partials_partner_text_li_imgs';
  info: {
    displayName: 'partner.text.li.img';
  };
  attributes: {
    tiltle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Component<'partials.card-text', true>;
  };
}

export interface PartialsPartnerIconTextImg extends Schema.Component {
  collectionName: 'components_partials_partner_icon_text_imgs';
  info: {
    displayName: 'partner.icon.text.img';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsNearbyCardSol extends Schema.Component {
  collectionName: 'components_partials_nearby_card_sols';
  info: {
    displayName: 'nearby.card.sol';
  };
  attributes: {
    address: Attribute.String;
    slug: Attribute.String;
    area: Attribute.String;
    seat: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsFounderQuoteAbout extends Schema.Component {
  collectionName: 'components_partials_founder_quote_abouts';
  info: {
    displayName: 'FounderQuote.about';
  };
  attributes: {
    sno: Attribute.String;
    content: Attribute.Text;
    name: Attribute.String;
    designation: Attribute.String;
    smallImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bigImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsFaq extends Schema.Component {
  collectionName: 'components_partials_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.RichText;
  };
}

export interface PartialsExploreMgCard extends Schema.Component {
  collectionName: 'components_partials_explore_mg_cards';
  info: {
    displayName: 'explore.mg.card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    tags: Attribute.String;
    price: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCta extends Schema.Component {
  collectionName: 'components_partials_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
  };
}

export interface PartialsClientalInfoLp extends Schema.Component {
  collectionName: 'components_partials_cliental_info_lps';
  info: {
    displayName: 'cliental.info.lp';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.RichText;
  };
}

export interface PartialsChennaiLocationCard extends Schema.Component {
  collectionName: 'components_partials_chennai_location_cards';
  info: {
    displayName: 'chennai.location.card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardText extends Schema.Component {
  collectionName: 'components_partials_card_texts';
  info: {
    displayName: 'Card.Text';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PartialsCardTextDesc extends Schema.Component {
  collectionName: 'components_partials_card_text_descs';
  info: {
    displayName: 'Card.Text.Desc';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface PartialsCardSolWhyCho extends Schema.Component {
  collectionName: 'components_partials_card_sol_why_chos';
  info: {
    displayName: 'Card.Sol.WhyCho';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardSolEndp extends Schema.Component {
  collectionName: 'components_partials_card_sol_endps';
  info: {
    displayName: 'Card.Sol.Endp';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardJourAbout extends Schema.Component {
  collectionName: 'components_partials_card_jour_abouts';
  info: {
    displayName: 'card.jour.about';
  };
  attributes: {
    year: Attribute.String;
    title: Attribute.String;
    subHeading1: Attribute.Text;
    subHeading2: Attribute.Text;
    subHeading3: Attribute.Text;
    subHeading4: Attribute.Text;
  };
}

export interface PartialsCardImgTitleDes extends Schema.Component {
  collectionName: 'components_partials_card_img_title_des';
  info: {
    displayName: 'Card.img.title.des';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
  };
}

export interface PartialsCardImgText extends Schema.Component {
  collectionName: 'components_partials_card_img_texts';
  info: {
    displayName: 'Card.Img.Text';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardExploreLp extends Schema.Component {
  collectionName: 'components_partials_card_explore_lps';
  info: {
    displayName: 'card.explore.lp';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    tags: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
    amenities: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface PartialsCardCmnTesti extends Schema.Component {
  collectionName: 'components_partials_card_cmn_testis';
  info: {
    displayName: 'Card.Cmn.Testi';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    comment: Attribute.Text;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Attribute.Decimal;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardCmnMapLoc extends Schema.Component {
  collectionName: 'components_partials_card_cmn_map_locs';
  info: {
    displayName: 'Card.Cmn.MapLoc';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface PartialsCardCmnMapLocData extends Schema.Component {
  collectionName: 'components_partials_card_cmn_map_loc_data';
  info: {
    displayName: 'Card.Cmn.MapLoc.Data';
  };
  attributes: {
    name: Attribute.String;
    area: Attribute.String;
    top: Attribute.Integer;
    left: Attribute.Integer;
  };
}

export interface PartialsCardCmnFtrMrq extends Schema.Component {
  collectionName: 'components_partials_card_cmn_ftr_mrqs';
  info: {
    displayName: 'Card.Cmn.FtrMrq';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface PartialsCardCmnExpOfrng extends Schema.Component {
  collectionName: 'components_partials_card_cmn_exp_ofrngs';
  info: {
    displayName: 'Card.Cmn.ExpOfrng';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsCardCarrBeni extends Schema.Component {
  collectionName: 'components_partials_card_carr_benis';
  info: {
    displayName: 'Card.carr.beni';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bgCardImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    textColor: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OlympiaCrestRequirement extends Schema.Component {
  collectionName: 'components_olympia_crest_requirements';
  info: {
    displayName: 'Requirement';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    cardTitle: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    officedata: Attribute.Component<'partials.card-img-title-des', true>;
  };
}

export interface OlympiaCrestPrimeLocation extends Schema.Component {
  collectionName: 'components_olympia_crest_prime_locations';
  info: {
    displayName: 'Prime Location';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    iframe: Attribute.Text;
    title: Attribute.String;
    locations: Attribute.Component<'partials.chennai-location-card', true>;
  };
}

export interface OlympiaCrestBanner extends Schema.Component {
  collectionName: 'components_olympia_crest_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subTitle: Attribute.String;
    subHeading1: Attribute.String;
    price: Attribute.String;
    subHeading2: Attribute.String;
    info1: Attribute.String;
    info2: Attribute.String;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MgRoadExplore extends Schema.Component {
  collectionName: 'components_mg_road_explores';
  info: {
    displayName: 'Explore';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    locationData: Attribute.Component<'partials.explore-mg-card', true>;
  };
}

export interface MgRoadBanner extends Schema.Component {
  collectionName: 'components_mg_road_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading1: Attribute.String;
    subHeading2: Attribute.String;
    subHeading3: Attribute.String;
    subHeading4: Attribute.String;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface JaipurPrimeLocation extends Schema.Component {
  collectionName: 'components_jaipur_prime_locations';
  info: {
    displayName: 'Prime Location';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    location: Attribute.Component<'partials.prime-jaipur-card', true>;
  };
}

export interface JaipurBanner extends Schema.Component {
  collectionName: 'components_jaipur_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading: Attribute.String;
    subHeading1: Attribute.String;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeWhatWe extends Schema.Component {
  collectionName: 'components_home_what_wes';
  info: {
    displayName: 'What We Do';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    heading: Attribute.String;
    title: Attribute.String;
    content: Attribute.RichText;
    imagePrimary: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageSecondary: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeSubMarque extends Schema.Component {
  collectionName: 'components_home_sub_marques';
  info: {
    displayName: 'Sub Marque';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    cards: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface HomeCxoBanner extends Schema.Component {
  collectionName: 'components_home_cxo_banners';
  info: {
    displayName: 'Cxo Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'partials.cta'>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeBrands extends Schema.Component {
  collectionName: 'components_home_brands';
  info: {
    displayName: 'Brands';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'partials.cta'>;
    marqueeTop: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    marqueeBottom: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    ctaText: Attribute.String;
    formTitle: Attribute.String;
    formSubtitle: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GurugramLpWorkStation extends Schema.Component {
  collectionName: 'components_gurugram_lp_work_stations';
  info: {
    displayName: 'Work Station';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    formTitle: Attribute.String;
    officedata: Attribute.Component<'common.card-wprk-lp', true>;
  };
}

export interface GurugramLpCustomizedBanner extends Schema.Component {
  collectionName: 'components_gurugram_lp_customized_banners';
  info: {
    displayName: 'Customized Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
  };
}

export interface GurugramLpBuiltSite extends Schema.Component {
  collectionName: 'components_gurugram_lp_built_sites';
  info: {
    displayName: 'Built Site';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface GurugramLpBanner extends Schema.Component {
  collectionName: 'components_gurugram_lp_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading1: Attribute.String;
    subHeading2: Attribute.String;
    subHeading3: Attribute.String;
    subHeading4: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactContactForm extends Schema.Component {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    formHeadings: Attribute.Component<'partials.card-text-desc', true>;
  };
}

export interface ContactBanner extends Schema.Component {
  collectionName: 'components_contact_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    breadcrumb: Attribute.Component<'partials.cta', true>;
    title: Attribute.String;
    subtitle: Attribute.String;
    contact: Attribute.Component<'partials.card-text-desc', true>;
  };
}

export interface CommonWorkWithUsLp extends Schema.Component {
  collectionName: 'components_common_work_with_us_lps';
  info: {
    displayName: 'Work With Us Lp';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    card: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface CommonTestimonial extends Schema.Component {
  collectionName: 'components_common_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    cards: Attribute.Component<'partials.card-cmn-testi', true>;
  };
}

export interface CommonTestimonialLp extends Schema.Component {
  collectionName: 'components_common_testimonial_lps';
  info: {
    displayName: 'Testimonial Lp';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    card: Attribute.Component<'partials.testi-lp-card', true>;
  };
}

export interface CommonPrimeLocation extends Schema.Component {
  collectionName: 'components_common_prime_locations';
  info: {
    displayName: 'Prime Location';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    iframe: Attribute.Text;
    title: Attribute.String;
    location: Attribute.Component<'partials.prime-loc-card'>;
  };
}

export interface CommonNewsLetter extends Schema.Component {
  collectionName: 'components_common_news_letters';
  info: {
    displayName: 'News Letter';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    content: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonMapLocation extends Schema.Component {
  collectionName: 'components_common_map_locations';
  info: {
    displayName: 'Map Location';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    cards: Attribute.Component<'partials.card-cmn-map-loc', true>;
    pointsDesktop: Attribute.Component<'partials.card-cmn-map-loc-data', true>;
    pointsMobile: Attribute.Component<'partials.card-cmn-map-loc-data', true>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonLifeAtIncuspaze extends Schema.Component {
  collectionName: 'components_common_life_at_incuspazes';
  info: {
    displayName: 'Life At Incuspaze';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    description2: Attribute.Text;
    ctaJoin: Attribute.Component<'partials.cta'>;
    mobileImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    dektopImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonInsights extends Schema.Component {
  collectionName: 'components_common_insights';
  info: {
    displayName: 'Insights';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    insights: Attribute.Relation<
      'common.insights',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface CommonHeader extends Schema.Component {
  collectionName: 'components_common_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    page: Attribute.String;
  };
}

export interface CommonHeaderLp extends Schema.Component {
  collectionName: 'components_common_header_lps';
  info: {
    displayName: 'Header Lp';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    cta: Attribute.Component<'partials.cta'>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonGalleryLp extends Schema.Component {
  collectionName: 'components_common_gallery_lps';
  info: {
    displayName: 'Gallery Lp';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
  };
}

export interface CommonFooter extends Schema.Component {
  collectionName: 'components_common_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
  };
}

export interface CommonFooterMarque extends Schema.Component {
  collectionName: 'components_common_footer_marques';
  info: {
    displayName: 'Footer Marque';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonFooterLp extends Schema.Component {
  collectionName: 'components_common_footer_lps';
  info: {
    displayName: 'Footer Lp';
    description: '';
  };
  attributes: {
    titleFooter: Attribute.String;
    card: Attribute.Component<'partials.card-text-desc', true>;
    titleFaq: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
    titleAny: Attribute.String;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface CommonFloatingCta extends Schema.Component {
  collectionName: 'components_common_floating_ctas';
  info: {
    displayName: 'Floating Cta';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    featureText: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
    faqs: Attribute.Component<'partials.faq', true>;
  };
}

export interface CommonExploreOffering extends Schema.Component {
  collectionName: 'components_common_explore_offerings';
  info: {
    displayName: 'Explore Offering';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'partials.card-cmn-exp-ofrng', true>;
  };
}

export interface CommonExploreLp extends Schema.Component {
  collectionName: 'components_common_explore_lps';
  info: {
    displayName: 'Explore Lp';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    card: Attribute.Component<'partials.card-explore-lp', true>;
  };
}

export interface CommonEnterprise extends Schema.Component {
  collectionName: 'components_common_enterprises';
  info: {
    displayName: 'Enterprise';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    ctaExplore: Attribute.Component<'partials.cta'>;
    ctaContact: Attribute.Component<'partials.cta'>;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonContact extends Schema.Component {
  collectionName: 'components_common_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    scheduleHeading: Attribute.String;
    scheduleInfo: Attribute.String;
    scheduleTitle: Attribute.String;
    scheduleDescription: Attribute.String;
  };
}

export interface CommonClientaleLp extends Schema.Component {
  collectionName: 'components_common_clientale_lps';
  info: {
    displayName: 'Clientale Lp';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    info: Attribute.Component<'partials.cliental-info-lp', true>;
  };
}

export interface CommonCardWprkLp extends Schema.Component {
  collectionName: 'components_common_card_wprk_lps';
  info: {
    displayName: 'card.wprk.lp';
  };
  attributes: {
    title: Attribute.String;
    rating: Attribute.String;
    address: Attribute.String;
    workstation: Attribute.String;
    cabin: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    amenities: Attribute.Component<'partials.card-img-text', true>;
  };
}

export interface CareerBenefit extends Schema.Component {
  collectionName: 'components_career_benefits';
  info: {
    displayName: 'Benefit';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    cards: Attribute.Component<'partials.card-carr-beni', true>;
  };
}

export interface CareerBanner extends Schema.Component {
  collectionName: 'components_career_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    breadcrumb: Attribute.Component<'partials.cta', true>;
    tile: Attribute.String;
    description: Attribute.Text;
    ctaJoin: Attribute.Component<'partials.cta'>;
    ctaKnow: Attribute.Component<'partials.cta'>;
    titleMobile: Attribute.String;
  };
}

export interface CareerApplyForm extends Schema.Component {
  collectionName: 'components_career_apply_forms';
  info: {
    displayName: 'Apply Form';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    imageBg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    email: Attribute.Component<'partials.card-text-desc'>;
  };
}

export interface BangaloreLpBanner extends Schema.Component {
  collectionName: 'components_bangalore_lp_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading1: Attribute.String;
    subHeading2: Attribute.String;
    subHeading3: Attribute.String;
    subHeading4: Attribute.String;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BangaloreLpBannerStep extends Schema.Component {
  collectionName: 'components_bangalore_lp_banner_steps';
  info: {
    displayName: 'Banner Step';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    subHeading1: Attribute.String;
    subHeading2: Attribute.String;
    subHeading3: Attribute.String;
    subHeading4: Attribute.String;
    desktopImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutZohoRecruit extends Schema.Component {
  collectionName: 'components_about_zoho_recruits';
  info: {
    displayName: 'Zoho Recruit';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
  };
}

export interface AboutValueSection extends Schema.Component {
  collectionName: 'components_about_value_sections';
  info: {
    displayName: 'Value Section';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.String;
    value: Attribute.Component<'partials.card-text-desc', true>;
  };
}

export interface AboutTeam extends Schema.Component {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    members: Attribute.Component<'partials.teams-about', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
  };
}

export interface AboutQuote extends Schema.Component {
  collectionName: 'components_about_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.Text;
    subtitle: Attribute.String;
  };
}

export interface AboutMission extends Schema.Component {
  collectionName: 'components_about_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    Mission: Attribute.Component<'partials.card-img-title-des'>;
    Years: Attribute.Component<'partials.card-img-text'>;
    Vision: Attribute.Component<'partials.card-img-title-des'>;
  };
}

export interface AboutJourney extends Schema.Component {
  collectionName: 'components_about_journeys';
  info: {
    displayName: 'Journey';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    panel: Attribute.Component<'partials.card-jour-about', true>;
  };
}

export interface AboutFounderQuote extends Schema.Component {
  collectionName: 'components_about_founder_quotes';
  info: {
    displayName: 'Founder Quote';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    card: Attribute.Component<'partials.founder-quote-about', true>;
  };
}

export interface AboutBanner extends Schema.Component {
  collectionName: 'components_about_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface AboutAchievement extends Schema.Component {
  collectionName: 'components_about_achievements';
  info: {
    displayName: 'Achievement';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
    awards: Attribute.Component<'partials.card-img-text', true>;
    title: Attribute.String;
    cta: Attribute.Component<'partials.cta'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'static.terms-condition': StaticTermsCondition;
      'static.privacy': StaticPrivacy;
      'solution.work-space': SolutionWorkSpace;
      'solution.why-choose': SolutionWhyChoose;
      'solution.sticky-tab': SolutionStickyTab;
      'solution.near-offices': SolutionNearOffices;
      'solution.main-section': SolutionMainSection;
      'solution.end-process': SolutionEndProcess;
      'solution.banner': SolutionBanner;
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
      'resource.banner': ResourceBanner;
      'property-detail.productive': PropertyDetailProductive;
      'property-detail.other-property': PropertyDetailOtherProperty;
      'property-detail.connected': PropertyDetailConnected;
      'property-detail.banner': PropertyDetailBanner;
      'property.work-space': PropertyWorkSpace;
      'property.why-choose': PropertyWhyChoose;
      'property.partnership-opportunities': PropertyPartnershipOpportunities;
      'property.other-property': PropertyOtherProperty;
      'property.banner': PropertyBanner;
      'partner.why-partner': PartnerWhyPartner;
      'partner.who-should': PartnerWhoShould;
      'partner.how-it-work': PartnerHowItWork;
      'partner.banner': PartnerBanner;
      'partner.about-partnership': PartnerAboutPartnership;
      'partials.testi-lp-card': PartialsTestiLpCard;
      'partials.teams-about': PartialsTeamsAbout;
      'partials.status': PartialsStatus;
      'partials.prime-loc-card': PartialsPrimeLocCard;
      'partials.prime-jaipur-card': PartialsPrimeJaipurCard;
      'partials.partner-text-li-img': PartialsPartnerTextLiImg;
      'partials.partner-icon-text-img': PartialsPartnerIconTextImg;
      'partials.nearby-card-sol': PartialsNearbyCardSol;
      'partials.founder-quote-about': PartialsFounderQuoteAbout;
      'partials.faq': PartialsFaq;
      'partials.explore-mg-card': PartialsExploreMgCard;
      'partials.cta': PartialsCta;
      'partials.cliental-info-lp': PartialsClientalInfoLp;
      'partials.chennai-location-card': PartialsChennaiLocationCard;
      'partials.card-text': PartialsCardText;
      'partials.card-text-desc': PartialsCardTextDesc;
      'partials.card-sol-why-cho': PartialsCardSolWhyCho;
      'partials.card-sol-endp': PartialsCardSolEndp;
      'partials.card-jour-about': PartialsCardJourAbout;
      'partials.card-img-title-des': PartialsCardImgTitleDes;
      'partials.card-img-text': PartialsCardImgText;
      'partials.card-explore-lp': PartialsCardExploreLp;
      'partials.card-cmn-testi': PartialsCardCmnTesti;
      'partials.card-cmn-map-loc': PartialsCardCmnMapLoc;
      'partials.card-cmn-map-loc-data': PartialsCardCmnMapLocData;
      'partials.card-cmn-ftr-mrq': PartialsCardCmnFtrMrq;
      'partials.card-cmn-exp-ofrng': PartialsCardCmnExpOfrng;
      'partials.card-carr-beni': PartialsCardCarrBeni;
      'olympia-crest.requirement': OlympiaCrestRequirement;
      'olympia-crest.prime-location': OlympiaCrestPrimeLocation;
      'olympia-crest.banner': OlympiaCrestBanner;
      'mg-road.explore': MgRoadExplore;
      'mg-road.banner': MgRoadBanner;
      'jaipur.prime-location': JaipurPrimeLocation;
      'jaipur.banner': JaipurBanner;
      'home.what-we': HomeWhatWe;
      'home.sub-marque': HomeSubMarque;
      'home.cxo-banner': HomeCxoBanner;
      'home.brands': HomeBrands;
      'home.banner': HomeBanner;
      'gurugram-lp.work-station': GurugramLpWorkStation;
      'gurugram-lp.customized-banner': GurugramLpCustomizedBanner;
      'gurugram-lp.built-site': GurugramLpBuiltSite;
      'gurugram-lp.banner': GurugramLpBanner;
      'contact.contact-form': ContactContactForm;
      'contact.banner': ContactBanner;
      'common.work-with-us-lp': CommonWorkWithUsLp;
      'common.testimonial': CommonTestimonial;
      'common.testimonial-lp': CommonTestimonialLp;
      'common.prime-location': CommonPrimeLocation;
      'common.news-letter': CommonNewsLetter;
      'common.map-location': CommonMapLocation;
      'common.life-at-incuspaze': CommonLifeAtIncuspaze;
      'common.insights': CommonInsights;
      'common.header': CommonHeader;
      'common.header-lp': CommonHeaderLp;
      'common.gallery-lp': CommonGalleryLp;
      'common.footer': CommonFooter;
      'common.footer-marque': CommonFooterMarque;
      'common.footer-lp': CommonFooterLp;
      'common.floating-cta': CommonFloatingCta;
      'common.faq': CommonFaq;
      'common.explore-offering': CommonExploreOffering;
      'common.explore-lp': CommonExploreLp;
      'common.enterprise': CommonEnterprise;
      'common.contact': CommonContact;
      'common.clientale-lp': CommonClientaleLp;
      'common.card-wprk-lp': CommonCardWprkLp;
      'career.benefit': CareerBenefit;
      'career.banner': CareerBanner;
      'career.apply-form': CareerApplyForm;
      'bangalore-lp.banner': BangaloreLpBanner;
      'bangalore-lp.banner-step': BangaloreLpBannerStep;
      'about.zoho-recruit': AboutZohoRecruit;
      'about.value-section': AboutValueSection;
      'about.team': AboutTeam;
      'about.quote': AboutQuote;
      'about.mission': AboutMission;
      'about.journey': AboutJourney;
      'about.founder-quote': AboutFounderQuote;
      'about.banner': AboutBanner;
      'about.achievement': AboutAchievement;
    }
  }
}
