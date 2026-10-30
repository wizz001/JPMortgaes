'use client';
import Link from 'next/link';import {ArrowRight} from 'lucide-react';
export default function ServiceEnquiryLink({service,children='Discuss your options'}:{service:string;children?:string}){return <Link className="btn btn-pink" href="/contact" onClick={()=>sessionStorage.setItem('jp-selected-service',service)}>{children}<ArrowRight size={17}/></Link>}
