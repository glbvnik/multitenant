import Image from 'next/image'
import fs from "fs";

export function generateStaticParams() {
    const data = fs.readFileSync(`${process.cwd()}/domains.txt`, 'utf8')

    return data.split(', ').map(domain => ({domain}))
}

const Page = async ({params}: { params: { domain: string } }) => {
    const randomNum = Math.random()

    const res = await fetch('https://www.uuidtools.com/api/generate/v1', {next: {revalidate: 10}})

    const data = (await res.json())[0]

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: 32,
                paddingTop: 120
            }}>
                <div>Random number: {randomNum}</div>
                <div>Data: {data}</div>
            </div>
            <div style={{display: 'flex', paddingTop: 120}}>
                <Image
                    priority
                    src={`http://${params.domain}/static/icon-256x256.png`}
                    height={256}
                    width={256}
                    alt='ubuntu'
                    style={{margin: 'auto'}}
                />
            </div>
        </div>
    )
}

export default Page
