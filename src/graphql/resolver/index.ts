import testResolver from "./test";
import authResolver from './authResolver'

export const graphQLResolver = {
  ...testResolver,
  ...authResolver
};

// module.exports = rootResolver;
