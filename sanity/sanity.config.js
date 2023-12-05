import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from "./deskStructure";

export default defineConfig({
  name: 'default',
  title: 'Angular',

  projectId: 'mqltihbr',
  dataset: 'production',

  plugins: [deskTool({
      structure: deskStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != ['globalPage', 'homePage', 'workPage'])
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'globalPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'homePage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'workPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'aboutPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },

})
