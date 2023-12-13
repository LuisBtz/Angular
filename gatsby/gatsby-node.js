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
      turnProjectPages(params),
  
    ])
  
  }