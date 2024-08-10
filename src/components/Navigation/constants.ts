export interface NavGroupLink {
  href: string
  title: string
}
export interface NavGroup {
  links: NavGroupLink[]
  title: string
}

const makeLink = ( href: string, title: string ): NavGroupLink => ( { href, title } );
const makeLinkGroup = ( title: string, links: NavGroupLink[] ) => ( { links, title } );

export const navigationItems: NavGroup[] = [
  makeLinkGroup( "Guides", [
    makeLink( "/", "Introduction" ),
    makeLink( "/quick-start", "Quick Start" ),
    makeLink( "/terminology", "Terminology" ),
  ] ),
  makeLinkGroup( "Templates", [
    makeLink( "/quickstart", "Quickstart" ),
    makeLink( "/sdks", "SDKs" ),
    makeLink( "/authentication", "Authentication" ),
    makeLink( "/pagination", "Pagination" ),
    makeLink( "/errors", "Errors" ),
    makeLink( "/webhooks", "Webhooks" ),
  ] ),
  makeLinkGroup( "Resources", [
    makeLink( "/contacts", "Contacts" ),
    makeLink( "/conversations", "Conversations" ),
    makeLink( "/messages", "Messages" ),
    makeLink( "/groups", "Groups" ),
    makeLink( "/attachments", "Attachments" ),
  ] ),
];
