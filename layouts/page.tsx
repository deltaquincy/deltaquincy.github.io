import { FunctionComponent } from 'react'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/core'
import styled from '@emotion/styled'

const globalCSS = css`
  html * {
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html * {
      font-family: 'Inter var', sans-serif;
    }
  }
  html *::selection {
    background-color: #91e4df;
    color: black;
  }
  @media (max-width: 46rem) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 46rem) {
    html {
      font-size: 16px;
    }
  }
`

const PageContainer = styled.div`
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1rem;
`

interface PageProps {
  title?: string
}

const siteTitle = 'Zilong Liang'

const Page: FunctionComponent<PageProps> = props => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <link href='https://unpkg.com/modern-normalize' rel='stylesheet' />
        <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <GlobalStyle styles={globalCSS} />
      <PageContainer>{props.children}</PageContainer>
    </>
  )
}

export default Page
