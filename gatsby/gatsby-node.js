const path = require('path');

async function turnCategoryPages({ graphql, actions }) {
  // 1. Get a template for this page
  const categoryTemplate = path.resolve('./src/templates/Category.js')
  // 2. Query all artists
  const { data } = await graphql(`
      query {
          categories: allSanityCategoryPage {
            nodes {
                title
                id
                slug {
                    current
                }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.categories.nodes.forEach((category) => {
    actions.createPage({
      // url forths new page
      path: `/category/${category.slug.current}`,
      component: categoryTemplate,
      context: {
        language: 'es',
        slug: category.slug.current,
      },
      ownerNodeId: category.id,
    })
  });
}

async function turnBlogCategoryPages({ graphql, actions }) {
  // 1. Get a template for this page
  const blogCategoryTemplate = path.resolve('./src/templates/BlogCategory.js')
  // 2. Query all artists
  const { data } = await graphql(`
      query {
          blogCategories: allSanityBlogCategories {
            nodes {
                title
                id
                slug {
                    current
                }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.blogCategories.nodes.forEach((blogCategory) => {
    actions.createPage({
      // url forths new page
      path: `/blogCategory/${blogCategory.slug.current}`,
      component: blogCategoryTemplate,
      context: {
        language: 'es',
        slug: blogCategory.slug.current,
      },
      ownerNodeId: blogCategory.id,
    })
  });
}






async function turnProjectPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve('./src/templates/Project.js')
  // 2. Query all artists
  const { data } = await graphql(`
      query {
          projects: allSanityProjectPage {
            nodes {
                title
                id
                slug {
                    current
                }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // url forths new page
      path: `/work/${project.slug.current}`,
      component: projectTemplate,
      context: {
        language: 'es',
        slug: project.slug.current,
      },
      ownerNodeId: project.id,
    })
  });
}


exports.createPages = async (params) => {
    // Create Pages dynamically
    await Promise.all([
      // 1. Artists
      turnCategoryPages(params),
      turnBlogCategoryPages(params),
      turnProjectPages(params),
  
    ])
  
  }