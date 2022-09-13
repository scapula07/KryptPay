import { Web3Storage } from 'web3.storage'

function makeStorageClient () {
    return new Web3Storage({ token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAyNjZkQUY3OEMzNkUxM2NGNTY1NDc3MkMzMkY4MjY4ODM5ZDNlYmUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjMwNzE1MDIxNjMsIm5hbWUiOiJrcnlwdFBheSJ9.hJ_Ms8RcvH0DWH4eZHkDekw8GbcpX7VzccJ7-GQcEzU"})
  }

  export const storeFiles =async(payload,fileName)=> {
     console.log("inweb3")
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    const files = [
        new File([blob], `${fileName}.json`)
      ]
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

  export const retrieveFile=async (cid) =>{
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
  
    // request succeeded! do something with the response object here...
    const files = await res.files()
     for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    console.log(file)
  }
  }