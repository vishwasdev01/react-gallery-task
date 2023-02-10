import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../common/Breadcrum';

export interface PropTypes {
    heading?: string,
    children?: React.ReactNode
}

const Layout = ({ heading, children }: PropTypes) => {
    return (
        <div className="layout-1 layout h-scree">
            <h1 className='py-10 text-gray-900 text-xl font-bold text-center'>
                <Link to="/">
                    {heading}
                </Link>
            </h1>
            <Breadcrumb />
            <div className="py-6 px-6 bg-gray-50">
                <div className="container mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;