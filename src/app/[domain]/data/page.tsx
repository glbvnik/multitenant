import Image from 'next/image'

const Page = ({params}: { params: { domain: string } }) => {
    const randomNum = Math.random()

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 32,
                paddingTop: 120
            }}>
                Random number: {randomNum}
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
