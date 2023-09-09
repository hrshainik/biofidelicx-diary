export interface Metadata {
  title: string
  description: string
  keywords: string
  author: string
  'og:url': string
  'og:title': string
  'og:description': string
  'og:image': string
  twitter: {
    handle: string
    site: string
    cardType: string
  }
}

export interface Post {
  node: {
    title: string
    slug: string
    featuredImage: {
      sourceUrl: string
    }
    author: {
      id: string
      name: string
      bio: string
      photo: {
        url: string
      }
    }
    categories: [
      {
        name: string
        slug: string
        categoryColor: {
          hex: string
        }
        photo: {
          url: string
        }
      }
    ]
    excerpt: string
    createdAt: string
    specialPost: boolean
  }
}

export interface Category {
  name: string
  photo: {
    url: string
  }
  post: [
    {
      title: string
    }
  ]
  slug: string
  categoryColor: {
    hex: string
  }
}

export interface Author {
  name: string
  bio: string
  photo: {
    url: string
  }
  slug: string
  cover: {
    url: string
  }
  createdAt: string
  email: string
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  website: string
  youtube: string
  post: [Post]
}
