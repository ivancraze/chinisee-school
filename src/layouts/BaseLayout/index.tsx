import React from 'react';

interface IMcBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<IMcBaseLayoutProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default BaseLayout;
