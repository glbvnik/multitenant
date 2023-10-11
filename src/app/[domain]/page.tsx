import Link from 'next/link'

export function generateStaticParams() {
    return [{domain: 'tenantexample.fun'}]
}

export async function generateMetadata({params}: { params: { domain: string } }) {
    return {
        manifest: `http://${params.domain}/static/manifest.webmanifest`,
    }
}

const Page = ({params}: { params: { domain: string } }) => {
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
                <Link href={`/data`} style={{margin: 'auto'}}>
                    <button style={{width: 200, padding: '12px 0'}}>Fetch data page</button>
                </Link>
            </div>
        </div>
    )
}

export default Page
