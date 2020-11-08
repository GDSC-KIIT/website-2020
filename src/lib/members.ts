import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import remark, { stringify } from 'remark'
// import html from 'remark-html'

const membersDirectory = path.resolve(process.cwd(),"src","collections", 'members')
console.log( membersDirectory )

export function getMembersData() {
    // Get file names under /collections/members
    const fileNames = fs.readdirSync(membersDirectory)
    const allMembersData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(membersDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the Member metadata section
      const matterResult = matter(fileContents)
  
      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as { name:string;
            position: string;
            image_path: string;
            twitter:string;
            github: string;
            linkedIn: string;
            order: number
               })
      }
    })
    return allMembersData.sort((a, b) => {
      if (a.order > b.order) {
        return 1
      } else {
        return -1
      }
    })
  }

  export function getAllMemberIds() {
    const fileNames = fs.readdirSync(membersDirectory)
  
  
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getMemberData(id:string) {
    const fullPath = path.join(membersDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the Member metadata section
    const matterResult = matter(fileContents)

    
  
    return {
      id,
      ...(matterResult.data as { name:string;
        position: string;
        image_path: string;
        twitter:string;
        github: string;
        linkedIn: string;
           }),
    }
  }

