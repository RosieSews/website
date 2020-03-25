import React from "react";
import Link from "./Link";
import styled, { css } from "styled-components";
import theme from "../../config/theme";
// import { fonts } from "../lib/typography";
import logoImg from "../images/logo-icon.png";
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
  maxWidth = 720
}) {
  return (
    <header
      css={css`
        width: 100%;
        ${"" /* grid-column: 1 / -1; */}
        flex-shrink: 0;
        background: none;
        background: ${dark ? "#090909" : `${bgColor}` || "none"};
        z-index: 10;
        ${"" /* position: ${fixed ? "fixed" : "absolute"}; */}
        top: 0;
        ${"" /* font-family: ${fonts.light}; */}
        grid-area: header;
      `}
    >
      <Container maxWidth={maxWidth} noVerticalPadding>
        <nav
          css={{
            // width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
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
                maxWidth: "100px",
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
            {headerImage && <img src={logoImg} alt="Rosie Sews Logo" />}{" "}
            <span>{siteTitle}</span>
          </HeaderLink>
          <div
            css={css`
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
