# This is the old site - DO NOT SUBMIT PR's HERE

We'll leave all of this intact for now but eventually will remove this repo (likely)

# Rosiesews.org

## Mission

RosieSews.org is an grassroots volunteer organization with an aim of connecting makers across the country with healthcare organizations in need of masks and other Personal Protective Equipment as they deal with the COVID-19 outbreak.

## Strategy

We are employing technology to give tools to organize, empower and inform local groups to fill the needs in their communities. Our main tool for organizing our volunteers and connecting them with healthcare providers is Airtable. We are also using a gatsbyjs powered website to disseminate information, SendGrid and Freshdesk to manage email and social media communication.
how's that?

## More Details

1. This site is built with Gatsby.js, React, Styled-Components, and is quite messy right now as it is built from a repurposed side project.
2. If you're looking for small things to work on and know Gatsby.js well - feel free to make changes.
3. The site is equipped with Google Analytics - I'm not sure if that's really all that relevant besides a touchstone for our reach but I left it in there for now.

## How-to's

### run a local dev environment

You can go a long way in just copying what's already here - but taking a minute to read some of Gatsby.js' docs will help a lot.
The quick and dirty to get this up and running is:

1. run `yarn`
2. make sure you have the `gatsby-cli` installed for the next step `yarn global add gatsby-cli`. Should also do just as fine installing globally with npm.
3. Run `gatsby develop` to spin up a dev environment

### add a page

- To ad a page - you'll need to add touch at least 3 files.
  1. The page file - you can copy from an existing one
  2. the Mobile-Nav.js component
  3. the FancyHeader.js component

### Deployment

any commits pushed to the master branch will get deployed by Netlify

[This site is powered by Netlify](https://www.netlify.com/)
