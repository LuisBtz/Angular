// deskStructure.js


export default (S) =>
  S.list()
    .title('General')
    .items([
        S.listItem()
          .title('Global Page')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('globalPage')
              .documentId('globalPage')
        ),
        S.listItem()
          .title('Home Page')
          .icon(() => '🏡')
          .child(
            S.document()
              .schemaType('homePage')
              .documentId('homePage')
        ),
        S.listItem()
          .title('Work Page')
          .icon(() => '🛠️')
          .child(
            S.document()
              .schemaType('workPage')
              .documentId('workPage')
        ),
        S.listItem()
          .title('About Page')
          .icon(() => '👨‍👩‍👧‍👦')
          .child(
            S.document()
              .schemaType('aboutPage')
              .documentId('aboutPage')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['globalPage', 'homePage', 'workPage', 'aboutPage'].includes(listItem.getId()))
    ])