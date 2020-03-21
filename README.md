# Rosiesews.org

1. This site is built with Gatsby.js, React, Styled-Components, and is quite messy right now as it is built from a repurposed side project.
2. If you're looking for small things to work on and know Gatsby.js well - feel free to make changes.
3. The site is equipped with Google Analytics - I'm not sure if that's really all that relevant besides a touchstone for our reach but I left it in there for now.

## I want to add a page

- To ad a page - you'll need to add touch at least 3 files.
  1. The page file - you can copy from an existing one
  2. the Mobile-Nav.js component
  3. the FancyHeader.js component

## I've never used gatsby but I know react(ish)

You can go a long way in just copying what's already here - but taking a minute to read some of Gatsby.js' docs will help a lot.
The quick and dirty to get this up and running is:

1. run yarn
2. make sure you have the `gatsby-cli` installed for the next step `yarn global add gatsby-cli`. Should also do just as fine installing globally with npm.
3. Run gatsby develop to spin up a dev environment

## Short Term goals for the site

- move to an automated deployment suite - currently this is hosted on firebase but I think something like netlify might be better as it has simple github integrations.
- there are some basics in place to handle a blog of some sort. Very short term - this method could be used for any updates we want to push out. Mid-term, I think reaching for one of gatsby's pre-built content plugins to a headless cms (I think Netlify has one of those too, bonus!) as it would allow non-devs to handle content.
- any others
- clean up the categories template (or remove it altogether)

3. more documentation to come.
