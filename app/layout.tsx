import type { Metadata } from 'next';import CookieConsent from '../components/CookieConsent';import './globals.css';import './palette.css';import './logo.css';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={metadataBase:siteUrl?new URL(siteUrl):undefined,title:{default:'JP Mortgage Solutions | Mortgage guidance',template:'%s | JP Mortgage Solutions'},description:'Friendly, professional mortgage guidance from JP Mortgage Solutions.',openGraph:{title:'JP Mortgage Solutions',description:'Find a home that fits your budget.',type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<CookieConsent/></body></html>}
