import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const requestHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
}

export const getSpecialPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(where: { specialPost: true }) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              categoryColor {
                hex
              }
            }
            specialPost
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)

  return result.postsConnection
}

export const getPosts = async (limit, offset) => {
  const query = gql`
    query MyQuery($limit: Int!, $offset: Int!) {
      postsConnection(
        first: $limit
        skip: $offset
        where: { specialPost: false }
      ) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              categoryColor {
                hex
              }
            }
            specialPost
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `

  const result = await request(
    graphqlAPI,
    query,
    { limit, offset },
    requestHeaders
  )

  return result.postsConnection
}

export const getTotalPostNumber = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)

  return result.postsConnection
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          slug
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
          categoryColor {
            hex
          }
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }, requestHeaders)

  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)

  return result.posts
}

export const getRelatedPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(
    graphqlAPI,
    query,
    { categories, slug },
    requestHeaders
  )

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        post {
          title
        }
        photo {
          url
        }
        categoryColor {
          hex
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)

  return result.categories
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              categoryColor {
                hex
              }
              photo {
                url
              }
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }, requestHeaders)

  return result.postsConnection.edges
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }, requestHeaders)

  return result.comments
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost {
      posts(where: { featuredPost: true }) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
        categories {
          name
          slug
          categoryColor {
            hex
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)

  return result.posts
}

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authorsConnection {
        edges {
          node {
            bio
            name
            photo {
              url
            }
            slug
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {}, requestHeaders)
  return result.authorsConnection.edges
}

export const getAuthorDetails = async (slug) => {
  const query = gql`
    query GetAuthorDetails($slug: String!) {
      author(where: { slug: $slug }) {
        post {
          excerpt
          title
          slug
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          categories {
            name
            categoryColor {
              hex
            }
          }
          featuredImage {
            url
          }
        }
        photo {
          url
        }
        slug
        cover {
          url
        }
        facebook
        twitter
        website
        linkedin
        instagram
        youtube
        email
        name
        bio
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }, requestHeaders)
  return result.author
}
