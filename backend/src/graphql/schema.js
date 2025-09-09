// import {gql} from "graphql-tag"
// import {userTypeDefs} from "./userTypeDefs.js"
// import {userResolver} from "../resolvers/userResolver.js"
// import {helloTypeDefs} from "./helloTypeDefs.js"
// import {helloResolver} from "../resolvers/helloResolver.js"

// const baseTypeDefs=gql`
// type Query{
// _empty:String
// }
// type Mutation{
// _empty:String
// }
// `;

// export const typeDefs={baseTypeDefs,userTypeDefs,helloTypeDefs};
// export const resolvers={userResolver, helloResolver}



















import { gql } from "graphql-tag";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import { userTypeDefs } from "./userTypeDefs.js";
import { userResolver } from "../resolvers/userResolver.js";
import { helloTypeDefs } from "./helloTypeDefs.js";
import { helloResolver } from "../resolvers/helloResolver.js";

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

// Merge all typedefs
export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  userTypeDefs,
  helloTypeDefs,
]);

// Merge all resolvers
export const resolvers = mergeResolvers([
  userResolver,
  helloResolver,
]);
