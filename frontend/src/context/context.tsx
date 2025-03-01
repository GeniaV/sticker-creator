import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface MarketplaceContextType {
  marketplace: string;
  setMarketplace: Dispatch<SetStateAction<string>>;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

interface MarketplaceProviderProps {
  children: ReactNode;
}

export const MarketplaceProvider: React.FC<MarketplaceProviderProps> = ({ children }) => {
  const [marketplace, setMarketplace] = useState<string>('WB');

  return (
    <MarketplaceContext.Provider value={{ marketplace, setMarketplace }}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = (): MarketplaceContextType => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};
