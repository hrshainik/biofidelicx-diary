export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    console.log('Secret token not validated!')
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!req.body) {
    return res.status(422).json({ message: 'Invalid request body' })
  }

  try {
    const typename = req.body.data.__typename
    const slug = req.body.data.slug
    await res.revalidate('/')
    if (typename === 'Author') {
      await res.revalidate('/author')
      await res.revalidate(`/author/${slug}`)
    } else if (typename === 'Cateogry') {
      await res.revalidate('/category')
      await res.revalidate(`/category/${slug}`)
    } else if (typename === 'Post') {
      await res.revalidate(`/post/${slug}`)
    }
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
