import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from '@emotion/styled'
import 'sanitize.css'
import '../styles/global.css'

import { size, media, color, keyframes } from '../styles/variants'

const Page = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 160px;
  max-width: ${size.tablet-80}px;

  color: ${color.black};
  font-size: 18px;
  line-height: 1.6em;

  ${media.tablet} {
    margin: 40px 40px 0 40px;
    font-size: 16px;
  }

  ${media.phone} {
    margin: 40px 20px 0 20px;
  }
`

const Header = styled.header`
  margin-bottom: 100px;
`

let TitleLine = styled.div`
  animation: ${keyframes.transIn} 0.4s ease-in-out;
`

const TitleLineWithoutAnimation = (props) => <div {...props} />

const Title = styled.span`
  cursor: pointer;
  margin-right: 30px;
  font-size: 22px;
  color: ${color.black};
  font-weight: 600;

  ${media.tablet} {
    font-size: 20px;
  }

  &:hover {
    color: ${color.linkHover};
  }
`

const Description = styled.span`
  font-size: 22px;
  color: ${color.grey};

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.phone} {
    display: block;
    margin-top: 10px;
  }
`

let NavBar = styled.div`
  margin-top: 60px;

  animation: ${keyframes.transIn} 0.4s ease-in-out 0.3s both;

  a:not(:first-of-type) {
    margin-left: 16px;
  }

  ${media.tablet} {
    margin-top: 40px;
  }
`

const NavBarWithoutAnimation = styled(NavBar)`
  animation: none;
`

const NavItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  

  &:hover {
    color: ${color.linkHover};
  }
`

let Container = styled.div`
  animation: ${keyframes.transIn} 0.6s ease-in-out 0.6s both;
`

let ContainerWithoutDelay = styled.div`
  animation: ${keyframes.transIn} 0.6s ease-in-out both;
`

export const Link = withRouter(({ children, router, href }) => {
  const style = {
    color: router.pathname === href ? color.black : color.link
  }

  const handleClick = e => {
    e.preventDefault()

    // Prevent animations
    TitleLine = TitleLineWithoutAnimation
    NavBar = NavBarWithoutAnimation
    Container = ContainerWithoutDelay

    router.push(href)
  }

  return (
    <NavItem href={href} onClick={handleClick} style={style}>
      {children}
    </NavItem>
  )
})

export default function Layout(props) {
  const title = props.title ? `${props.title} | Zilong Liang` : 'Zilong Liang'
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>{title}</title>
      </Head>
      <Page>
        <Header>
          <TitleLine play={props.play}>
            <Link href='/'><Title>Zilong Liang</Title></Link>
            <Description>{`I'm doing applied mathematics.`}</Description>
          </TitleLine>
          <NavBar>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
          </NavBar>
        </Header>
        <Container>{props.children}</Container>
      </Page>
    </>
  )
}
