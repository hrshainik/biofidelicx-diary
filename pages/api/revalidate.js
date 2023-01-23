export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    console.log('Secret token not validated!')
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!req.body) {
    return res.status(422).json({ message: 'Invalid request body' })
  }

  try {
    const typename = req.body.data.__typename
    console.log('Typename', typename)
    const slug = req.body.data.slug
    console.log('Slug', slug)
    await res.revalidate('/')
    if (typename === 'Author') {
      console.log('Inside author')
      await res.revalidate('/author')
      await res.revalidate(`/author/${slug}`)
    } else if (typename === 'Cateogry') {
      console.log('Inside category')
      await res.revalidate('category')
      await res.revalidate(`/category/${slug}`)
    } else if (typename === 'Post') {
      console.log('Inside post')
      await res.revalidate(`/post/${slug}`)
    }
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
