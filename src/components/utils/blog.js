export function convertBlogPostList (edges) {
  return edges.map((edge) => {
    const { fields, frontmatter, id, body } = edge.node
    return {
      id,
      url: fields.slug,
      title: frontmatter.title,
      shortDescription: frontmatter.shortDescription,
      description: frontmatter.description,
      author: frontmatter.author,
      date: new Date(frontmatter.date),
      image: frontmatter.picture
        ? frontmatter.picture.childImageSharp.fixed
        : null,
      body
    }
  })
}
