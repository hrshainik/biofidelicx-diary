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
    const body = JSON.parse(req.body)
    console.log(body.data.__typename)
    if (body.data.__typename === 'Author') {
      await res.revalidate(`/author/${body.data.slug}`)
    } else if (body.data.__typename === 'Cateogry') {
      await res.revalidate(`/category/${body.data.slug}`)
    } else if (body.data.__typename === 'Post') {
      await res.revalidate(`/post/${body.data.slug}`)
    }
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
