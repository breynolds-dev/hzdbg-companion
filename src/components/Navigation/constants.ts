export interface NavGroupLink {
  href: string
  title: string
}
export interface NavGroup {
  links: NavGroupLink[]
  title: string
}

const makeLink = ( title: string, href: string  ): NavGroupLink => ( { href, title } );
const makeLinkGroup = ( title: string, links: NavGroupLink[] ) => ( { links, title } );

export const navigationItems: NavGroup[] = [
  makeLinkGroup( "Guides", [
    makeLink( "Introduction", "/" ),
    makeLink( "Quick Start", "/quick-start" ),
    makeLink( "Terminology", "/terminology" ),
  ] ),
  makeLinkGroup( "Game Content", [
    makeLink( "Core Module", "/game-content/core-game" ),
    makeLink( "The Fireclaw Expansion", "/game-content/fireclaw" ),
    makeLink( "The Forge & Hammer Expansion", "/game-content/forge-and-hammer" ),
    makeLink( "The Frozen Wilds Expansion", "/game-content/frozen-wilds" ),
    makeLink( "The Heart of the Nora Expansion", "/game-content/heart-of-the-nora" ),
    makeLink( "The Lawless Badlands Expansion", "/game-content/lawless-badlands" ),
    makeLink( "The Rockbreaker Expansion", "/game-content/rockbreaker" ),
    makeLink( "The Sacred Lan Expansion", "/game-content/sacred-land" ),
    makeLink( "The Soldiers of the Sun Expansion", "/game-content/soldiers-of-the-sun" ),
    makeLink( "The Stormbird Expansion", "/game-content/stormbird" ),
    makeLink( "The Thunderjaw Expansion", "/game-content/thunderjaw" ),
    makeLink( "The Kickstarter Exclusives", "/game-content/kickstarter-exclusives" ),
  ] ),
  makeLinkGroup( "Templates", [
    makeLink( "Authentication", "/authentication" ),
    makeLink( "Pagination", "/pagination" ),
    makeLink( "Errors", "/errors" ),
    makeLink( "Webhooks", "/webhooks" ),
  ] ),
  makeLinkGroup( "Resources", [
    makeLink( "Attachments", "/attachments" ),
  ] ),
];
