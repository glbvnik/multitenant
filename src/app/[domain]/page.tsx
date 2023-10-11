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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 32,
            paddingTop: 120
        }}>Domain: {params.domain}</div>
    )
}

export default Page
