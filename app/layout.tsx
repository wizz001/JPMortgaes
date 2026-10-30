import type { Metadata } from 'next'; import './globals.css'; import './palette.css'; import './logo.css';
export const metadata:Metadata={title:{default:'JP Mortgage Solutions | Mortgage guidance',template:'%s | JP Mortgage Solutions'},description:'Friendly, professional mortgage guidance from JP Mortgage Solutions.',openGraph:{title:'JP Mortgage Solutions',description:'Find a home that fits your budget.'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
