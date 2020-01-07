import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange as normalizedCache } from '@urql/exchange-graphcache';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cacheExchange = normalizedCache({});

const client = new Client({
  url: `http://localhost:4000`,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
