import Link from 'next/link'
import fs from 'fs'
import {notFound} from 'next/navigation'
import Notifications from "@/app/[domain]/Notifications";

export function generateStaticParams() {
    const data = fs.readFileSync(`${process.cwd()}/domains.txt`, 'utf8')

    return data.split(', ').map(domain => ({domain}))
}

export async function generateMetadata({params}: { params: { domain: string } }) {
    return {
        manifest: `https://${params.domain}/static/manifest.webmanifest`,
    }
}

// export const dynamicParams = true

// will not delete generated static page
// export const revalidate = 30

const Page = ({params}: { params: { domain: string } }) => {
    const data = fs.readFileSync(`${process.cwd()}/domains.txt`, 'utf8')

    if (!data.split(', ').map(domain => ({domain})).find(({domain}) => domain === params.domain)) {
        notFound()
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 32,
                paddingTop: 120
            }}>
                Domain: {params.domain}
            </div>
            <div style={{display: 'flex', paddingTop: 120}}>
                <Link href={`/${params.domain}/data`} style={{margin: 'auto'}}>
                    <button style={{width: 200, padding: '12px 0'}}>Fetch data page</button>
                </Link>
            </div>
            <Notifications />
        </div>
    )
}

export default Page
