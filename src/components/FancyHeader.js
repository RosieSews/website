import React from "react";
import Link from "./Link";
import styled, { css } from "styled-components";
import theme from "../../config/theme";
// import { fonts } from "../lib/typography";
import headerBackground from "../images/header-bg.png"
import logoImg from "../images/header-rosie.png";
import logoImgMobile from "../images/header-mobile.png";
import maskNowImg from "../images/header-masksnow.png"
import MobileNav from "./Mobile-Nav";
import Container from "./Container";
import { bpMaxSM } from "../lib/breakpoints";
import { lighten } from "polished";

function HeaderLink({ headerColor, activeClassName = "active", ...props }) {
  return (
    <Link
      activeClassName={activeClassName}
      partiallyActive={true}
      css={{
        textDecoration: "none",
        color: headerColor ? headerColor : theme.colors.grey.default,
        "&:hover,&:focus": {
          background:
            headerColor === theme.colors.white
              ? "rgb(72,167,228, 0.5)"
              : lighten(0.4, theme.colors.primary),
          color:
            headerColor === theme.colors.white
              ? "white"
              : theme.colors.link_color_hover
        },
        "&.active": {
          background:
            headerColor === theme.colors.white
              ? "rgb(72,167,228, 0.5)"
              : lighten(0.4, theme.colors.primary)
        }
      }}
      {...props}
    />
  );
}

const NavLink = styled(HeaderLink)({
  padding: "8px 10px",
  borderRadius: "3px",
  background: "transparent",
  "& + &": { marginLeft: 10 },
  [bpMaxSM]: {
    display: "none"
  }
});

function Header({
  dark,
  bgColor = "none",
  siteTitle,
  headerLink = "/",
  headerColor = "white",
  fixed = false,
  headerImage = true,
}) {
  return (
    <header
      css={css`
        width: 100%;
        ${"" /* grid-column: 1 / -1; */}
        flex-shrink: 0;
        background-repeat:repeat-x;
        background-image:url(${headerBackground});
        background-size:contain;
        z-index: 10;
        ${"" /* position: ${fixed ? "fixed" : "absolute"}; */}
        top: 0;
        ${"" /* font-family: ${fonts.light}; */}
        grid-area: header;
      `}
    >
      <div>
        <nav
          css={{
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <HeaderLink
            to={headerLink}
            aria-label="go to homepage"
            activeClassName="none"
            headerColor={headerColor}
            css={{
              // fontFamily: fonts.regular,
              display: "flex",
              alignItems: "center",
              img: {
                marginBottom: 0,
                maxWidth: "300px",
                // borderRadius: "100%",
                background:
                  headerColor === "#fff" ? "rgb(72,167,228, 0.7)" : "#f1f1f1"
              },
              ":hover, :focus": {
                background: "transparent"
              },
              span: {
                transform: headerImage && "translateX(60px)"
              }
            }}
          >
            <div css={css`
              display: none;
              @media (max-width: ${props => props.theme.breakpoints.phone}) {
                display: inherit;
              }
            `}>
              <img src={logoImgMobile} alt="Rosie Sews Logo" />
            </div>
            <div css={css`
              @media (max-width: ${props => props.theme.breakpoints.phone}) {
                display: none;
              }
            `}>
              <img src={logoImg} alt="Rosie Sews Logo" />
            </div>
            <span>{siteTitle}</span>
          </HeaderLink>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              `}
          >
            <div
              css={css`
                padding-left: 16px;
                padding-top: 16px;
                padding-bottom: 48px;
                font-size: 16px;
                line-height: 1.25;
                display: flex;
                align-items: center;
                .mobile-nav {
                  display: none;
                  visibility: hidden;
                  ${bpMaxSM} {
                    display: block;
                    visibility: visible;
                  }
                }
              `}
              >
              <MobileNav color={headerColor} />
              {/* <NavLink
                headerColor={headerColor}
                to="/blog/"
                aria-label="View blog page"
              >
                Blog
              </NavLink> */}
              <NavLink
                headerColor={headerColor}
                to="/available-supplies"
                aria-label="View Available Supplies Page"
              >
                Available Supplies
              </NavLink>
              <NavLink
                headerColor={headerColor}
                to="/request-supplies"
                aria-label="View Request Supplies Page"
              >
                Request Supplies
              </NavLink>
              <NavLink
                headerColor={headerColor}
                to="/mask-patterns"
                aria-label="Patterns for homemade masks"
              >
                Patterns
              </NavLink>
              <NavLink
                headerColor={headerColor}
                to="/updates/volunteer-groups"
                aria-label="View Groups Directory Page"
              >
                Groups Directory
              </NavLink>
              <NavLink
                headerColor={headerColor}
                to="/volunteer-signup"
                aria-label="View Signup Page"
              >
                Volunteer
              </NavLink>
            </div>
            <div css={css`
              @media (max-width: ${props => props.theme.breakpoints.phone}) {
                display: none;
              }
            `}>
              <img src={maskNowImg} alt="Masks Now!" css={{maxWidth: "800px", width: "100%"}} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
